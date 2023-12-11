/* eslint no-unused-vars: "off" */

ServerEvents.recipes(event => {
  // 组装
  function addASSRecipe (name, itemInputs, itemOutputs, fluidInputs, eut, time, circuit, clean) {
    const dur = time * 20
    const recipe = event.recipes.gtceu.assembler(name + '_ass').duration(dur).EUt(eut)
    if (itemInputs != null) {
      recipe.itemInputs(itemInputs)
    }
    if (itemOutputs != null) {
      recipe.itemOutputs(itemOutputs)
    }
    if (fluidInputs != null) {
      recipe.inputFluids(fluidInputs)
    }
    if (circuit != null) {
      recipe.circuit(circuit)
    }
    if (clean != null) {
      recipe.cleanroom(CleanroomType.CLEANROOM)
    }
  }
  // 装配线
  function addASLRecipe (name, itemInputs, itemOutputs, fluidInputs, eut, time, circuit) {
    const dur = time * 20
    const recipe = event.recipes.gtceu.assembly_line(name + '_asl').duration(dur).EUt(eut)
    if (itemInputs != null) {
      recipe.itemInputs(itemInputs)
    }
    if (itemOutputs != null) {
      recipe.itemOutputs(itemOutputs)
    }
    if (fluidInputs != null) {
      recipe.inputFluids(fluidInputs)
    }
    if (circuit != null) {
      recipe.circuit(circuit)
    }
  }
  // 合金冶炼炉
  function addABSRecipe (name, itemInputs, fluidInputs, fluidOutputs, eut, time, circuit) {
    const dur = time * 20
    const recipe = event.recipes.gtceu.alloy_blast_smelter(name + '_abs').duration(dur).EUt(eut)
    if (itemInputs != null) {
      recipe.itemInputs(itemInputs)
    }
    if (fluidInputs != null) {
      recipe.inputFluids(fluidInputs)
    }
    if (fluidOutputs != null) {
      recipe.outputFluids(fluidOutputs)
    }
    if (circuit != null) {
      recipe.circuit(circuit)
    }
  }
  // 化反
  function addCRRecipe (name, itemInputs, itemOutputs, fluidInputs, fluidOutputs, eut, time, circuit) {
    const dur = time * 20
    const recipe = event.recipes.gtceu.chemical_reactor(name + '_cr').duration(dur).EUt(eut)
    if (itemInputs != null) {
      recipe.itemInputs(itemInputs)
    }
    if (fluidInputs != null) {
      recipe.inputFluids(fluidInputs)
    }
    if (itemOutputs != null) {
      recipe.itemOutputs(itemOutputs)
    }
    if (fluidOutputs != null) {
      recipe.outputFluids(fluidOutputs)
    }
    if (circuit != null) {
      recipe.circuit(circuit)
    }
    const recipe2 = event.recipes.gtceu.large_chemical_reactor(name + '_lcr').duration(dur).EUt(eut)
    if (itemInputs != null) {
      recipe2.itemInputs(itemInputs)
    }
    if (fluidInputs != null) {
      recipe2.inputFluids(fluidInputs)
    }
    if (itemOutputs != null) {
      recipe2.itemOutputs(itemOutputs)
    }
    if (fluidOutputs != null) {
      recipe2.outputFluids(fluidOutputs)
    }
    if (circuit != null) {
      recipe2.circuit(circuit)
    }
  }

  function addBOOMRecipe (name, itemInputs, itemOutputs, eut, time, boomlevel) {
    const dur = time * 20
    const recipe = event.recipes.gtceu.implosion_compressor(name + '_boom').duration(dur).EUt(eut)
    const boomNum = boomlevel * 8
    const boomNum2 = boomlevel * 4
    const boomNum3 = boomlevel * 2
    if (itemInputs != null) {
      recipe.itemInputs(itemInputs, 'air', `${boomNum}x minecraft:tnt`)
    }
    if (itemOutputs != null) {
      recipe.itemOutputs(itemOutputs)
    }
    const recipe2 = event.recipes.gtceu.implosion_compressor(name + '_boom2').duration(dur).EUt(eut)
    if (itemInputs != null) {
      recipe2.itemInputs(itemInputs, 'air', `${boomNum2}x supplementaries:bomb`)
    }
    if (itemOutputs != null) {
      recipe2.itemOutputs(itemOutputs)
    }
    const recipe3 = event.recipes.gtceu.implosion_compressor(name + '_boom3').duration(dur).EUt(eut)
    if (itemInputs != null) {
      recipe3.itemInputs(itemInputs, 'air', `${boomNum3}x arbor:itnt`)
    }
    if (itemOutputs != null) {
      recipe3.itemOutputs(itemOutputs)
    }
  }

  const rRemoves = ['supplementaries:bomb', 'ad_astra:tier_1_rocket', 'ad_astra:rocket_nose_cone', 'ad_astra:rocket_fin', 'ad_astra:steel_tank',
    'ad_astra:steel_engine', 'ad_astra:tier_2_rocket', 'ad_astra:tier_3_rocket', 'ad_astra:tier_4_rocket', 'minecraft:lightning_rod',
    'ad_astra:desh_tank', 'ad_astra:desh_engine', 'ad_astra:ostrum_tank', 'ad_astra:ostrum_engine', 'ad_astra:calorite_tank', 'ad_astra:calorite_engine',
    'computercraft:computer_normal', 'computercraft:computer_advanced', 'ad_astra:oxygen_gear', 'ad_astra:oxygen_tank', 'ad_astra:engine_fan']
  const removeIds = ['ad_astra:recipes/space_helmet', 'ad_astra:recipes/space_suit', 'ad_astra:recipes/space_suit', 'ad_astra:recipes/space_pants', 'ad_astra:recipes/space_boots', 'ad_astra:recipes/netherite_space_helmet',
    'ad_astra:recipes/netherite_space_suit', 'ad_astra:recipes/netherite_space_pants', 'ad_astra:recipes/netherite_space_boots', 'ad_astra:recipes/jet_suit_helmet', 'ad_astra:recipes/jet_suit',
    'ad_astra:recipes/jet_suit_pants', 'ad_astra:recipes/jet_suit_boots']
  rRemoves.forEach(function (remove) {
    event.remove({ output: remove })
  })
  removeIds.forEach(function (rId) {
    event.remove({ id: rId })
  })

  addASSRecipe(['space_helmet'], ['minecraft:chainmail_helmet', '16x gtceu:glass_plate'], ['ad_astra:space_helmet'], ['gtceu:glue'], MV, 20)
  event.shaped('ad_astra:space_suit', ['ADA', 'CBC', 'ADA'], { A: 'kubejs:heavy_plate_t1', B: 'ad_astra:oxygen_gear', C: 'ad_astra:oxygen_tank', D: 'gtceu:stainless_steel_screw' })
  event.shaped('ad_astra:oxygen_gear', ['AEA', 'CBC', 'ADA'], { A: 'gtceu:steel_double_plate', B: 'gtceu:hv_electric_pump', C: 'gtceu:fluid_cell', D: 'gtceu:steel_rotor', E: 'gtceu:hv_sensor' })
  event.shaped('ad_astra:space_pants', ['AAA', 'ABA', 'A A'], { A: 'kubejs:heavy_plate_t1', B: '#forge:tools/hammers' })
  event.shaped('ad_astra:space_boots', ['ABA', 'A A'], { A: 'kubejs:heavy_plate_t1', B: '#forge:tools/hammers' })
  event.shaped('ad_astra:oxygen_tank', ['ABA', 'ACA', 'AAA'], { A: 'gtceu:aluminium_double_plate', B: '#forge:tools/hammers', C: 'gtceu:fluid_cell' })
  event.shaped('ad_astra:engine_fan', ['ABA', 'ECE', 'ADA'], { A: 'gtceu:steel_screw', B: '#forge:tools/wrenches', C: 'gtceu:stainless_steel_long_rod', D: '#forge:tools/screwdrivers', E: 'gtceu:steel_rotor' })
  event.shaped('ad_astra:oxygen_loader', ['ABA', 'CDE', 'FGF'], { A: 'gtceu:steel_double_plate', B: 'ad_astra:oxygen_gear', C: 'minecraft:iron_bars', D: 'ad_astra:engine_fan', E: 'gtceu:hv_electric_motor', F: 'gtceu:aluminium_double_plate', G: 'gtceu:aluminium_double_cable' })

  addASSRecipe(['netherite_space_helmet'], ['ad_astra:space_helmet', '5x kubejs:heavy_plate_t3'], ['ad_astra:netherite_space_helmet'], ['gtceu:stainless_steel 72'], HV, 10)
  addASSRecipe(['netherite_space_suit'], ['ad_astra:space_suit', '2x ad_astra:steel_tank', '8x kubejs:heavy_plate_t3'], ['ad_astra:netherite_space_suit'], ['gtceu:stainless_steel 72'], HV, 10)
  addASSRecipe(['netherite_space_pants'], ['ad_astra:space_pants', '7x kubejs:heavy_plate_t3'], ['ad_astra:netherite_space_pants'], ['gtceu:stainless_steel 72'], HV, 10)
  addASSRecipe(['netherite_space_boots'], ['ad_astra:space_boots', '4x kubejs:heavy_plate_t3'], ['ad_astra:netherite_space_boots'], ['gtceu:stainless_steel 72'], HV, 10)
  addASSRecipe(['jet_suit_helmet'], ['ad_astra:netherite_space_helmet', '5x kubejs:heavy_plate_t4'], ['ad_astra:jet_suit_helmet'], ['gtceu:titanium 144'], EV, 10)
  addASSRecipe(['jet_suit'], ['ad_astra:netherite_space_suit', '2x ad_astra:ostrum_tank', '2x gtceu:advanced_power_thruster', '5x kubejs:heavy_plate_t4'], ['ad_astra:jet_suit'], ['gtceu:titanium 144'], EV, 10)
  addASSRecipe(['jet_suit_pants'], ['ad_astra:netherite_space_pants', '5x kubejs:heavy_plate_t4'], ['ad_astra:jet_suit_pants'], ['gtceu:titanium 144'], EV, 10)
  addASSRecipe(['jet_suit_boots'], ['ad_astra:netherite_space_boots', '5x kubejs:heavy_plate_t4'], ['ad_astra:jet_suit_boots'], ['gtceu:titanium 144'], EV, 10)

  addCRRecipe(['bomb'], ['minecraft:paper', 'minecraft:string'], ['supplementaries:bomb'], ['gtceu:glyceryl_trinitrate 500'], [], ULV, 8)
  addCRRecipe(['itnt'], ['4x gtceu:gelled_toluene'], ['arbor:itnt'], ['gtceu:nitration_mixture 200'], ['gtceu:diluted_sulfuric_acid 150'], HV, 4, 1)
  addASSRecipe(['heavy_ingot_t1'], ['gtceu:brass_dense_plate', 'gtceu:aluminium_dense_plate', 'gtceu:steel_dense_plate'], ['kubejs:heavy_ingot_t1'], ['gtceu:stainless_steel 72'], HV, 15, 1)
  addASSRecipe(['heavy_ingot_t2'], ['kubejs:heavy_plate_t1', '2x gtceu:desh_dense_plate'], ['kubejs:heavy_ingot_t2'], ['gtceu:tungsten_steel 72'], EV, 15, 1)
  addASSRecipe(['heavy_ingot_t3'], ['kubejs:heavy_plate_t2', '4x gtceu:ostrum_dense_plate'], ['kubejs:heavy_ingot_t3'], ['gtceu:platinum 72'], IV, 15, 1)
  addASLRecipe(['heavy_ingot_t4'], ['kubejs:heavy_plate_t3', '3x gtceu:calorite_dense_plate', '3x gtceu:calorite_dense_plate', '4x gtceu:ruridit_bolt'], ['kubejs:heavy_ingot_t4'], ['gtceu:molten_cerrobase_140 36'], LuV, 15)
  addBOOMRecipe(['heavy_plate_t1'], ['kubejs:heavy_ingot_t1'], ['kubejs:heavy_plate_t1'], LV, 15, 1)
  addBOOMRecipe(['heavy_plate_t2'], ['kubejs:heavy_ingot_t2'], ['kubejs:heavy_plate_t2'], LV, 15, 2)
  addBOOMRecipe(['heavy_plate_t3'], ['kubejs:heavy_ingot_t3'], ['kubejs:heavy_plate_t3'], LV, 15, 3)
  addBOOMRecipe(['heavy_plate_t4'], ['kubejs:heavy_ingot_t4'], ['kubejs:heavy_plate_t4'], LV, 15, 4)
  addASSRecipe(['rocket_nose_cone'], ['4x kubejs:heavy_plate_t1', 'minecraft:lightning_rod'], ['ad_astra:rocket_nose_cone'], ['gtceu:stainless_steel 36'], LV, 2.5, 4)
  event.shaped('ad_astra:rocket_nose_cone', ['ABC', 'DSD', 'SSS'], { S: 'kubejs:heavy_plate_t1', A: '#forge:tools/screwdrivers', B: 'minecraft:lightning_rod', C: '#forge:tools/hammers', D: 'gtceu:stainless_steel_screw' })
  addASSRecipe(['rocket_fin'], ['2x gtceu:steel_double_plate', '4x kubejs:heavy_plate_t1'], ['ad_astra:rocket_fin'], [], LV, 2.5, 5)
  event.shaped('ad_astra:rocket_fin', ['ABC', 'SBS', 'SDS'], { S: 'kubejs:heavy_plate_t1', A: '#forge:tools/hammers', B: 'gtceu:steel_double_plate', C: '#forge:tools/files', D: '#forge:tools/saws' })
  addASSRecipe(['lightning_rod'], ['2x gtceu:copper_long_rod', '3x gtceu:copper_plate'], ['minecraft:lightning_rod'], [], LV, 2.5, 9)
  event.shaped('minecraft:lightning_rod', ['CAD', 'ABA', 'EBF'], { A: 'gtceu:copper_plate', B: 'gtceu:copper_long_rod', C: '#forge:tools/hammers', D: '#forge:tools/files', E: '#forge:tools/screwdrivers', F: '#forge:tools/saws' })
  addASSRecipe(['steel_tank'], ['gtceu:steel_fluid_cell', '2x kubejs:heavy_plate_t1'], ['ad_astra:steel_tank'], [], LV, 1, 1)
  event.shaped('ad_astra:steel_tank', ['DCD', 'ABA', 'DED'], { A: 'kubejs:heavy_plate_t1', B: 'gtceu:steel_fluid_cell', C: '#forge:tools/hammers', D: 'gtceu:stainless_steel_screw', E: '#forge:tools/screwdrivers' })
  addASSRecipe(['steel_engine'], ['4x kubejs:heavy_plate_t1', '2x ad_astra:steel_tank', 'gtceu:steel_firebox_casing', 'gtceu:activity_detector_cover', 'kubejs:t1_chip'], ['ad_astra:steel_engine'], [], LV, 5)
  event.shaped('ad_astra:steel_engine', ['AEA', 'CBC', 'ADA'], { A: 'kubejs:heavy_plate_t1', B: 'gtceu:steel_firebox_casing', C: 'ad_astra:steel_tank', D: 'gtceu:activity_detector_cover', E: 'kubejs:t1_chip' })
  addASSRecipe(['t1_chip'], ['computercraft:computer_normal', 'gtceu:computer_monitor_cover', 'gtceu:hv_sensor', 'gtceu:hv_emitter', 'kubejs:heavy_plate_t1'], ['kubejs:t1_chip'], ['gtceu:soldering_alloy 576'], HV, 30, null, 1)
  addASSRecipe(['computer_normal'], ['2x gtceu:mv_machine_casing', '2x gtceu:aluminium_plate', '2x gtceu:aluminium_fine_wire', 'gtceu:iron_rotor', 'gtceu:plastic_printed_circuit_board', 'gtceu:basic_integrated_circuit'], ['computercraft:computer_normal'], ['gtceu:polyethylene 72'], MV, 10)
  addASSRecipe(['t2_chip'], ['computercraft:computer_normal', 'gtceu:computer_monitor_cover', '2x gtceu:ev_field_generator', 'kubejs:heavy_plate_t2'], ['kubejs:t2_chip'], ['gtceu:soldering_alloy 864'], EV, 30, null, 1)
  addASSRecipe(['t3_chip'], ['computercraft:computer_normal', 'gtceu:computer_monitor_cover', 'gtceu:iv_sensor', 'gtceu:iv_emitter', 'kubejs:heavy_plate_t3'], ['kubejs:t3_chip'], ['gtceu:soldering_alloy 1152'], IV, 30, null, 1)
  addASSRecipe(['t4_chip'], ['computercraft:computer_advanced', 'gtceu:computer_monitor_cover', 'gtceu:luv_sensor', 'gtceu:luv_emitter', 'kubejs:heavy_plate_t4'], ['kubejs:t4_chip'], ['gtceu:soldering_alloy 2304'], LuV, 30, null, 1)
  addASSRecipe(['computer_advanced'], ['gtceu:hv_machine_casing', '2x gtceu:aluminium_plate', 'gtceu:epoxy_printed_circuit_board', 'gtceu:iron_rotor', 'gtceu:advanced_integrated_circuit', '2x gtceu:tantalum_fine_wire'], ['computercraft:computer_advanced'], ['gtceu:polyethylene 72'], HV, 10)
  addASSRecipe(['desh_engine'], ['3x ad_astra:steel_tank', '2x kubejs:heavy_plate_t2', '2x ad_astra:steel_engine', 'kubejs:t2_chip'], ['ad_astra:desh_engine'], ['gtceu:polyethylene 144'], EV, 10)
  addASSRecipe(['ostrum_engine'], ['4x ad_astra:ostrum_tank', '4x kubejs:heavy_plate_t3', '2x kubejs:heavy_plate_t2', '2x ad_astra:desh_engine', 'kubejs:t3_chip'], ['ad_astra:ostrum_engine'], ['gtceu:polytetrafluoroethylene 144'], IV, 10)
  addASSRecipe(['ostrum_tank'], ['ad_astra:steel_tank', '5x gtceu:titanium_double_plate', '4x kubejs:heavy_plate_t3', '2x kubejs:heavy_plate_t2'], ['ad_astra:ostrum_tank'], ['gtceu:molten_stainless_steel 144'], HV, 10)
  addASLRecipe(['calorite_engine'], ['32x kubejs:heavy_plate_t4', '16x kubejs:heavy_plate_t3', '8x ad_astra:ostrum_engine', '2x kubejs:t4_chip', '8x ad_astra:ostrum_tank'], ['ad_astra:calorite_engine'], ['gtceu:platinum 4032', 'gtceu:iridium 2016', 'gtceu:palladium 1008', 'gtceu:osmium 504'], LuV, 30)

  event.custom({
    type: 'ad_astra:nasa_workbench',
    ingredients: [
      {
        ingredient: {
          item: 'ad_astra:rocket_nose_cone'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t1'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t1'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t1'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t1'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t1'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t1'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:rocket_fin'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t1'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t1'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:rocket_fin'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:rocket_fin'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:steel_engine'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:rocket_fin'
        }
      }
    ],
    output: 'ad_astra:tier_1_rocket'
  })

  event.custom({
    type: 'ad_astra:nasa_workbench',
    ingredients: [
      {
        ingredient: {
          item: 'ad_astra:rocket_nose_cone'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t2'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t2'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t2'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t2'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t2'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t2'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:rocket_fin'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t2'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t2'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:rocket_fin'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:rocket_fin'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:desh_engine'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:rocket_fin'
        }
      }
    ],
    output: 'ad_astra:tier_2_rocket'
  })

  event.custom({
    type: 'ad_astra:nasa_workbench',
    ingredients: [
      {
        ingredient: {
          item: 'ad_astra:rocket_nose_cone'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t3'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t3'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t3'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t3'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t3'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t3'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:rocket_fin'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t3'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t3'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:rocket_fin'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:rocket_fin'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:ostrum_engine'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:rocket_fin'
        }
      }
    ],
    output: 'ad_astra:tier_3_rocket'
  })

  event.custom({
    type: 'ad_astra:nasa_workbench',
    ingredients: [
      {
        ingredient: {
          item: 'ad_astra:rocket_nose_cone'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t4'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t4'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t4'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t4'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t4'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t4'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:rocket_fin'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t4'
        }
      },
      {
        ingredient: {
          item: 'kubejs:heavy_plate_t4'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:rocket_fin'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:rocket_fin'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:calorite_engine'
        }
      },
      {
        ingredient: {
          item: 'ad_astra:rocket_fin'
        }
      }
    ],
    output: 'ad_astra:tier_4_rocket'
  })
})
