import pandas as pd
import numpy as np
from xgboost import XGBClassifier
import time
from geopy import distance

def make_opros_recs(user_geo, dir_1, dir_2):
    t0 = time.time()
    groups_now = pd.read_csv("groups_now.csv", dtype={"уникальный номер": "int32","направление 1":"category",
                                                      "направление 2":"category" , "направление 3":"category", "район площадки":"category"})
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

    try_df = pd.DataFrame({"направление 1":[dir_1], "направление 2":[dir_2], "район площадки":[np.nan]})
    try_df = pd.concat([train_data, try_df], ignore_index=True)
    try_df = try_df.astype({"направление 1":"category", "направление 2":"category", "район площадки":"category"})

    pred = clf.predict_proba(try_df[-1:])
    # print(time.time() - t0, "sec3")
    a = enumerate(pred[0])
    max_v_index = sorted(a,key=lambda x: x[1], reverse=True)[:4]

    for i in groups_now["geo"].unique():
        try:
            groups_now.loc[groups_now["geo"]==i, "distance"] = distance.distance(user_geo.split(" "), i).km
        except:
            continue
    group_list = []
    for i in range(len(max_v_index)):
        group_dir = d_groups_inference[max_v_index[i][0]]
        # print(group_dir, "directions")
        nearest_groups = groups_now.loc[groups_now["направление 3"].isin([group_dir])][["уникальный номер", "distance"]].min()
        group_distance = (int(nearest_groups["уникальный номер"]), '{:.1f} км'.format(nearest_groups["distance"]))
        group_list.append(group_distance)
    print(time.time() - t0, "sec END")
    return group_list

user_geo = "55.901869 37.583544"
print(make_opros_recs(user_geo,"Образование","Пеший лекторий"))