ServerEvents.recipes(event => {
  event.remove({ type: 'create:blasting' })
  event.remove({ output: 'create:encased_fan' })
  event.remove({ id: /create:(.*)_seat/ })
  event.remove({ output: 'create:andesite_alloy' })
  event.remove({ output: 'create:steam_engine' })
  event.remove({ output: 'create:rose_quartz' })
  event.remove({ output: 'create:electron_tube' })
  event.remove({ output: 'create:shaft' })
  event.remove({ output: 'create:windmill_bearing' })
  event.remove({ output: 'create:mechanical_bearing' })
  event.remove({ output: 'create:andesite_casing' })
  event.remove({ output: 'create:cogwheel' })
  event.remove({ output: 'create:large_cogwheel' })
  event.remove({ output: 'create:copper_casing' })
  event.remove({ output: 'create:white_sail' })
  event.remove({ output: 'create:fluid_pipe' })
  event.remove({ output: 'create:mechanical_pump' })
  event.remove({ output: 'create:piston_extension_pole' })
  event.remove({ output: 'create:whisk' })
  event.remove({ output: 'create:mechanical_mixer' })
  event.remove({ output: 'create:brass_hand' })
  event.remove({ output: 'create:deployer' })
  event.remove({ output: 'create:water_wheel' })
  event.remove({ output: 'create:large_water_wheel' })
  event.remove({ output: 'create:crushing_wheel' })
  event.remove({ output: 'create:millstone' })
  event.remove({ output: 'create:empty_blaze_burner' })
  event.remove({ output: 'create:basin' })
  event.remove({ type: 'create:crushing' })
  event.remove({ output: 'create:brass_casing' })
  event.remove({ output: 'create:mechanical_crafter' })
  event.remove({ output: 'create:crafter_slot_cover' })
  event.remove({ output: 'create:chute' })
  event.remove({ output: 'create:sequenced_gearshift' })
  event.remove({ type: 'create:pressing' })
  event.remove({ output: 'create:mechanical_press' })
  event.remove({ id: 'create:crafting/kinetics/gearbox' })
  event.remove({ output: 'create:gearshift' })
  event.remove({ output: 'create:encased_chain_drive' })
  event.remove({ output: 'create:adjustable_chain_gearshift' })
  event.remove({ output: 'create:depot' })
  event.remove({ output: 'create:weighted_ejector' })
  event.remove({ output: 'create:smart_chute' })
  event.remove({ output: 'create:mechanical_arm' })
  event.remove({ output: 'create:track' })
  event.remove({ output: 'create:track_station' })
  event.remove({ output: 'create:track_signal' })
  event.remove({ output: 'create:track_observer' })
  event.remove({ output: 'create:analog_lever' })
  event.remove({ output: 'create:controls' })
  event.remove({ output: 'create:item_vault' })
  event.remove({ output: 'create:andesite_funnel' })
  event.remove({ output: 'create:brass_funnel' })
  event.remove({ output: 'create:clutch' })
  event.remove({ output: 'create:andesite_tunnel' })
  event.remove({ output: 'create:brass_tunnel' })
  event.remove({ output: 'create:content_observer' })
  event.remove({ output: 'create:stockpile_switch' })
  event.remove({ output: 'create:display_link' })
  event.remove({ output: 'create:display_board' })
  event.remove({ output: 'create:nixie_tube' })
  event.remove({ output: 'create:redstone_link' })
  event.remove({ output: 'create:placard' })
  event.remove({ output: 'create:pulse_repeater' })
  event.remove({ output: 'create:pulse_extender' })
  event.remove({ output: 'create:powered_latch' })
  event.remove({ output: 'create:powered_toggle_latch' })
  event.remove({ id: /create:(.*)_seat/ })
  event.remove({ id: 'create:crafting/kinetics/speedometer' })
  event.remove({ id: 'create:crafting/kinetics/filter' })
  event.remove({ id: 'create:crafting/kinetics/attribute_filter' })
  event.remove({ output: 'create:smart_fluid_pipe' })
  event.remove({ output: 'create:fluid_valve' })
  event.remove({ output: 'create:fluid_tank' })
  event.remove({ output: 'create:hose_pulley' })
  event.remove({ output: 'create:item_drain' })
  event.remove({ output: 'create:spout' })
  event.remove({ output: 'create:portable_fluid_interface' })
  event.remove({ output: 'create:mechanical_piston' })
  event.remove({ output: 'create:gantry_carriage' })
  event.remove({ output: 'create:gantry_shaft' })
  event.remove({ output: 'create:clockwork_bearing' })
  event.remove({ output: 'create:rope_pulley' })
  event.remove({ output: 'create:elevator_pulley' })
  event.remove({ output: 'create:cart_assembler' })
  event.remove({ output: 'create:controller_rail' })
  event.remove({ id: 'create:crafting/kinetics/linear_chassis' })
  event.remove({ id: 'create:crafting/kinetics/radial_chassis' })
  event.remove({ output: 'create:sticker' })
  event.remove({ output: 'create:contraption_controls' })
  event.remove({ output: 'create:mechanical_saw' })
  event.remove({ output: 'create:mechanical_drill' })
  event.remove({ output: 'create:portable_storage_interface' })
  event.remove({ output: 'create:redstone_contact' })
  event.remove({ output: 'create:mechanical_plough' })
  event.remove({ output: 'create:mechanical_harvester' })
  event.remove({ output: 'create:mechanical_roller' })
  event.remove({ output: 'create:rotation_speed_controller' })

  event.replaceInput({ output: 'create:belt_connector' }, 'minecraft:dried_kelp', 'gtceu:rubber_plate')

  event.shapeless('create:track_signal', ['create:electron_tube', 'create:railway_casing', 'create:redstone_link'])
  event.shapeless('create:track_observer', ['create:electron_tube', 'create:railway_casing', 'minecraft:observer'])
  event.shapeless('create:placard', ['minecraft:item_frame', 'gtceu:brass_plate', 'gtceu:iron_plate'])
  event.shapeless('create:analog_lever', ['create:andesite_casing', 'minecraft:lever'])
  event.shapeless('create:andesite_funnel', ['create:andesite_casing', 'minecraft:hopper', 'gtceu:lv_conveyor_module'])
  event.shapeless('create:brass_funnel', ['create:brass_casing', 'create:electron_tube', 'gtceu:mv_conveyor_module'])
  event.shapeless('create:andesite_tunnel', ['2x create:andesite_funnel'])
  event.shapeless('create:brass_tunnel', ['2x create:brass_funnel'])
  event.shapeless('create:nixie_tube', ['2x create:electron_tube', 'gtceu:red_alloy_fine_wire', 'minecraft:glowstone_dust'])
  event.shapeless('create:track_station', ['create:electron_tube', 'create:railway_casing', 'minecraft:compass'])
  event.shapeless('create:fluid_pipe', ['gtceu:copper_normal_fluid_pipe'])
  event.shapeless('create:crafter_slot_cover', ['gtceu:brass_plate'])
  event.shapeless('create:fluid_tank', ['gtceu:bronze_drum'])
  event.shapeless('create:filter', ['gtceu:item_filter', 'gtceu:andesite_alloy_plate'])
  event.shapeless('create:attribute_filter', ['gtceu:item_tag_filter', 'gtceu:brass_plate'])
  event.shaped(
    Item.of('create:powered_latch', 1), [
      ' A ',
      'BCB',
      'DDD'
    ], {
      A: 'create:electron_tube',
      B: 'gtceu:red_alloy_fine_wire',
      C: 'minecraft:lever',
      D: 'minecraft:stone_pressure_plate'
    })
  event.shaped(
    Item.of('create:cogwheel', 16), [
      'ABA',
      'BCB',
      'ABA'
    ], {
      A: 'gtceu:andesite_alloy_small_gear',
      B: 'gtceu:treated_wood_planks',
      C: 'create:shaft'
    })
  event.shaped(
    Item.of('create:large_cogwheel', 8), [
      'ABA',
      'BCB',
      'ABA'
    ], {
      A: 'gtceu:andesite_alloy_gear',
      B: 'gtceu:treated_wood_planks',
      C: 'create:shaft'
    })
  event.shaped(
    Item.of('create:shaft', 16), [
      'A',
      'B'
    ], {
      A: '#forge:tools/saws',
      B: '#forge:blocks/andesite_alloy'
    })

  event.shaped(
    Item.of('create:white_seat', 1), [
      'AAA',
      'BBB'
    ], {
      A: '#minecraft:wool',
      B: 'gtceu:treated_wood_planks'
    })

  event.shaped(
    Item.of('create:powered_toggle_latch', 1), [
      ' A ',
      ' C ',
      'DDD'
    ], {
      A: 'create:electron_tube',
      C: 'minecraft:lever',
      D: 'minecraft:stone_pressure_plate'
    })

  event.shaped(
    Item.of('create:pulse_extender', 1), [
      'A A',
      'BCB',
      'DDD'
    ], {
      A: 'create:electron_tube',
      B: 'gtceu:brass_plate',
      C: 'minecraft:repeater',
      D: 'minecraft:stone_pressure_plate'
    })
  event.shaped(
    Item.of('create:steam_engine', 1), [
      ' A ',
      'DBE',
      ' C '
    ], {
      A: 'gtceu:steel_normal_fluid_pipe',
      B: 'gtceu:steam_machine_casing',
      C: 'create:precision_mechanism',
      D: '#forge:tools/hammers',
      E: '#forge:tools/wrenches'
    })
  event.shaped(
    Item.of('create:pulse_repeater', 1), [
      '  A',
      'BCB',
      'DDD'
    ], {
      A: 'create:electron_tube',
      B: 'gtceu:brass_plate',
      C: 'minecraft:repeater',
      D: 'minecraft:stone_pressure_plate'
    })
  event.shaped(
    Item.of('create:display_link', 1), [
      'ABA',
      'ACA',
      'DED'
    ], {
      A: 'create:electron_tube',
      B: 'create:redstone_link',
      C: 'create:brass_casing',
      D: 'minecraft:comparator',
      E: 'minecraft:observer'
    })
  event.shaped(
    Item.of('create:redstone_link', 1), [
      'ABA',
      'CDC'
    ], {
      A: 'create:electron_tube',
      B: 'gtceu:andesite_alloy_rod',
      C: 'minecraft:redstone_torch',
      D: 'create:brass_casing'
    })

  event.shaped(
    Item.of('create:display_board', 1), [
      'ABA',
      'ACA',
      'ABA'
    ], {
      A: 'gtceu:steel_plate',
      B: '#forge:circuits/lv',
      C: 'create:large_cogwheel'
    })

  event.shaped(
    Item.of('create:content_observer', 1), [
      'AAA',
      'BCB',
      'BDB'
    ], {
      A: 'create:electron_tube',
      B: 'gtceu:red_alloy_fine_wire',
      C: 'minecraft:observer',
      D: 'create:brass_casing'
    })
  event.shaped(
    Item.of('create:stockpile_switch', 1), [
      'AAA',
      'BCB',
      'DDD'
    ], {
      A: 'gtceu:red_alloy_foil',
      B: 'create:electron_tube',
      C: 'create:brass_casing',
      D: 'minecraft:comparator'
    })

  event.shaped(
    Item.of('create:mechanical_arm', 1), [
      'ABA',
      'CDC',
      'EFE'
    ], {
      A: 'gtceu:brass_plate',
      B: 'gtceu:lv_robot_arm',
      C: '#forge:circuits/lv',
      D: 'create:precision_mechanism',
      E: 'gtceu:arcane_gold_small_gear',
      F: 'create:brass_casing'
    })
  event.shaped(
    Item.of('create:item_vault', 1), [
      'ABA',
      'BCB',
      'ABA'
    ], {
      A: 'gtceu:iron_bolt',
      B: 'gtceu:iron_plate',
      C: 'minecraft:barrel'
    })

  event.shaped(
    Item.of('create:controls', 1), [
      'AAA',
      'BCB',
      'DED'
    ], {
      A: 'create:analog_lever',
      B: 'gtceu:steel_plate',
      C: 'create:railway_casing',
      D: 'create:precision_mechanism',
      E: '#forge:circuits/lv'
    })
  event.shaped(
    Item.of('create:rotation_speed_controller', 1), [
      'ABA',
      'CDC',
      'EEE'
    ], {
      A: 'create:precision_mechanism',
      B: 'gtceu:arcane_gold_gear',
      C: 'create:shaft',
      D: 'create:brass_casing',
      E: '#forge:circuits/lv'
    })
  event.shaped(
    Item.of('create:mechanical_roller', 1), [
      'ABA',
      'CDC',
      'EFE'
    ], {
      A: 'create:electron_tube',
      B: 'minecraft:iron_bars',
      C: 'create:cogwheel',
      D: 'create:andesite_casing',
      E: 'gtceu:andesite_alloy_plate',
      F: 'create:crushing_wheel'
    })

  event.shaped(
    Item.of('create:redstone_contact', 1), [
      'ABA',
      'CDC',
      'EBE'
    ], {
      A: 'minecraft:redstone_torch',
      B: 'minecraft:stone_pressure_plate',
      C: 'gtceu:iron_plate',
      D: 'minecraft:observer',
      E: 'gtceu:red_alloy_fine_wire'
    })
  event.shaped(
    Item.of('create:mechanical_harvester', 1), [
      'ABA',
      'CDC',
      'EBE'
    ], {
      A: 'create:electron_tube',
      B: 'gtceu:steel_scythe',
      C: 'create:cogwheel',
      D: 'create:andesite_casing',
      E: 'gtceu:andesite_alloy_plate'
    })
  event.shaped(
    Item.of('create:mechanical_plough', 1), [
      'ABA',
      'CDC',
      'EBE'
    ], {
      A: 'create:electron_tube',
      B: 'gtceu:steel_hoe',
      C: 'create:cogwheel',
      D: 'create:andesite_casing',
      E: 'gtceu:andesite_alloy_plate'
    })

  event.shaped(
    Item.of('create:mechanical_saw', 1), [
      'ABA',
      'CDC',
      'EFE'
    ], {
      A: 'create:electron_tube',
      B: 'gtceu:iron_buzz_saw_blade',
      C: 'create:cogwheel',
      D: 'gtceu:steel_gear',
      E: 'gtceu:andesite_alloy_plate',
      F: 'create:andesite_casing'
    })
  event.shaped(
    Item.of('create:mechanical_drill', 1), [
      'ABA',
      'CDC',
      'EFE'
    ], {
      A: 'create:electron_tube',
      B: 'gtceu:iron_drill_head',
      C: 'create:cogwheel',
      D: 'gtceu:steel_gear',
      E: 'gtceu:andesite_alloy_plate',
      F: 'create:andesite_casing'
    })

  event.shaped(
    Item.of('create:controller_rail', 3), [
      'A A',
      'ABA',
      'ACA'
    ], {
      A: 'gtceu:gold_rod',
      B: 'minecraft:stick',
      C: 'create:electron_tube'
    })

  event.shaped(
    Item.of('create:contraption_controls', 1), [
      'ABA',
      'CDC',
      'EFE'
    ], {
      A: 'create:electron_tube',
      B: '#minecraft:buttons',
      C: 'gtceu:red_alloy_fine_wire',
      D: 'create:andesite_casing',
      E: 'minecraft:redstone',
      F: 'minecraft:repeater'
    })

  event.shaped(
    Item.of('create:sticker', 1), [
      'AAA',
      'BCB',
      'DDD'
    ], {
      A: '#forge:slimeballs',
      B: 'create:electron_tube',
      C: 'minecraft:sticky_piston',
      D: 'gtceu:andesite_alloy_plate'
    })

  event.shaped(
    Item.of('create:linear_chassis', 3), [
      'AAA',
      'BBB',
      'AAA'
    ], {
      B: 'create:andesite_casing',
      A: 'gtceu:treated_wood_plate'
    })
  event.shaped(
    Item.of('create:radial_chassis', 3), [
      'ABA',
      'ABA',
      'ABA'
    ], {
      B: 'create:andesite_casing',
      A: 'gtceu:treated_wood_plate'
    })

  event.shaped(
    Item.of('create:elevator_pulley', 1), [
      'ABA',
      'CDC',
      'EFE'
    ], {
      A: 'create:electron_tube',
      B: 'create:rope_pulley',
      C: 'create:cogwheel',
      D: 'create:brass_casing',
      E: 'create:belt_connector',
      F: 'gtceu:steel_plate'
    })
  event.shaped(
    Item.of('create:cart_assembler', 1), [
      'ABA',
      'C C',
      'C C'
    ], {
      A: 'create:electron_tube',
      B: 'create:mechanical_bearing',
      C: 'gtceu:steel_plate'
    })

  event.shaped(
    Item.of('create:rope_pulley', 1), [
      'ABA',
      'CDC',
      'EEE'
    ], {
      A: 'create:cogwheel',
      B: 'create:andesite_casing',
      C: 'create:shaft',
      D: 'minecraft:lead',
      E: 'gtceu:steel_plate'
    })

  event.shaped(
    Item.of('create:clockwork_bearing', 1), [
      ' A ',
      'BCB',
      ' D '
    ], {
      A: 'minecraft:clock',
      B: 'create:electron_tube',
      C: 'create:brass_casing',
      D: 'create:mechanical_bearing'
    })
  event.shaped(
    Item.of('create:gantry_carriage', 1), [
      'AAA',
      'BCB',
      'DED'
    ], {
      A: 'gtceu:steel_plate',
      B: 'create:shaft',
      C: 'create:mechanical_bearing',
      D: 'create:cogwheel',
      E: 'create:gantry_shaft'
    })
  event.shaped(
    Item.of('create:gantry_shaft', 1), [
      ' A ',
      'ABA',
      ' A '
    ], {
      A: 'gtceu:red_alloy_fine_wire',
      B: 'create:shaft'
    })

  event.shaped(
    Item.of('create:mechanical_piston', 1), [
      'ABA',
      'CDC',
      'AEA'
    ], {
      A: 'create:cogwheel',
      B: 'minecraft:piston',
      C: 'create:electron_tube',
      D: 'create:andesite_casing',
      E: 'create:piston_extension_pole'
    })

  event.shaped(
    Item.of('create:item_drain', 1), [
      ' A ',
      'BCB',
      ' D '
    ], {
      A: 'gtceu:fluid_detector_cover',
      B: 'create:fluid_pipe',
      C: 'create:copper_casing',
      D: 'gtceu:lv_electric_pump'
    })

  event.shaped(
    Item.of('create:portable_fluid_interface', 1), [
      'ABA',
      'CDC',
      'EFE'
    ], {
      A: 'create:electron_tube',
      B: 'gtceu:andesite_alloy_rotor',
      C: 'create:fluid_pipe',
      D: 'create:copper_casing',
      E: 'minecraft:glass',
      F: 'gtceu:lv_electric_pump'
    })
  event.shaped(
    Item.of('create:portable_storage_interface', 1), [
      'ABA',
      'CDC',
      'EFE'
    ], {
      A: 'create:electron_tube',
      B: 'gtceu:lv_conveyor_module',
      C: 'gtceu:red_alloy_fine_wire',
      D: 'create:copper_casing',
      E: 'gtceu:andesite_alloy_plate',
      F: 'create:chute'
    })

  event.shaped(
    Item.of('create:spout', 1), [
      'ABA',
      'CDC',
      'EEE'
    ], {
      A: 'create:fluid_pipe',
      B: 'gtceu:andesite_alloy_rotor',
      C: 'create:electron_tube',
      D: 'create:copper_casing',
      E: 'minecraft:glass_pane'
    })

  event.shaped(
    Item.of('create:fluid_valve', 1), [
      ' A ',
      'BCB',
      ' A '
    ], {
      A: 'create:cogwheel',
      B: 'gtceu:copper_plate',
      C: 'create:fluid_pipe'
    })
  event.shaped(
    Item.of('create:hose_pulley', 1), [
      'ABA',
      'CDC',
      'ABA'
    ], {
      A: 'create:belt_connector',
      B: 'gtceu:andesite_alloy_rotor',
      C: 'create:fluid_pipe',
      D: 'create:copper_casing'
    })

  event.shaped(
    Item.of('create:smart_fluid_pipe', 1), [
      'ABA',
      'CDC',
      'ABA'
    ], {
      A: 'gtceu:brass_plate',
      B: 'create:electron_tube',
      C: 'gtceu:fluid_filter',
      D: 'create:fluid_pipe'
    })
  event.shaped(
    Item.of('create:speedometer', 1), [
      'ABA',
      'CDC',
      'EEE'
    ], {
      A: 'create:electron_tube',
      B: 'minecraft:observer',
      C: 'create:shaft',
      D: 'create:andesite_casing',
      E: 'minecraft:glass_pane'
    })

  event.shaped(
    Item.of('create:smart_chute', 1), [
      'BBB',
      'CDC',
      'EEE'
    ], {
      B: 'gtceu:brass_plate',
      C: 'gtceu:red_alloy_fine_wire',
      D: 'create:chute',
      E: 'create:electron_tube'
    })

  event.shaped(
    Item.of('create:weighted_ejector', 1), [
      'ABA',
      'CDC',
      'EEE'
    ], {
      A: 'gtceu:gold_plate',
      B: 'create:electron_tube',
      C: 'create:cogwheel',
      D: 'create:depot',
      E: 'gtceu:andesite_alloy_spring'
    })

  event.shaped(
    Item.of('create:depot', 1), [
      'ABA',
      'CCC',
      'ADA'
    ], {
      A: 'gtceu:treated_wood_plate',
      B: 'minecraft:item_frame',
      C: 'gtceu:andesite_alloy_plate',
      D: 'create:andesite_casing'
    })
  event.shaped(
    Item.of('create:adjustable_chain_gearshift', 1), [
      'ABA',
      'CDC',
      'ABA'
    ], {
      A: 'create:cogwheel',
      B: 'gtceu:red_alloy_fine_wire',
      C: 'create:electron_tube',
      D: 'create:encased_chain_drive'
    })
  event.shaped(
    Item.of('create:millstone', 1), [
      'ABC',
      'BDB',
      'EFG'
    ], {
      A: '#forge:tools/hammers',
      B: '#forge:dusts/diamond',
      C: '#forge:tools/wrenches',
      D: 'gtceu:steel_small_gear',
      E: '#forge:tools/saws',
      F: 'create:andesite_casing',
      G: '#forge:tools/screwdrivers'
    })
  event.shaped(
    Item.of('create:encased_chain_drive', 1), [
      'ABA',
      'CDC',
      'ABA'
    ], {
      A: 'create:cogwheel',
      B: 'gtceu:rubber_plate',
      C: 'create:shaft',
      D: 'create:andesite_casing'
    })
  event.shaped(
    Item.of('create:gearshift', 1), [
      'ABA',
      'CDC',
      'ABA'
    ], {
      A: 'gtceu:red_alloy_foil',
      B: 'create:shaft',
      C: 'create:cogwheel',
      D: 'create:andesite_casing'
    })

  event.shaped(
    Item.of('create:clutch', 1), [
      'ABC',
      'BDB',
      'CBA'
    ], {
      A: 'create:cogwheel',
      B: 'gtceu:red_alloy_fine_wire',
      C: 'create:shaft',
      D: 'create:andesite_casing'
    })

  event.shaped(
    Item.of('create:gearbox', 2), [
      'ABA',
      'BCB',
      'ABA'
    ], {
      A: 'create:shaft',
      B: 'create:cogwheel',
      C: 'create:andesite_casing'
    })
  event.shaped(
    Item.of('create:white_sail', 2), [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'gtceu:treated_wood_rod',
      B: '#minecraft:wool'
    })
  event.shaped(
    Item.of('create:sequenced_gearshift', 1), [
      'ACA',
      'BDE',
      'ACA'
    ], {
      A: 'create:electron_tube',
      B: '#forge:tools/screwdrivers',
      C: 'create:cogwheel',
      D: 'create:brass_casing',
      E: '#forge:tools/wrenches'
    })
  event.shaped(
    Item.of('create:encased_fan', 1), [
      'CAC',
      'DBD',
      'CAC'
    ], {
      A: 'create:electron_tube',
      B: 'create:propeller',
      C: 'create:cogwheel',
      D: 'create:andesite_casing'
    })
  event.shaped(
    Item.of('create:chute', 2), [
      ' A ',
      'ABA',
      ' A '
    ], {
      A: 'gtceu:iron_plate',
      B: 'minecraft:hopper'
    })
  event.shaped(
    Item.of('create:mechanical_press', 1), [
      'AFA',
      'CDC',
      'BEB'
    ], {
      A: 'create:electron_tube',
      B: 'create:shaft',
      C: 'create:cogwheel',
      D: 'create:andesite_casing',
      E: 'minecraft:anvil',
      F: 'minecraft:piston'
    })

  event.shaped(
    Item.of('create:mechanical_mixer', 1), [
      'AFA',
      'CDC',
      'BEB'
    ], {
      A: 'create:electron_tube',
      B: 'create:shaft',
      C: 'create:cogwheel',
      D: 'create:andesite_casing',
      E: 'create:whisk',
      F: 'minecraft:piston'

    })
  event.shaped(
    Item.of('create:water_wheel', 1), [
      'ABA',
      'CDC',
      'EAE'
    ], {
      A: 'create:shaft',
      B: 'create:electron_tube',
      C: 'gtceu:andesite_alloy_rotor',
      D: 'create:andesite_casing',
      E: 'create:cogwheel'
    })
  event.shaped(
    Item.of('create:large_water_wheel', 1), [
      'ABA',
      'BCB',
      'ABA'
    ], {
      A: 'create:water_wheel',
      B: 'create:shaft',
      C: 'create:andesite_casing'
    })

  event.shaped(
    Item.of('create:deployer', 1), [
      'ABC',
      'DED',
      'FGH'
    ], {
      A: '#forge:tools/saws',
      B: 'create:andesite_casing',
      C: '#forge:tools/wrenches',
      D: 'create:electron_tube',
      E: 'create:piston_extension_pole',
      F: '#forge:tools/hammers',
      G: 'create:brass_hand',
      H: '#forge:tools/screwdrivers'
    })
  event.shaped(
    Item.of('create:brass_hand', 1), [
      'ABA',
      'BCB',
      'DBE'
    ], {
      A: 'gtceu:rubber_plate',
      B: 'gtceu:brass_plate',
      C: 'gtceu:iron_plate',
      D: '#forge:tools/files',
      E: '#forge:tools/wrenches'
    })
  event.shaped(
    Item.of('create:piston_extension_pole', 1), [
      'A B',
      'CDC',
      'CDC'
    ], {
      A: '#forge:tools/hammers',
      B: '#forge:tools/saws',
      C: 'gtceu:treated_wood_plate',
      D: 'create:shaft'
    })
  event.shaped(
    Item.of('create:whisk', 1), [
      'ABC',
      'DDD',
      ' D '
    ], {
      A: '#forge:tools/hammers',
      B: 'create:piston_extension_pole',
      C: '#forge:tools/files',
      D: 'gtceu:iron_plate'
    })
  event.shaped(
    Item.of('create:electron_tube', 1), [
      'AB ',
      ' C ',
      ' D '
    ], {
      A: '#forge:tools/hammers',
      B: 'create:polished_rose_quartz',
      C: 'gtceu:sticky_resin',
      D: '#forge:circuits/ulv'
    })
  event.shaped(
    Item.of('create:mechanical_pump', 1), [
      'ABA',
      'CDC',
      'ABA'
    ], {
      A: 'create:cogwheel',
      B: 'gtceu:andesite_alloy_rotor',
      C: 'gtceu:copper_plate',
      D: 'create:fluid_pipe'
    })
  event.shaped(
    Item.of('create:brass_casing', 1), [
      'BAB',
      'ACA',
      'BAB'
    ], {
      A: 'gtceu:brass_plate',
      B: 'gtceu:treated_wood_plate',
      C: '#forge:tools/wrenches'
    })
  event.shaped(
    Item.of('create:andesite_casing', 1), [
      'ABA',
      'BCB',
      'ABA'
    ], {
      B: 'gtceu:andesite_alloy_plate',
      A: 'gtceu:treated_wood_plate',
      C: '#forge:tools/wrenches'
    })
  event.shaped(
    Item.of('create:copper_casing', 1), [
      'ABA',
      'BCB',
      'ABA'
    ], {
      B: 'gtceu:copper_plate',
      A: 'gtceu:treated_wood_plate',
      C: '#forge:tools/wrenches'
    })

  event.shaped(
    Item.of('create:mechanical_bearing', 1), [
      'ABA',
      'CDC',
      'AEA'
    ], {
      A: 'gtceu:steel_plate',
      B: '#forge:slimeballs',
      C: 'create:cogwheel',
      D: 'create:andesite_casing',
      E: 'create:shaft'
    })
  event.shaped(
    Item.of('create:windmill_bearing', 1), [
      'ABA',
      'CDC',
      'AEA'
    ], {
      A: 'create:electron_tube',
      B: '#forge:slimeballs',
      C: 'gtceu:steel_plate',
      D: 'create:mechanical_bearing',
      E: 'create:large_cogwheel'
    })
  event.shaped(
    Item.of('create:empty_blaze_burner', 1),
    [
      'ACA',
      'ABA',
      'DDD'
    ],
    {
      A: 'minecraft:iron_bars',
      B: 'minecraft:netherrack',
      C: '#forge:tools/hammers',
      D: 'gtceu:steel_plate'
    }
  )
  event.shaped(
    Item.of('create:basin', 1),
    [
      'A A',
      'ACA',
      'AAA'
    ],
    {
      A: 'gtceu:andesite_alloy_plate',
      C: '#forge:tools/hammers'
    }
  )
})
