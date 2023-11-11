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
  // moon
  // 独居石
  event.add('monazite_vein_n', vein => {
    vein.clusterSize(24)
    vein.weight(30)
    vein.layer('ad')
    vein.density(0.2)
    vein.addSpawnDimension('ad_astra:moon')
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
    vein.heightRange({
      height: {
        type: 'uniform',
        min_inclusive: {
          absolute: 40
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
  // Mars
})
