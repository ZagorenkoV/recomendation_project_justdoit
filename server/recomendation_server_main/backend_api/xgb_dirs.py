import pandas as pd
import numpy as np
from xgboost import XGBClassifier
import time
from geopy import distance

allgroups = pd.read_csv("groups.csv", dtype={"уникальный номер":"int32"})
groups_now = pd.read_csv("groups_now.csv", dtype={"уникальный номер": "int32","направление 1":"category",
                                                      "направление 2":"category" , "направление 3":"category", "район площадки":"category"})
def get_dirs_xgb(user_id, n_samples):
    att = pd.read_csv("att_dirs.csv", dtype={"уникальный номер участника": "int32", "уникальный номер группы": "int32",
                                           "уникальный номер занятия": "int32"})
    dirsframe = att[att["уникальный номер участника"].eq(user_id)][["уникальный номер группы", "направление 2", "направление 3"]]
    # print(dirsframe, "все направления пользователя")
    dirsframe = dirsframe[dirsframe["направление 2"].isin(groups_now["направление 2"].unique().tolist())]
    # print(dirsframe["направление 2"], "все актуальные на сегодня уникальные направления пользователя")
    group_list = dirsframe["уникальный номер группы"].tolist()
    for i in allgroups["район площадки"].unique(): #################################################################
        try:
            short = i.split(",")
            allgroups.loc[allgroups["район площадки"] == i, "район площадки"] = short[0]
        except:
            continue ###############################################################################################
    for group in group_list:
        dirsframe.loc[dirsframe["уникальный номер группы"].eq(group), "район площадки"] = allgroups.loc[allgroups["уникальный номер"].eq(group), "район площадки"].item()
        dirsframe.loc[dirsframe["уникальный номер группы"].eq(group), "направление 1"] = allgroups.loc[allgroups["уникальный номер"].eq(group), "направление 1"].item()
    dirsframe = dirsframe.replace(np.nan, "Без района")
    dirsframe = dirsframe.drop_duplicates(subset=["направление 2", "район площадки"])
    # print(dirsframe["направление 2"], "полученные уникальные направления")
    if not dirsframe.empty:
        try:
            samples = dirsframe.sample(n=n_samples)
            flag, n_dirs_to_get = 1, 3
        except:
            samples = dirsframe.sample(n=1)
            flag, n_dirs_to_get = 3, 1
    else:
        samples = groups_now.sample(n=n_samples)
        flag, n_dirs_to_get = 1, 3
    return samples[["направление 1", "направление 2", "район площадки"]], flag, n_dirs_to_get

def make_recs_dirs(user_geo, user_id):
    t0 = time.time()
    # print(time.time() - t0, "sec1")
    cols = ["направление 1", "направление 2", "район площадки"]
    train_data = groups_now[cols]
    d_groups_inference = dict()

    for i in enumerate(groups_now["направление 3"].unique().tolist()):
        d_groups_inference[i[0]] = i[1]

    # print(time.time() - t0, "sec2")
    clf = XGBClassifier(objective='multi:softmax', gpu_id=0, tree_method="gpu_hist", feature_types=["c", "c", "c"],
                                gamma=0.1,
                                learning_rate=0.1, enable_categorical=True,
                                max_depth=7,
                                reg_lambda=0.5, #predictor="gpu_predictor",
                                subsample=0.8,
                                eval_metric=['merror'],
                                seed=42)
    clf.load_model('xgb_groups.json')
    try_df, flag_usage, n_dirs_to_get = get_dirs_xgb(user_id, 3)
    print(try_df["направление 2"])
    try_df = pd.concat([train_data, try_df], ignore_index=True)
    try_df = try_df.astype({"направление 1":"category", "направление 2":"category", "район площадки":"category"})

    pred = clf.predict_proba(try_df[-n_dirs_to_get:])
    # print(time.time() - t0, "sec3")
    group_list = []
    for i in range(len(pred)):
        a = enumerate(pred[i])
        max_v_index = sorted(a,key=lambda x: x[1], reverse=True)[:flag_usage]

        for i in groups_now["geo"].unique():
            try:
                groups_now.loc[groups_now["geo"]==i, "distance"] = distance.distance(user_geo.split(" "), i).km
            except:
                continue
        for i in range(len(max_v_index)):
            group_dir = d_groups_inference[max_v_index[i][0]]
            # print(group_dir, "directions")
            nearest_groups = groups_now.loc[groups_now["направление 3"].isin([group_dir])][["уникальный номер", "distance"]].min()
            group_distance = (int(nearest_groups["уникальный номер"]), '{:.1f} км'.format(nearest_groups["distance"]))
            group_list.append(group_distance)
    print(time.time() - t0, "sec END")
    return group_list