const ingot = ['tin', 'bronze', 'zinc', 'nickel', 'lead']
const ingot2 = ['iron', 'copper', 'gold']

ServerEvents.recipes(e => {
  e.recipes.create.sequenced_assembly([
    Item.of('gtceu:basic_electronic_circuit', 2).withChance(200.0),
    Item.of('gtceu:vacuum_tube').withChance(8.0),
    Item.of('gtceu:red_alloy_single_wire').withChance(8.0),
    Item.of('gtceu:resistor').withChance(8.0)
  ], 'gtceu:resin_printed_circuit_board', [
    e.recipes.createFilling('gtceu:resin_printed_circuit_board', [
      'gtceu:resin_printed_circuit_board',
      Fluid.of('gtceu:tin', 5832)
    ]),
    e.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:vacuum_tube']),
    e.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:resistor']),
    e.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:red_alloy_single_wire']),
    e.recipes.createPressing('gtceu:resin_printed_circuit_board', 'gtceu:resin_printed_circuit_board'),
    e.recipes.createDeploying('gtceu:resin_printed_circuit_board', ['gtceu:resin_printed_circuit_board', 'gtceu:rubber_plate'])
  ]).transitionalItem('gtceu:resin_printed_circuit_board')
    .loops(2)

  e.recipes.create.sequenced_assembly([
    Item.of('gtceu:good_electronic_circuit', 2).withChance(200.0),
    Item.of('gtceu:basic_electronic_circuit').withChance(8.0),
    Item.of('gtceu:copper_single_wire').withChance(8.0),
    Item.of('gtceu:diode').withChance(8.0)
  ], 'gtceu:phenolic_printed_circuit_board', [
    e.recipes.createFilling('gtceu:phenolic_printed_circuit_board', [
      'gtceu:phenolic_printed_circuit_board',
      Fluid.of('gtceu:tin', 5832)
    ]),
    e.recipes.createDeploying('gtceu:phenolic_printed_circuit_board', ['gtceu:phenolic_printed_circuit_board', 'gtceu:basic_electronic_circuit']),
    e.recipes.createDeploying('gtceu:phenolic_printed_circuit_board', ['gtceu:phenolic_printed_circuit_board', 'gtceu:diode']),
    e.recipes.createDeploying('gtceu:phenolic_printed_circuit_board', ['gtceu:phenolic_printed_circuit_board', 'gtceu:copper_single_wire']),
    e.recipes.createPressing('gtceu:phenolic_printed_circuit_board', 'gtceu:phenolic_printed_circuit_board'),
    e.recipes.createDeploying('gtceu:phenolic_printed_circuit_board', ['gtceu:phenolic_printed_circuit_board', 'gtceu:rubber_plate'])
  ]).transitionalItem('gtceu:phenolic_printed_circuit_board')
    .loops(3)

  e.recipes.create.sequenced_assembly([
    Item.of('create:track', 32).withChance(240.0)
  ], 'minecraft:smooth_stone_slab', [
    e.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'gtceu:iron_long_rod']),
    e.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'gtceu:iron_long_rod']),
    e.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'gtceu:iron_long_rod']),
    e.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'gtceu:treated_wood_rod']),
    e.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', 'gtceu:treated_wood_rod']),
    e.recipes.createPressing('create:incomplete_track', 'create:incomplete_track')
  ]).transitionalItem('create:incomplete_track')
    .loops(1)

  e.recipes.create.sequenced_assembly([
    Item.of('create:precision_mechanism').withChance(240.0)
  ], 'gtceu:brass_plate', [
    e.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
    e.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
    e.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'gtceu:brass_screw']),
    e.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'gtceu:andesite_alloy_small_gear'])
  ]).transitionalItem('create:incomplete_precision_mechanism')
    .loops(5)

  for (const i of ingot) {
    e.recipes.create.mixing(Fluid.of(`gtceu:${i}`, 11664), `2x gtceu:${i}_dust`).heated()
    e.recipes.create.pressing(`gtceu:${i}_plate`, `gtceu:${i}_ingot`)
    e.recipes.create.crushing(`gtceu:${i}_dust`, `gtceu:${i}_ingot`)
  }

  for (const i of ingot2) {
    e.recipes.create.mixing(Fluid.of(`gtceu:${i}`, 11664), `2x gtceu:${i}_dust`).heated()
    e.recipes.create.pressing(`gtceu:${i}_plate`, `minecraft:${i}_ingot`)
    e.recipes.create.crushing(`gtceu:${i}_dust`, `minecraft:${i}_ingot`)
  }

  e.recipes.create.mixing(Fluid.of('gtceu:andesite_alloy', 11664), '2x gtceu:andesite_alloy_dust').heated()
  e.recipes.create.pressing('gtceu:andesite_alloy_plate', 'create:andesite_alloy')
  e.recipes.create.crushing('gtceu:andesite_alloy_dust', 'create:andesite_alloy')
  e.recipes.create.mixing(Fluid.of('gtceu:brass', 11664), '2x gtceu:brass_dust').heated()
  e.recipes.create.pressing('gtceu:brass_plate', 'create:brass_ingot')
  e.recipes.create.crushing('gtceu:brass_dust', 'create:brass_ingot')
  e.recipes.create.crushing('gtceu:flint_dust', 'minecraft:flint')
  e.recipes.create.crushing('gtceu:quartz_sand_dust', '#minecraft:sand')
  e.recipes.create.crushing('gtceu:clay_dust', 'minecraft:clay_ball')
  e.recipes.create.crushing('gtceu:brick_dust', 'minecraft:brick')
  e.recipes.create.crushing('create:cinder_flour', 'minecraft:red_nether_bricks')
  e.recipes.create.mixing(Fluid.of('gtceu:redstone', 11664), '2x minecraft:redstone').heated()
  e.recipes.create.mechanical_crafting('create:crushing_wheel', [
    'BAAAB',
    'ACDCA',
    'ADEDA',
    'ACDCA',
    'BAAAB'
  ], {
    A: 'gtceu:diamond_dust',
    B: 'gtceu:sticky_resin',
    C: 'gtceu:steel_plate',
    D: 'gtceu:steel_double_plate',
    E: 'gtceu:steel_gear'
  })
})
