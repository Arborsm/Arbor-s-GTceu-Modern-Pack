GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
  event.create('ad')
    .targets('ad_astra:moon_stone', 'ad_astra:venus_stone', 'ad_astra:mars_stone', 'minecraft:blackstone', 'minecraft:basalt', 'ad_astra:mercury_stone', 'minecraft:deepslate', 'ad_astra:glacio_stone', 'minecraft:soul_soil')
    .dimensions('ad_astra:moon', 'ad_astra:venus', 'ad_astra:mars', 'ad_astra:mercury', 'ad_astra:glacio')

  event.create('tf')
    .targets('minecraft:stone')
    .dimensions('twilightforest:twilight_forest')
})
