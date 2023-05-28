import pandas as pd
import numpy as np
from geopy import distance

pd.set_option('display.max_columns', None)
groups_now = pd.read_csv("groups_now.csv", dtype={"уникальный номер": "int32"})
def make_blind_recs(user_geo):
    group_list = []
    if not pd.isna(user_geo):
        for i in groups_now["geo"].unique():
            try:
                groups_now.loc[groups_now["geo"] == i, "distance"] = distance.distance(user_geo.split(" "), i).km
            except:
                continue
        samples = groups_now["направление 3"].sample(n=4).tolist()
        for i in range(len(samples)):
            nearest_groups = groups_now.loc[groups_now["направление 3"].isin([samples[i]])][["уникальный номер", "distance"]].min()
            group_distance = (int(nearest_groups["уникальный номер"]), '{:.1f} км'.format(nearest_groups["distance"]))
            group_list.append(group_distance)
        return group_list
    else:
        samples = groups_now["уникальный номер"].sample(n=4).tolist()
        for i in range(len(samples)):
            group = (int(samples[i]), np.nan)
            group_list.append(group)
        return group_list
user_geo = np.nan#"55.901869 37.583544"
print(make_blind_recs(user_geo))