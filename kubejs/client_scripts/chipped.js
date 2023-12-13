if (Platform.mods.roughlyenoughitems !== undefined) {
  REIEvents.groupEntries(event => {
    const chipped = ['chipped:amethyst_block', 'chipped:coal_block', 'chipped:crying_obsidian', 'chipped:lodestone', 'chipped:lapis_block', 'chipped:diamond_block', 'chipped:emerald_block', 'chipped:gold_block',
      'chipped:iron_block', 'chipped:netherite_block', 'chipped:waxed_copper_block', 'chipped:waxed_exposed_copper_block', 'chipped:waxed_weathered_copper', 'chipped:waxed_oxidized_copper', 'chipped:blue_ice',
      'chipped:ice', 'chipped:packed_ice', 'chipped:packed_mud', 'chipped:bone_block', 'chipped:ancient_debris', 'chipped:andesite', 'chipped:basalt', 'chipped:blackstone', 'chipped:calcite', 'chipped:cobblestone',
      'chipped:dark_prismarine', 'chipped:deepslate', 'chipped:diorite', 'chipped:dripstone_block', 'chipped:end_stone', 'chipped:gilded_blackstone', 'chipped:granite', 'chipped:magma_block', 'chipped:mossy_cobblestone',
      'chipped:mossy_stone_bricks', 'chipped:nether_bricks', 'chipped:netherrack', 'chipped:obsidian', 'chipped:prismarine', 'chipped:purpur_block', 'chipped:quartz_block', 'chipped:raw_copper_block', 'chipped:raw_gold_block',
      'chipped:raw_iron_block', 'chipped:amethyst_block', 'chipped:coal_block', 'chipped:red_nether_bricks', 'chipped:red_sandstone', 'chipped:sandstone', 'chipped:stone', 'chipped:smooth_stone', 'chipped:tuff',
      'chipped:terracotta', 'chipped:black_terracotta', 'chipped:blue_terracotta', 'chipped:brown_terracotta', 'chipped:cyan_terracotta', 'chipped:gray_terracotta', 'chipped:green_terracotta', 'chipped:light_blue_terracotta',
      'chipped:light_gray_terracotta', 'chipped:lime_terracotta', 'chipped:magenta_terracotta', 'chipped:orange_terracotta', 'chipped:pink_terracotta', 'chipped:purple_terracotta', 'chipped:red_terracotta',
      'chipped:white_terracotta', 'chipped:yellow_terracotta', 'chipped:black_glazed_terracotta', 'chipped:blue_glazed_terracotta', 'chipped:brown_glazed_terracotta', 'chipped:cyan_glazed_terracotta',
      'chipped:gray_glazed_terracotta', 'chipped:green_glazed_terracotta', 'chipped:light_blue_glazed_terracotta', 'chipped:light_gray_glazed_terracotta', 'chipped:lime_glazed_terracotta',
      'chipped:magenta_glazed_terracotta', 'chipped:orange_glazed_terracotta', 'chipped:pink_glazed_terracotta', 'chipped:purple_glazed_terracotta', 'chipped:red_glazed_terracotta', 'chipped:white_glazed_terracotta',
      'chipped:yellow_glazed_terracotta', 'chipped:black_concrete', 'chipped:blue_concrete', 'chipped:brown_concrete', 'chipped:cyan_concrete', 'chipped:gray_concrete', 'chipped:green_concrete', 'chipped:light_blue_concrete',
      'chipped:light_gray_concrete', 'chipped:lime_concrete', 'chipped:magenta_concrete', 'chipped:orange_concrete', 'chipped:pink_concrete', 'chipped:purple_concrete', 'chipped:red_concrete', 'chipped:white_concrete',
      'chipped:yellow_concrete', 'chipped:bricks', 'chipped:borderless_bricks', 'chipped:mud_bricks', 'chipped:pointed_dripstone', 'chipped:iron_bars', 'chipped:redstone_block', 'chipped:lantern', 'chipped:soul_lantern',
      'chipped:special_lantern', 'chipped:special_soul_lantern', 'chipped:sponge', 'chipped:acacia_leaves', 'chipped:birch_leaves', 'chipped:dark_oak_leaves', 'chipped:jungle_leaves', 'chipped:mangrove_roots',
      'chipped:oak_leaves', 'chipped:spruce_leaves', 'chipped:hay_block', 'chipped:moss_block', 'chipped:shroomlight', 'chipped:dried_kelp_block', 'chipped:nether_wart_block', 'chipped:warped_wart_block', 'chipped:dirt',
      'chipped:snow_block', 'chipped:clay', 'chipped:mud', 'chipped:gravel', 'chipped:sand', 'chipped:soul_sand', 'chipped:cobweb', 'chipped:black_wool', 'chipped:blue_wool', 'chipped:brown_wool', 'chipped:cyan_wool',
      'chipped:gray_wool', 'chipped:green_wool', 'chipped:light_blue_wool', 'chipped:light_gray_wool', 'chipped:lime_wool', 'chipped:magenta_wool', 'chipped:orange_wool', 'chipped:pink_wool', 'chipped:purple_wool',
      'chipped:red_wool', 'chipped:white_wool', 'chipped:yellow_wool', 'chipped:black_carpet', 'chipped:blue_carpet', 'chipped:brown_carpet', 'chipped:cyan_carpet', 'chipped:gray_carpet', 'chipped:green_carpet',
      'chipped:light_blue_carpet', 'chipped:light_gray_carpet', 'chipped:lime_carpet', 'chipped:magenta_carpet', 'chipped:orange_carpet', 'chipped:pink_carpet', 'chipped:purple_carpet', 'chipped:red_carpet',
      'chipped:white_carpet', 'chipped:yellow_carpet', 'chipped:acacia_leaves', 'chipped:birch_leaves', 'chipped:dark_oak_leaves', 'chipped:jungle_leaves', 'chipped:oak_leaves', 'chipped:spruce_leaves',
      'chipped:brown_mushroom_block', 'chipped:red_mushroom_block', 'chipped:mushroom_stem', 'chipped:melon', 'chipped:pumpkin', 'chipped:carved_pumpkin', 'chipped:jack_o_lantern', 'chipped:acacia_planks',
      'chipped:birch_planks', 'chipped:dark_oak_planks', 'chipped:jungle_planks', 'chipped:mangrove_planks', 'chipped:oak_planks', 'chipped:spruce_planks', 'chipped:crimson_planks', 'chipped:warped_planks',
      'chipped:cherry_planks', 'chipped:bamboo_planks', 'chipped:acacia_log', 'chipped:birch_log', 'chipped:dark_oak_log', 'chipped:jungle_log', 'chipped:mangrove_log', 'chipped:oak_log', 'chipped:spruce_log',
      'chipped:crimson_stem', 'chipped:warped_stem', 'chipped:cherry_log', 'chipped:barrel', 'chipped:bookshelf', 'chipped:ladder', 'chipped:stripped_acacia_log', 'chipped:stripped_birch_log', 'chipped:stripped_dark_oak_log',
      'chipped:stripped_jungle_log', 'chipped:stripped_mangrove_log', 'chipped:stripped_oak_log', 'chipped:stripped_spruce_log', 'chipped:stripped_warped_stem', 'chipped:stripped_crimson_stem', 'chipped:stripped_cherry_log',
      'chipped:acacia_door', 'chipped:birch_door', 'chipped:dark_oak_door', 'chipped:jungle_door', 'chipped:mangrove_door', 'chipped:oak_door', 'chipped:spruce_door', 'chipped:crimson_door', 'chipped:warped_door',
      'chipped:cherry_door', 'chipped:bamboo_door', 'chipped:acacia_trapdoor', 'chipped:birch_trapdoor', 'chipped:dark_oak_trapdoor', 'chipped:jungle_trapdoor', 'chipped:mangrove_trapdoor', 'chipped:oak_trapdoor',
      'chipped:spruce_trapdoor', 'chipped:crimson_trapdoor', 'chipped:warped_trapdoor', 'chipped:cherry_trapdoor', 'chipped:bamboo_trapdoor', 'chipped:glowstone', 'chipped:ochre_froglight', 'chipped:brown_mushroom',
      'chipped:red_mushroom', 'chipped:crimson_roots', 'chipped:warped_roots', 'chipped:lily_pad', 'chipped:nether_sprouts', 'chipped:vine', 'chipped:crimson_fungus', 'chipped:warped_fungus', 'chipped:torch', 'chipped:glass',
      'chipped:glass_pane', 'chipped:sea_lantern', 'chipped:redstone_torch', 'chipped:redstone_lamp', 'chipped:black_stained_glass', 'chipped:black_stained_glass_pane', 'chipped:blue_stained_glass',
      'chipped:blue_stained_glass_pane', 'chipped:brown_stained_glass', 'chipped:brown_stained_glass_pane', 'chipped:cyan_stained_glass', 'chipped:cyan_stained_glass_pane', 'chipped:gray_stained_glass',
      'chipped:gray_stained_glass_pane', 'chipped:green_stained_glass', 'chipped:green_stained_glass_pane', 'chipped:light_blue_stained_glass', 'chipped:light_blue_stained_glass_pane', 'chipped:light_gray_stained_glass',
      'chipped:light_gray_stained_glass_pane', 'chipped:lime_stained_glass', 'chipped:lime_stained_glass_pane', 'chipped:magenta_stained_glass', 'chipped:magenta_stained_glass_pane', 'chipped:orange_stained_glass',
      'chipped:orange_stained_glass_pane', 'chipped:pink_stained_glass', 'chipped:pink_stained_glass_pane', 'chipped:purple_stained_glass', 'chipped:purple_stained_glass_pane', 'chipped:red_stained_glass',
      'chipped:red_stained_glass_pane', 'chipped:white_stained_glass', 'chipped:white_stained_glass_pane', 'chipped:yellow_stained_glass', 'chipped:yellow_stained_glass_pane', 'chipped:pearlescent_froglight', 'chipped:verdant_froglight']
    const names = ['紫水晶块', '煤炭块', '哭泣的黑曜石', '磁石', '青金石块', '钻石块', '绿宝石块', '金块', '铁块', '下界合金块', '涂蜡的铜块', '涂蜡的暴露铜块', '涂蜡的风化铜块', '涂蜡的氧化铜块', '蓝冰', '冰', '浮冰', '压缩泥土', '骨头块',
      '远古残骸', '安山岩', '玄武岩', '黑石', '方解石', '圆石', '暗海晶石', '深板岩', '闪长岩', '滴水石块', '末地石', '镀金黑石', '花岗岩', '岩浆块', '苔藓圆石', '苔藓石砖', '下界砖块', '下界岩', '黑曜石', '海晶石', '紫珀块', '石英块', '生铜块',
      '生金块', '生铁块', '紫水晶块', '煤炭块', '红色下界砖', '红沙岩', '沙岩', '石头', '平滑石头', '凝灰岩', '陶瓦', '黑色陶瓦', '蓝色陶瓦', '棕色陶瓦', '青色陶瓦', '灰色陶瓦', '绿色陶瓦', '淡蓝色陶瓦', '淡灰色陶瓦', '黄绿色陶瓦', '品红色陶瓦',
      '橙色陶瓦', '粉红色陶瓦', '紫色陶瓦', '红色陶瓦', '白色陶瓦', '黄色陶瓦', '黑色釉面陶瓦', '蓝色釉面陶瓦', '棕色釉面陶瓦', '青色釉面陶瓦', '灰色釉面陶瓦', '绿色釉面陶瓦', '淡蓝色釉面陶瓦', '淡灰色釉面陶瓦', '黄绿色釉面陶瓦', '品红色釉面陶瓦',
      '橙色釉面陶瓦', '粉红色釉面陶瓦', '紫色釉面陶瓦', '红色釉面陶瓦', '白色釉面陶瓦', '黄色釉面陶瓦', '黑色混凝土', '蓝色混凝土', '棕色混凝土', '青色混凝土', '灰色混凝土', '绿色混凝土', '淡蓝色混凝土', '浅灰色混凝土', '石灰色混凝土',
      '品红色混凝土', '橙色混凝土', '粉红色混凝土', '紫色混凝土', '红色混凝土', '白色混凝土', '黄色混凝土', '砖块', '无边框砖块', '泥砖', '尖锐的滴石', '铁栏杆', '红石块', '灯笼', '灵魂灯笼', '特殊灯笼', '特殊灵魂灯笼', '海绵', '金合欢树叶',
      '白桦树叶', '深色橡树树叶', '丛林树叶', '红树根', '橡树树叶', '云杉树叶', '干草块', '苔藓块', '菌光体', '干海带块', '地狱疣块', '扭曲疣块', '泥土', '雪块', '粘土', '泥泞', '砂砾', '沙子', '灵魂沙', '蜘蛛网', '黑色羊毛', '蓝色羊毛', '棕色羊毛',
      '青色羊毛', '灰色羊毛', '绿色羊毛', '淡蓝色羊毛', '淡灰色羊毛', '酸橙色羊毛', '品红色羊毛', '橙色羊毛', '粉红色羊毛', '紫色羊毛', '红色羊毛', '白色羊毛', '黄色羊毛', '黑色地毯', '蓝色地毯', '棕色地毯', '青色地毯', '灰色地毯', '绿色地毯',
      '淡蓝色地毯', '淡灰色地毯', '酸橙色地毯', '品红色地毯', '橙色地毯', '粉红色地毯', '紫色地毯', '红色地毯', '白色地毯', '黄色地毯', '金合欢树叶', '白桦树叶', '深色橡木树叶', '丛林树叶', '橡木树叶', '云杉树叶', '棕色蘑菇块', '红色蘑菇块', '蘑菇茎',
      '西瓜', '南瓜', '雕刻过的南瓜', '南瓜灯', '金合欢木板', '白桦木板', '深色橡木木板', '丛林木板', '红树木板', '橡木木板', '云杉木板', '绯红木板', '扭曲木板', '樱花木板', '竹子木板', '金合欢原木', '白桦原木', '深色橡木原木', '丛林原木', '红树原木',
      '橡木原木', '云杉原木', '绯红菌柄', '扭曲菌柄', '樱花原木', '桶', '书架', '梯子', '剥皮金合欢原木', '剥皮白桦原木', '剥皮深色橡木原木', '剥皮丛林原木', '剥皮红树原木', '剥皮橡木原木', '剥皮云杉原木', '剥皮扭曲菌柄', '剥皮绯红菌柄',
      '剥皮樱花原木', '金合欢门', '白桦门', '深色橡木门', '丛林门', '红树门', '橡木门', '云杉木门', '绯红木门', '诡异木门', '樱桃木门', '竹门', '金合欢活板门', '白桦活板门', '深色橡木活板门', '丛林活板门', '红树活板门', '橡木活板门', '云杉活板门',
      '绯红活板门', '诡异活板门', '樱桃活板门', '竹活板门', '萤石', '赭色蛙灯', '棕色蘑菇', '红色蘑菇', '绯红菌索', '诡异菌索', '睡莲', '下界疣', '藤蔓', '绯红菌', '诡异菌', '火把', '玻璃', '玻璃板', '海晶灯', '红石火把', '红石灯', '黑色染色玻璃',
      '黑色染色玻璃板', '蓝色染色玻璃', '蓝色染色玻璃板', '棕色染色玻璃', '棕色染色玻璃板', '青色染色玻璃', '青色染色玻璃板', '灰色染色玻璃', '灰色染色玻璃板', '绿色染色玻璃', '绿色染色玻璃板', '淡蓝色染色玻璃', '淡蓝色染色玻璃板',
      '淡灰色染色玻璃', '淡灰色染色玻璃板', '酸橙色染色玻璃', '酸橙色染色玻璃板', '品红色染色玻璃', '品红色染色玻璃板', '橙色染色玻璃', '橙色染色玻璃板', '粉红色染色玻璃', '粉红色染色玻璃板', '紫色染色玻璃', '紫色染色玻璃板', '红色染色玻璃',
      '红色染色玻璃板', '白色染色玻璃', '白色染色玻璃板', '黄色染色玻璃', '黄色染色玻璃板', '珠光蛙明灯', '青翠蛙明灯']
    // 使用forEach遍历chipped物品组，对每个物品id调用event.groupItemsByTag函数
    chipped.forEach(function (chipped, index) {
    // 获取对应的名字
      let str = JSON.stringify(chipped)
      str = str.replace(/"/g, '') // 删除双引号
      str = str.replace(/:/g, '_') // 将冒号替换为下横线
      const name = names[index]
      // 调用event.groupItemsByTag函数，传入配方id，折叠名字和物品
      event.groupItemsByTag(`chipped:rei_groups/${str}`, name, chipped)
    })
  })
}
