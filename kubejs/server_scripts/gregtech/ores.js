/* eslint prefer-const: "off" */
GTCEuServerEvents.oreVeins(event => {
  // overworld
  // 高岭石
  event.add('kaolinite_vein', vein => {
    vein.clusterSize(24)
    vein.weight(60)
    vein.layer(GTWorldGenLayers.STONE)
    vein.density(0.4)
    vein.addSpawnDimension('minecraft:overworld')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 30
        },
        max_inclusive: {
          absolute: 70
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(2).mat(GTMaterials.get('kaolinite')).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Zeolite).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.FullersEarth).size(1, 3))
        .layer(l => l.weight(1).mat(GTMaterials.GlauconiteSand).size(1, 1))
        .build()))
  })
  // 白云石
  event.add('wollastonite_vein', vein => {
    vein.clusterSize(36)
    vein.weight(40)
    vein.layer(GTWorldGenLayers.STONE)
    vein.density(0.4)
    vein.addSpawnDimension('minecraft:overworld')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 120
        },
        max_inclusive: {
          absolute: 200
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(2).mat(GTMaterials.get('dolomite')).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.get('wollastonite')).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Trona).size(1, 3))
        .layer(l => l.weight(1).mat(GTMaterials.get('andradite')).size(1, 1))
        .build()))
  })
  // 暮色
  // 方铅
  event.add('galena_vein_tf', vein => {
    vein.clusterSize(30)
    vein.weight(40)
    vein.layer('tf')
    vein.density(0.25)
    vein.addSpawnDimension('twilightforest:twilight_forest')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -30
        },
        max_inclusive: {
          absolute: 0
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Galena).size(2, 4))
        .layer(l => l.weight(3).mat(GTMaterials.Silver).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
        .build()))
  })
  // 蓝宝石
  event.add('sapphire_vein_tf', vein => {
    vein.clusterSize(25)
    vein.weight(60)
    vein.layer('tf')
    vein.density(0.25)
    vein.addSpawnDimension('twilightforest:twilight_forest')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -30
        },
        max_inclusive: {
          absolute: 0
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Almandine).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Pyrope).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Sapphire).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.GreenSapphire).size(1, 1))
        .build()))
  })
  // 橄榄石
  event.add('olivine_vein_tf', vein => {
    vein.clusterSize(30)
    vein.weight(20)
    vein.layer('tf')
    vein.density(0.25)
    vein.addSpawnDimension('twilightforest:twilight_forest')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -30
        },
        max_inclusive: {
          absolute: 0
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Bentonite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Magnetite).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.Olivine).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.GlauconiteSand).size(1, 1))
        .build()))
  })
  // 镍
  event.add('nickel_vein_tf', vein => {
    vein.clusterSize(30)
    vein.weight(40)
    vein.layer('tf')
    vein.density(0.25)
    vein.addSpawnDimension('twilightforest:twilight_forest')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -30
        },
        max_inclusive: {
          absolute: 0
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Garnierite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Nickel).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.Cobaltite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 1))
        .build()))
  })
  // 钻石
  event.add('diamond_vein_tf', vein => {
    vein.clusterSize(30)
    vein.weight(40)
    vein.layer('tf')
    vein.density(0.25)
    vein.addSpawnDimension('twilightforest:twilight_forest')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -30
        },
        max_inclusive: {
          absolute: 0
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Graphite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Diamond).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Coal).size(1, 1))
        .build()))
  })
  // 青金石
  event.add('lapis_vein_tf', vein => {
    vein.clusterSize(40)
    vein.weight(40)
    vein.layer('tf')
    vein.density(0.25)
    vein.addSpawnDimension('twilightforest:twilight_forest')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -30
        },
        max_inclusive: {
          absolute: 0
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Lazurite).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Sodalite).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Lapis).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Calcite).size(1, 1))
        .build()))
  })
  // 钼
  event.add('molybdenite_vein_tf', vein => {
    vein.clusterSize(25)
    vein.weight(5)
    vein.layer('tf')
    vein.density(0.25)
    vein.addSpawnDimension('twilightforest:twilight_forest')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -30
        },
        max_inclusive: {
          absolute: 0
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Wulfenite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Molybdenite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Molybdenum).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Powellite).size(1, 1))
        .build()))
  })
  // 煤
  event.add('coal_vein_tf', vein => {
    vein.clusterSize(35)
    vein.weight(80)
    vein.layer('tf')
    vein.density(0.25)
    vein.addSpawnDimension('twilightforest:twilight_forest')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -30
        },
        max_inclusive: {
          absolute: 0
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Coal).size(2, 4))
        .layer(l => l.weight(3).mat(GTMaterials.Coal).size(2, 4))
        .build()))
  })
  // 皂石
  event.add('lubricant_vein_tf', vein => {
    vein.clusterSize(25)
    vein.weight(40)
    vein.layer('tf')
    vein.density(0.25)
    vein.addSpawnDimension('twilightforest:twilight_forest')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -30
        },
        max_inclusive: {
          absolute: 0
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Soapstone).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Talc).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.GlauconiteSand).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 1))
        .build()))
  })
  // 金
  event.add('gold_vein_tf', vein => {
    vein.clusterSize(35)
    vein.weight(80)
    vein.layer('tf')
    vein.density(0.15)
    vein.addSpawnDimension('twilightforest:twilight_forest')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -30
        },
        max_inclusive: {
          absolute: 0
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.VanadiumMagnetite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Gold).size(1, 1))
        .build()))
  })
  // 铁
  event.add('iron_vein_tf', vein => {
    vein.clusterSize(36)
    vein.weight(120)
    vein.layer('tf')
    vein.density(0.3)
    vein.addSpawnDimension('twilightforest:twilight_forest')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -30
        },
        max_inclusive: {
          absolute: 0
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(5).mat(GTMaterials.Goethite).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Malachite).size(1, 2))
        .build()))
  })
  // 磷灰石
  event.add('apatite_vein_tf', vein => {
    vein.clusterSize(30)
    vein.weight(40)
    vein.layer('tf')
    vein.density(0.25)
    vein.addSpawnDimension('twilightforest:twilight_forest')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -30
        },
        max_inclusive: {
          absolute: 0
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Apatite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.TricalciumPhosphate).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Pyrochlore).size(1, 1))
        .build()))
  })
  // 盐
  event.add('salts_vein_tf', vein => {
    vein.clusterSize(30)
    vein.weight(50)
    vein.layer('tf')
    vein.density(0.2)
    vein.addSpawnDimension('twilightforest:twilight_forest')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -30
        },
        max_inclusive: {
          absolute: 0
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.RockSalt).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Salt).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Lepidolite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Spodumene).size(1, 1))
        .build()))
  })
  // 锡
  event.add('cassiterite_vein_tf', vein => {
    vein.clusterSize(36)
    vein.weight(50)
    vein.layer('tf')
    vein.density(0.4)
    vein.addSpawnDimension('twilightforest:twilight_forest')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -30
        },
        max_inclusive: {
          absolute: 0
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Tin).size(2, 3))
        .layer(l => l.weight(1).mat(GTMaterials.Cassiterite).size(1, 2))
        .build()))
  })
  // moon
  // 独居石
  event.add('monazite_vein_n', vein => {
    vein.clusterSize(24)
    vein.weight(30)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:moon')
    vein.addSpawnDimension('ad_astra:venus')
    vein.addSpawnDimension('ad_astra:glacio')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 20
        },
        max_inclusive: {
          absolute: 40
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Bastnasite).size(2, 4))
        .layer(l => l.weight(1).mat(GTMaterials.Monazite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Neodymium).size(1, 1))
        .build()))
  })
  // 铝土
  event.add('bauxite_vein', vein => {
    vein.clusterSize(36)
    vein.weight(80)
    vein.layer('ad')
    vein.density(0.3)
    vein.addSpawnDimension('ad_astra:moon')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 10
        },
        max_inclusive: {
          absolute: 80
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(2).state(() => Block.getBlock('ad_astra:moon_stone').defaultBlockState()).size(1, 6))
        .layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(1, 4))
        .layer(l => l.weight(1).mat(GTMaterials.Ilmenite).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(1, 1))
        .build()))
  })
  // 钛铁
  event.add('ilmenite_vein', vein => {
    vein.clusterSize(24)
    vein.weight(16)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:moon')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 70
        },
        max_inclusive: {
          absolute: 10
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Ilmenite).size(1, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Chromite).size(1, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Uvarovite).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Perlite).size(1, 1))
        .build()))
  })
  // 石英
  event.add('quartzite_vein', vein => {
    vein.clusterSize(24)
    vein.weight(20)
    vein.layer('ad')
    vein.density(0.3)
    vein.addSpawnDimension('ad_astra:moon')
    vein.addSpawnDimension('ad_astra:mars')
    vein.addSpawnDimension('ad_astra:venus')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 30
        },
        max_inclusive: {
          absolute: 80
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Quartzite).size(2, 4))
        .layer(l => l.weight(3).mat(GTMaterials.Barite).size(2, 4))
        .layer(l => l.weight(3).mat(GTMaterials.CertusQuartz).size(2, 4))
        .build()))
  })
  // 钼
  event.add('molybdenum_vein_ad', vein => {
    vein.clusterSize(25)
    vein.weight(5)
    vein.layer('ad')
    vein.density(0.25)
    vein.addSpawnDimension('ad_astra:moon')
    vein.addSpawnDimension('ad_astra:mercury')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 20
        },
        max_inclusive: {
          absolute: 50
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Wulfenite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Molybdenite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Molybdenum).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Powellite).size(1, 1))
        .build()))
  })
  // 方铅矿
  event.add('galena_vein_ad', vein => {
    vein.clusterSize(30)
    vein.weight(40)
    vein.layer('ad')
    vein.density(0.25)
    vein.addSpawnDimension('ad_astra:moon')
    vein.addSpawnDimension('ad_astra:mars')
    vein.addSpawnDimension('ad_astra:venus')
    vein.addSpawnDimension('ad_astra:glacio')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -15
        },
        max_inclusive: {
          absolute: 45
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Galena).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
        .build()))
  })
  // 铜
  event.add('copper_vein_ad', vein => {
    vein.clusterSize(36)
    vein.weight(80)
    vein.layer('ad')
    vein.density(0.3)
    vein.addSpawnDimension('ad_astra:moon')
    vein.addSpawnDimension('ad_astra:mercury')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -40
        },
        max_inclusive: {
          absolute: 15
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(2).mat(GTMaterials.Chalcopyrite).size(2, 3))
        .layer(l => l.weight(1).mat(GTMaterials.Iron).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Pyrite).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Copper).size(1, 2))
        .build()))
  })
  // 锡石
  event.add('cassiterite_vein_ad', vein => {
    vein.clusterSize(36)
    vein.weight(50)
    vein.layer('ad')
    vein.density(0.4)
    vein.addSpawnDimension('ad_astra:moon')
    vein.addSpawnDimension('ad_astra:venus')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 10
        },
        max_inclusive: {
          absolute: 80
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Tin).size(2, 3))
        .layer(l => l.weight(1).mat(GTMaterials.Cassiterite).size(1, 2))
        .build()))
  })
  // 戴斯
  event.add('desh_vein_ad', vein => {
    vein.clusterSize(24)
    vein.weight(30)
    vein.layer('ad')
    vein.density(0.3)
    vein.addSpawnDimension('ad_astra:moon')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 5
        },
        max_inclusive: {
          absolute: 40
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.get('desh')).size(2, 3))
        .layer(l => l.weight(1).mat(GTMaterials.get('arcane_crystal')).size(1, 2))
        .layer(l => l.weight(1).state(() => Block.getBlock('forbidden_arcanus:xpetrified_ore').defaultBlockState()))
        .build()))
  })
  // Mars
  // 紫金
  event.add('ostrum_vein_ad', vein => {
    vein.clusterSize(24)
    vein.weight(30)
    vein.layer('ad')
    vein.density(0.3)
    vein.addSpawnDimension('ad_astra:mars')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 5
        },
        max_inclusive: {
          absolute: 40
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.get('ostrum')).size(2, 3))
        .layer(l => l.weight(1).mat(GTMaterials.Scheelite).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Tungstate).size(1, 1))
        .build()))
  })
  // 坤
  event.add('arsenic_vein_ad', vein => {
    vein.clusterSize(32)
    vein.weight(60)
    vein.layer('ad')
    vein.density(0.4)
    vein.addSpawnDimension('ad_astra:mars')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 40
        },
        max_inclusive: {
          absolute: 60
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(1).mat(GTMaterials.get('arsenic')).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.get('bismuth')).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.get('antimony')).size(1, 2))
        .build()))
  })
  // 沥青铀
  event.add('pitchblende_vein_ad', vein => {
    vein.clusterSize(24)
    vein.weight(40)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:mars')
    vein.addSpawnDimension('ad_astra:venus')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 20
        },
        max_inclusive: {
          absolute: 60
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(2).mat(GTMaterials.Pitchblende).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Uraninite).size(1, 2))
        .build()))
  })
  // 晶质铀
  event.add('tuff_uraninite_vein_ad', vein => {
    vein.clusterSize(24)
    vein.weight(20)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:mars')
    vein.addSpawnDimension('ad_astra:mercury')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 20
        },
        max_inclusive: {
          absolute: 30
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(2).mat(GTMaterials.Uraninite).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.get('uranium')).size(1, 2))
        .build()))
  })
  // 钨酸锂
  event.add('scheelite_vein_ad', vein => {
    vein.clusterSize(24)
    vein.weight(16)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:mars')
    vein.addSpawnDimension('ad_astra:glacio')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 20
        },
        max_inclusive: {
          absolute: 60
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Scheelite).size(2, 4))
        .layer(l => l.weight(3).mat(GTMaterials.Tungstate).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Lithium).size(1, 1))
        .build()))
  })
  // 硫
  event.add('sulfur_vein_ad', vein => {
    vein.clusterSize(30)
    vein.weight(100)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:mars')
    vein.addSpawnDimension('ad_astra:venus')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 10
        },
        max_inclusive: {
          absolute: 30
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Sulfur).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Sphalerite).size(1, 1))
        .build()))
  })
  // 红石
  event.add('redstone_vein_ad', vein => {
    vein.clusterSize(30)
    vein.weight(60)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:mars')
    vein.addSpawnDimension('ad_astra:venus')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 5
        },
        max_inclusive: {
          absolute: 40
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Redstone).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Ruby).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Cinnabar).size(1, 1))
        .build()))
  })
  // 镍
  event.add('nickel_vein_ad', vein => {
    vein.clusterSize(30)
    vein.weight(40)
    vein.layer('ad')
    vein.density(0.25)
    vein.addSpawnDimension('ad_astra:mars')
    vein.addSpawnDimension('ad_astra:venus')
    vein.addSpawnDimension('ad_astra:glacio')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -10
        },
        max_inclusive: {
          absolute: 60
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Garnierite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Nickel).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.Cobaltite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 1))
        .build()))
  })
  // 金
  event.add('magnetite_vein_ad', vein => {
    vein.clusterSize(35)
    vein.weight(80)
    vein.layer('ad')
    vein.density(0.15)
    vein.addSpawnDimension('ad_astra:mars')
    vein.addSpawnDimension('ad_astra:mercury')
    vein.addSpawnDimension('ad_astra:glacio')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 10
        },
        max_inclusive: {
          absolute: 60
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.VanadiumMagnetite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Gold).size(1, 1))
        .build()))
  })
  // 铁
  event.add('iron_vein_ad', vein => {
    vein.clusterSize(36)
    vein.weight(120)
    vein.layer('ad')
    vein.density(0.3)
    vein.addSpawnDimension('ad_astra:mars')
    vein.addSpawnDimension('ad_astra:mercury')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -10
        },
        max_inclusive: {
          absolute: 60
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(5).mat(GTMaterials.Goethite).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Malachite).size(1, 2))
        .build()))
  })
  // 铍
  event.add('beryllium_vein_ad', vein => {
    vein.clusterSize(24)
    vein.weight(30)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:mars')
    vein.addSpawnDimension('ad_astra:mercury')
    vein.addSpawnDimension('ad_astra:venus')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 5
        },
        max_inclusive: {
          absolute: 30
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Beryllium).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Emerald).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Thorium).size(1, 1))
        .build()))
  })
  // 黝铜
  event.add('tetrahedrite_vein_ad', vein => {
    vein.clusterSize(36)
    vein.weight(70)
    vein.layer('ad')
    vein.density(0.3)
    vein.addSpawnDimension('ad_astra:mars')
    vein.addSpawnDimension('ad_astra:venus')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 80
        },
        max_inclusive: {
          absolute: 120
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(4).mat(GTMaterials.Tetrahedrite).size(2, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Copper).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Stibnite).size(1, 1))
        .build()))
  })
  // 盐
  event.add('salts_vein_ad', vein => {
    vein.clusterSize(30)
    vein.weight(50)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:mars')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 30
        },
        max_inclusive: {
          absolute: 70
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.RockSalt).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Salt).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Lepidolite).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Spodumene).size(1, 1))
        .build()))
  })
  // 硅岩火星
  event.add('naquadah_vein_ad_mars', vein => {
    vein.clusterSize(48)
    vein.weight(5)
    vein.layer('ad')
    vein.density(0.4)
    vein.addSpawnDimension('ad_astra:mars')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 10
        },
        max_inclusive: {
          absolute: 90
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Naquadah).size(2, 4))
        .layer(l => l.weight(1).mat(GTMaterials.get('enriched_naquadah')).size(1, 2))
        .build()))
  })
  // 水星
  // 铬
  event.add('chromium_vein_ad', vein => {
    vein.clusterSize(24)
    vein.weight(5)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:mercury')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -15
        },
        max_inclusive: {
          absolute: 15
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(1).mat(GTMaterials.Chromium).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Tungsten).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Molybdenum).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Manganese).size(1, 2))
        .build()))
  })
  // 铀-238
  event.add('uranium238_vein_ad', vein => {
    vein.clusterSize(12)
    vein.weight(5)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:mercury')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 65
        },
        max_inclusive: {
          absolute: 120
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(2).mat(GTMaterials.Uranium238).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Plutonium239).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Thorium).size(1, 2))
        .build()))
  })
  // 菱镁矿
  event.add('magnesite_vein_ad', vein => {
    vein.clusterSize(36)
    vein.weight(55)
    vein.layer('ad')
    vein.density(0.4)
    vein.addSpawnDimension('ad_astra:mercury')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 35
        },
        max_inclusive: {
          absolute: 65
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(2).mat(GTMaterials.Magnesite).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Sulfur).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Opal).size(1, 2))
        .build()))
  })
  // 铂
  event.add('platinum_vein_ad', vein => {
    vein.clusterSize(24)
    vein.weight(10)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:mercury')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -5
        },
        max_inclusive: {
          absolute: 25
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Platinum).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Chromium).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Cooperite).size(1, 2))
        .build()))
  })
  // 青金石
  event.add('lapis_vein_ad', vein => {
    vein.clusterSize(24)
    vein.weight(40)
    vein.layer('ad')
    vein.density(0.3)
    vein.addSpawnDimension('ad_astra:mercury')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 20
        },
        max_inclusive: {
          absolute: 50
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Lazurite).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Sodalite).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Lapis).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Calcite).size(1, 1))
        .build()))
  })
  // 橄榄石
  event.add('olivine_vein_ad', vein => {
    vein.clusterSize(30)
    vein.weight(30)
    vein.layer('ad')
    vein.density(0.25)
    vein.addSpawnDimension('ad_astra:mercury')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -20
        },
        max_inclusive: {
          absolute: 10
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Bentonite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Magnetite).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.Olivine).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.GlauconiteSand).size(1, 1))
        .build()))
  })
  // 锰
  event.add('manganese_vein_ad', vein => {
    vein.clusterSize(24)
    vein.weight(20)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:mercury')
    vein.addSpawnDimension('ad_astra:glacio')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -30
        },
        max_inclusive: {
          absolute: 0
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(2).mat(GTMaterials.Grossular).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Spessartine).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Pyrolusite).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Tantalite).size(1, 2))
        .build()))
  })
  //
  event.add('lubricant_vein_ad', vein => {
    vein.clusterSize(25)
    vein.weight(40)
    vein.layer('ad')
    vein.density(0.25)
    vein.addSpawnDimension('ad_astra:mercury')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 0
        },
        max_inclusive: {
          absolute: 50
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Soapstone).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Talc).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.GlauconiteSand).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 1))
        .build()))
  })
  // 蓝石
  event.add('saltpeter_vein_ad', vein => {
    vein.clusterSize(30)
    vein.weight(40)
    vein.layer('ad')
    vein.density(0.25)
    vein.addSpawnDimension('ad_astra:mercury')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 5
        },
        max_inclusive: {
          absolute: 45
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(2).state(() => Block.getBlock('ad_astra:mercury_stone').defaultBlockState()))
        .layer(l => l.weight(3).mat(GTMaterials.Saltpeter).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Diatomite).size(1, 1))
        .layer(l => l.weight(2).mat(GTMaterials.Electrotine).size(1, 1))
        .layer(l => l.weight(1).mat(GTMaterials.Alunite).size(1, 1))
        .build()))
  })
  // 金星
  // 耐热合金
  event.add('calorite_vein_ad', vein => {
    vein.clusterSize(24)
    vein.weight(30)
    vein.layer('ad')
    vein.density(0.3)
    vein.addSpawnDimension('ad_astra:venus')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 5
        },
        max_inclusive: {
          absolute: 40
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.get('calorite')).size(2, 3))
        .layer(l => l.weight(1).mat(GTMaterials.Amethyst).size(1, 2))
        .layer(l => l.weight(1).state(() => Block.getBlock('forbidden_arcanus:stella_arcanum').defaultBlockState()))
        .build()))
  })
  // 金红石
  event.add('rutile_vein_ad', vein => {
    vein.clusterSize(18)
    vein.weight(8)
    vein.layer('ad')
    vein.density(0.4)
    vein.addSpawnDimension('ad_astra:venus')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -15
        },
        max_inclusive: {
          absolute: 20
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Rutile).size(1, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Titanium).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(1, 2))
        .build()))
  })
  // 铱
  event.add('iridium_vein_ad', vein => {
    vein.clusterSize(24)
    vein.weight(10)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:venus')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -5
        },
        max_inclusive: {
          absolute: 40
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(2).mat(GTMaterials.Nickel).size(2, 3))
        .layer(l => l.weight(1).mat(GTMaterials.Iridium).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Palladium).size(1, 2))
        .build()))
  })
  // 软锰
  event.add('pyrolusite_vein_ad', vein => {
    vein.clusterSize(24)
    vein.weight(10)
    vein.layer('ad')
    vein.density(0.4)
    vein.addSpawnDimension('ad_astra:venus')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 0
        },
        max_inclusive: {
          absolute: 30
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Pyrolusite).size(2, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Apatite).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Tantalite).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Pyrochlore).size(1, 1))
        .build()))
  })
  // 硅岩
  event.add('naquadah_vein_ad', vein => {
    vein.clusterSize(48)
    vein.weight(30)
    vein.layer('ad')
    vein.density(0.4)
    vein.addSpawnDimension('ad_astra:venus')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 10
        },
        max_inclusive: {
          absolute: 90
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Naquadah).size(2, 3))
        .layer(l => l.weight(1).mat(GTMaterials.get('enriched_naquadah')).size(1, 2))
        .build()))
  })
  // Glacio
  // 锇
  event.add('osmium_vein_ad', vein => {
    vein.clusterSize(24)
    vein.weight(10)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:glacio')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -5
        },
        max_inclusive: {
          absolute: 30
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(3).mat(GTMaterials.Nickel).size(2, 3))
        .layer(l => l.weight(2).mat(GTMaterials.Osmium).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Iridium).size(1, 1))
        .build()))
  })
  // 中子素
  event.add('neutronium_vein_ad', vein => {
    vein.clusterSize(24)
    vein.weight(10)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:glacio')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -50
        },
        max_inclusive: {
          absolute: -10
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(2).mat(GTMaterials.Neutronium).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.get('infinity_catalyst')).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Naquadah).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Titanium).size(1, 2))
        .build()))
  })
  // 铌
  event.add('niobium_vein_ad', vein => {
    vein.clusterSize(36)
    vein.weight(60)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:glacio')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -50
        },
        max_inclusive: {
          absolute: -10
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(2).mat(GTMaterials.Niobium).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Iridium).size(1, 2))
        .layer(l => l.weight(1).mat(GTMaterials.Gallium).size(1, 1))
        .build()))
  })
  // 钍
  event.add('niobium_vein_ad', vein => {
    vein.clusterSize(36)
    vein.weight(60)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:glacio')
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: -10
        },
        max_inclusive: {
          absolute: 30
        }
      }
    })
    vein.discardChanceOnAirExposure(0)
    vein.generator(vein.generatorBuilder('gtceu:layer')
      .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
        .layer(l => l.weight(2).mat(GTMaterials.Thorium).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Uranium235).size(1, 2))
        .layer(l => l.weight(2).mat(GTMaterials.Plutonium241).size(1, 2))
        .build()))
  })
})
