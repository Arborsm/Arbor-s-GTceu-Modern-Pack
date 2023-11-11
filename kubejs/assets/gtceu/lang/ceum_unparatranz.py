import json

with open("D:\\Games\\MC\\.minecraft\\versions\\1.20.1-Fabric 0.14.23\kubejs\\assets\\gtceu\\lang\\zh_cn_packed.json", "r", encoding="utf-8") as o:
    original = json.load(o)

with open("D:\\Games\\MC\\.minecraft\\versions\\1.20.1-Fabric 0.14.23\kubejs\\assets\\gtceu\\lang\\zh_cn.json", "w", encoding="utf-8") as f:
    transdict = {}
    for trans in original:
        if len(trans['translation']) == 0:
            transdict[trans['key']] = trans['original']
        else:
            transdict[trans['key']] = trans['translation']
    json.dump(transdict, f, sort_keys=True, separators=(',', ':'), ensure_ascii=False, indent=4)
