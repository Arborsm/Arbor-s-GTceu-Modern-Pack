/* eslint no-unused-vars: "off" */
const [ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UMV, UXV, MAX] = GTValues.VA

ServerEvents.recipes(event => {
  // replace
  const replaceOutput = ['gtceu:platinum_dust', 'gtceu:palladium_dust']
  const replaceOutputReplaces = ['gtceu:platinum_metal_dust', 'gtceu:palladium_metal_dust']
  const filter = [{ input: '#forge:ores' }, { input: '#forge:ores/purified' }, { input: 'gtceu:cooperite_dust' }, { input: '#forge:dusts/pure' }, { input: '#forge:ores/crushed' }, { input: '#forge:dusts/impure' },
    { input: '#forge:ores/refined' }]
  replaceOutput.forEach(function (replaceOutput, index) {
    const replaceOutputReplace = replaceOutputReplaces[index]
    event.replaceOutput(filter, replaceOutput, replaceOutputReplace)
  })
  // remove
  const removeInput = ['gtceu:osmium_tetroxide_dust', 'gtceu:ruthenium_tetroxide_dust', 'gtceu:iridium_chloride_dust', 'gtceu:inert_metal_mixture_dust', 'gtceu:platinum_group_sludge_dust', 'gtceu:platinum_raw_dust',
    'gtceu:palladium_raw_dust', 'gtceu:rarest_metal_mixture_dust', 'gtceu:iridium_metal_residue_dust']
  const removeOutput = ['gtceu:osmium_tetroxide_dust', 'gtceu:rhodium_dust', 'gtceu:platinum_ingot', 'gtceu:platinum_group_sludge_dust']
  removeInput.forEach(element => { event.remove({ not: { type: 'minecraft:crafting_shaped' }, input: element }) })
  removeOutput.forEach(element => { event.remove({ not: { type: 'minecraft:crafting_shaped' }, output: element }) })
  event.remove({ id: 'gtceu:alloy_blast_smelter/sodium_pyrosulfate' })
  // 裂化
  function addCKRecipe (name, fluidInputs, fluidOutputs, eut, time, circuit) {
    const dur = time * 20
    const recipe = event.recipes.gtceu.cracker(name + '_ck').duration(dur).EUt(eut)
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
  // 单化反
  function addCRSRecipe (name, itemInputs, itemOutputs, fluidInputs, fluidOutputs, eut, time, circuit) {
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
  }
  // 单大化反
  function addCRLRecipe (name, itemInputs, itemOutputs, fluidInputs, fluidOutputs, eut, time, circuit) {
    const dur = time * 20
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
  // 搅拌
  function addMIXRecipe (name, itemInputs, itemOutputs, fluidInputs, fluidOutputs, eut, time, circuit) {
    const dur = time * 20
    const recipe = event.recipes.gtceu.mixer(name + '_mix').duration(dur).EUt(eut)
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
  }
  // 离心
  function addCFRecipe (name, itemInputs, itemOutputs, fluidInputs, fluidOutputs, eut, time, circuit) {
    const dur = time * 20
    const recipe = event.recipes.gtceu.centrifuge(name + '_cf').duration(dur).EUt(eut)
    if (itemInputs != null) {
      recipe.itemInputs(itemInputs)
    }
    if (itemOutputs != null) {
      recipe.itemOutputs(itemOutputs)
    }
    if (circuit != null) {
      recipe.circuit(circuit)
    }
    if (fluidInputs != null) {
      recipe.inputFluids(fluidInputs)
    }
    if (fluidOutputs != null) {
      recipe.outputFluids(fluidOutputs)
    }
  }
  // 高炉
  function addEBFRecipe (name, itemInputs, itemOutputs, fluidInputs, fluidOutputs, eut, time, temp, circuit) {
    const dur = time * 20
    const recipe = event.recipes.gtceu.electric_blast_furnace(name + '_ebf').duration(dur).EUt(eut)
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
    if (temp != null) {
      recipe.blastFurnaceTemp(temp)
    }
    if (circuit != null) {
      recipe.circuit(circuit)
    }
  }
  // 筛选
  function addSifterRecipe (name, itemInputs, itemOutputs, time, EUt, chancedOutputs) {
    const dur = time * 20
    const recipe = event.recipes.gtceu.sifter(name).duration(dur).EUt(EUt)
    if (itemInputs != null) {
      recipe.itemInputs(itemInputs)
    }
    if (itemOutputs != null) {
      recipe.itemOutputs(itemOutputs)
    }
    if (chancedOutputs != null) {
      chancedOutputs.forEach(output => {
        recipe.chancedOutput(Item.of(output.item, output.count), output.chance, output.advChance)
      })
    }
  }
  // 提取
  function addEXTRecipe (name, itemInputs, fluidOutputs, eut, time) {
    const dur = time * 20
    const recipe = event.recipes.gtceu.electric_blast_furnace(name + '_ext').duration(dur).EUt(eut)
    recipe.itemInputs(itemInputs)
    recipe.outputFluids(fluidOutputs)
  }
  // 蒸馏
  function addDTRecipe (name, itemOutputs, fluidInputs, fluidOutputs, eut, time, circuit) {
    const dur = time * 20
    const recipe2 = event.recipes.gtceu.distillation_tower(name + '_dt').duration(dur).EUt(eut)
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
  // 固化
  function addFSRecipe (name, itemOutputs, fluidInputs, eut, time, circuit) {
    const dur = time * 20
    const recipe = event.recipes.gtceu.fluid_solidifier(name + '_fs').duration(dur).EUt(eut)
    if (fluidInputs != null) {
      recipe.inputFluids(fluidInputs)
    }
    if (itemOutputs != null) {
      recipe.itemOutputs(itemOutputs)
    }
    if (circuit != null) {
      recipe.circuit(circuit)
    }
  }

  addSifterRecipe('gtceu:platinum_salt_dust_sf', ['gtceu:platinum_salt_dust'], null, 30, LV, [
    { item: 'gtceu:refined_platinum_salt_dust', count: 1, chance: 2000, advChance: 0 },
    { item: 'gtceu:refined_platinum_salt_dust', count: 1, chance: 2000, advChance: 0 },
    { item: 'gtceu:refined_platinum_salt_dust', count: 1, chance: 2000, advChance: 0 },
    { item: 'gtceu:refined_platinum_salt_dust', count: 1, chance: 1500, advChance: 0 },
    { item: 'gtceu:refined_platinum_salt_dust', count: 1, chance: 1000, advChance: 0 },
    { item: 'gtceu:refined_platinum_salt_dust', count: 1, chance: 1000, advChance: 0 }
  ])

  addSifterRecipe('gtceu:palladium_salt_dust_sf', ['gtceu:palladium_salt_dust'], null, 30, LV, [
    { item: 'gtceu:palladium_metal_dust', count: 1, chance: 2000, advChance: 0 },
    { item: 'gtceu:palladium_metal_dust', count: 1, chance: 2000, advChance: 0 },
    { item: 'gtceu:palladium_metal_dust', count: 1, chance: 2000, advChance: 0 },
    { item: 'gtceu:palladium_metal_dust', count: 1, chance: 1500, advChance: 0 },
    { item: 'gtceu:palladium_metal_dust', count: 1, chance: 1000, advChance: 0 },
    { item: 'gtceu:palladium_metal_dust', count: 1, chance: 1000, advChance: 0 }
  ])

  addSifterRecipe('gtceu:hodium_nitrate_dust_sf', ['gtceu:hodium_nitrate_dust'], null, 30, LV, [
    { item: 'gtceu:rhodium_filter_cake_dust', count: 1, chance: 2000, advChance: 0 },
    { item: 'gtceu:rhodium_filter_cake_dust', count: 1, chance: 2000, advChance: 0 },
    { item: 'gtceu:rhodium_filter_cake_dust', count: 1, chance: 2000, advChance: 0 },
    { item: 'gtceu:rhodium_filter_cake_dust', count: 1, chance: 1500, advChance: 0 },
    { item: 'gtceu:rhodium_filter_cake_dust', count: 1, chance: 1000, advChance: 0 },
    { item: 'gtceu:rhodium_filter_cake_dust', count: 1, chance: 1000, advChance: 0 }
  ])

  // 铂系矿泥粉
  event.recipes.gtceu.centrifuge('gtceu:platinum_group_sludge_dust')
    .itemInputs('gtceu:platinum_group_sludge_dust')
    .itemOutputs('3x gtceu:silicon_dioxide_dust', '3x gtceu:gold_dust', '6x gtceu:platinum_metal_dust')
    .chancedOutput(Item.of('gtceu:palladium_metal_dust', 4), 9500, 500)
    .chancedOutput(Item.of('gtceu:iridium_metal_residue_dust', 1), 9000, 500)
    .chancedOutput(Item.of('gtceu:rarest_metal_mixture_dust', 1), 8500, 500)
    .duration(2700)
    .EUt(LV)

  const ptore = ['copper_purified_ore', 'chalcopyrite_purified_ore', 'tetrahedrite_purified_ore', 'bornite_purified_ore', 'chalcocite_purified_ore', 'pentlandite_purified_ore']
  ptore.forEach(element => {
    addCRRecipe([`platinum_group_sludge_dust_${element}`], ['9x gtceu:platinum_metal_dust', Item.of('gtceu:' + element, 9)], ['gtceu:platinum_slag_dust'], [Fluid.of('gtceu:aqua_regia', 10000)], [Fluid.of('gtceu:concentrated_platinum', 10000)], LV, 112.5, null)
    addCRRecipe([`platinum_group_sludge_dust_9_${element}`], [Item.of('gtceu:' + element, 9)], null, [Fluid.of('gtceu:aqua_regia', 1350)], [Fluid.of('gtceu:concentrated_platinum', 1350)], LV, 112.5, 9)
  })
  addEXTRecipe(['gtceu:sodium_pyrosulfate_dust'], ['gtceu:sodium_pyrosulfate_dust'], [Fluid.of('gtceu:molten_sodium_pyrosulfate', 144)], LV, 1.15)
  addCRRecipe(['platinum_group_sludge_dust_tiny'], ['gtceu:platinum_metal_dust'], ['gtceu:platinum_slag_tiny_dust'], [Fluid.of('gtceu:aqua_regia', 1000)], [Fluid.of('gtceu:concentrated_platinum', 1000)], LV, 12.5, 1)
  addCRRecipe(['platinum_group_sludge_dust'], ['9x gtceu:platinum_metal_dust'], ['gtceu:platinum_slag_dust'], [Fluid.of('gtceu:aqua_regia', 9000)], [Fluid.of('gtceu:concentrated_platinum', 9000)], LV, 112.5, 9)
  addCRRecipe(['gtceu:platinum_group_sludge_tiny_dust'], ['gtceu:pentlandite_purified_ore'], ['gtceu:platinum_group_sludge_tiny_dust'], [Fluid.of('gtceu:sulfuric_acid', 1000)], [Fluid.of('gtceu:sulfuric_nickel_solution', 2000)], LV, 2.5, 1)
  addCRRecipe(['gtceu:platinum_group_sludge_tiny_dust2'], ['gtceu:chalcopyrite_purified_ore'], ['gtceu:platinum_group_sludge_tiny_dust'], [Fluid.of('gtceu:sulfuric_acid', 1000)], [Fluid.of('gtceu:sulfuric_copper_solution', 2000)], LV, 2.5, 1)
  addCRLRecipe(['gtceu:platinum_group_sludge_dust_l'], ['9x gtceu:pentlandite_purified_ore'], ['gtceu:platinum_group_sludge_dust'], [Fluid.of('gtceu:sulfuric_acid', 9000)], [Fluid.of('gtceu:sulfuric_nickel_solution', 18000)], HV, 1.25, 9)
  addCRLRecipe(['gtceu:platinum_group_sludge_dust2'], ['9x gtceu:chalcopyrite_purified_ore'], ['gtceu:platinum_group_sludge_dust'], [Fluid.of('gtceu:sulfuric_acid', 9000)], [Fluid.of('gtceu:sulfuric_copper_solution', 18000)], HV, 1.25, 9)
  addCRRecipe(['gtceu:ammonium_chloride'], [], [], [Fluid.of('gtceu:ammonia', 1000), Fluid.of('gtceu:hydrochloric_acid', 1000)], [Fluid.of('gtceu:ammonium_chloride', 1000)], LV, 0.75, 1)
  addCRLRecipe(['gtceu:ammonium_chloride_l'], [], [], [Fluid.of('gtceu:ammonia', 64000), Fluid.of('gtceu:hydrochloric_acid', 64000)], [Fluid.of('gtceu:ammonium_chloride', 64000)], HV, 3, 9)
  addCRLRecipe(['gtceu:platinum_salt_dust_l'], [], ['16x gtceu:platinum_salt_dust', '4x gtceu:platinum_raw_dust'], [Fluid.of('gtceu:concentrated_platinum', 18000), Fluid.of('gtceu:ammonium_chloride', 3600)], [Fluid.of('gtceu:palladium_rich_ammonia', 3600), Fluid.of('gtceu:nitrogen_dioxide', 9000), Fluid.of('gtceu:diluted_sulfuric_acid', 9000)], HV, 70, 2)
  addCRLRecipe(['gtceu:platinum_salt_dust'], [], ['16x gtceu:platinum_salt_tiny_dust', '4x gtceu:platinum_raw_tiny_dust'], [Fluid.of('gtceu:concentrated_platinum', 2000), Fluid.of('gtceu:ammonium_chloride', 400)], [Fluid.of('gtceu:palladium_rich_ammonia', 400), Fluid.of('gtceu:nitrogen_dioxide', 1000), Fluid.of('gtceu:diluted_sulfuric_acid', 1000)], LV, 60, 1)
  addCRRecipe(['gtceu:platinum_raw_dust'], ['4x gtceu:platinum_raw_dust', 'gtceu:calcium_dust'], ['2x gtceu:platinum_dust', '3x gtceu:calcium_chloride_dust'], [], [], LV, 1.5)
  addEBFRecipe(['gtceu:refined_platinum_salt_dust'], ['gtceu:refined_platinum_salt_dust'], ['gtceu:platinum_metal_dust'], [], [Fluid.of('gtceu:chlorine', 87)], MV, 10, 900, 1)
  addEBFRecipe(['gtceu:platinum_slag_dust'], ['gtceu:platinum_slag_dust'], ['gtceu:inert_metal_mixture_dust'], [Fluid.of('gtceu:molten_sodium_pyrosulfate', 360)], [Fluid.of('gtceu:rhodium_sulfate_gas', 360)], MV, 10, 775, 11)
  addCRRecipe(['gtceu:sodium_pyrosulfate_dust'], ['2x gtceu:potassium_dust', '2x gtceu:sulfur_dust'], ['11x gtceu:sodium_pyrosulfate_dust'], [Fluid.of('gtceu:oxygen', 7000)], [], MV, 2.1)
  addCRRecipe(['gtceu:inert_metal_mixture_tiny_dust'], [], ['10x gtceu:inert_metal_mixture_tiny_dust'], [Fluid.of('gtceu:rhodium_sulfate_gas', 11000), Fluid.of('minecraft:water', 10000)], [Fluid.of('gtceu:rhodium_sulfate', 10000), Fluid.of('gtceu:potassium', 2000)], LV, 15, 1)
  addCRLRecipe(['gtceu:inert_metal_mixture_dust'], [], ['4x gtceu:inert_metal_mixture_dust'], [Fluid.of('gtceu:rhodium_sulfate_gas', 39000), Fluid.of('minecraft:water', 36000)], [Fluid.of('gtceu:rhodium_sulfate', 39000), Fluid.of('gtceu:potassium', 7200)], LV, 60, 1)
  addCRRecipe(['gtceu:palladium_rich_ammonia'], ['gtceu:palladium_metal_dust'], [], [Fluid.of('gtceu:ammonia', 1000)], [Fluid.of('gtceu:palladium_rich_ammonia', 1000)], LV, 12.5, 1)
  addCRRecipe(['gtceu:palladium_raw_tiny_dust'], ['gtceu:palladium_metal_dust'], ['16x gtceu:palladium_salt_tiny_dust', '2x gtceu:palladium_raw_tiny_dust'], [Fluid.of('gtceu:palladium_rich_ammonia', 1000)], [], LV, 12.5, 1)
  addCRRecipe(['gtceu:palladium_raw_dust'], ['9x gtceu:palladium_metal_dust'], ['16x gtceu:palladium_salt_dust', '2x gtceu:palladium_raw_dust'], [Fluid.of('gtceu:palladium_rich_ammonia', 9000)], [], LV, 112.5, 9)
  addCRRecipe(['gtceu:sodium_sulfate'], ['3x gtceu:sodium_hydroxide_dust'], [], [Fluid.of('gtceu:carbon_monoxide', 1000)], [Fluid.of('gtceu:sodium_formate', 1000)], LV, 0.75)
  addCRRecipe(['gtceu:formic_acid'], [], ['7x gtceu:sodium_sulfate_dust'], [Fluid.of('gtceu:sodium_formate', 2000), Fluid.of('gtceu:sulfuric_acid', 1000)], [Fluid.of('gtceu:formic_acid', 2000)], LV, 0.75, 1)
  addCRRecipe(['gtceu:sodium_dust'], ['7x gtceu:sodium_sulfate_dust'], ['2x gtceu:sodium_dust'], [Fluid.of('gtceu:hydrogen', 2000)], [Fluid.of('gtceu:sulfuric_acid', 1000)], LV, 1.5)
  addCRSRecipe(['gtceu:palladium_dust'], ['4x gtceu:palladium_raw_dust'], ['2x gtceu:palladium_dust'], [Fluid.of('gtceu:formic_acid', 4000)], [Fluid.of('gtceu:ammonia', 4000)], LV, 12.5)
  addCRLRecipe(['gtceu:palladium_dust'], ['4x gtceu:palladium_raw_dust'], ['2x gtceu:palladium_dust'], [Fluid.of('gtceu:formic_acid', 4000)], [Fluid.of('gtceu:ammonia', 4000), Fluid.of('gtceu:ethylene', 1000), Fluid.of('minecraft:water', 1000)], LV, 12.5)
  addMIXRecipe(['gtceu:soda_ash_dust'], ['40x minecraft:dried_kelp'], ['20x gtceu:soda_ash_dust'], [Fluid.of('minecraft:water', 2000)], [], LV, 30, 32)
  addCRRecipe(['gtceu:monarkite_dust'], ['6x gtceu:soda_ash_dust'], ['10x gtceu:monarkite_dust'], [Fluid.of('gtceu:nitric_acid', 2000)], [Fluid.of('gtceu:carbon_dioxide', 1000)], LV, 5, 32)
  addCRRecipe(['gtceu:hodium_nitrate_dust'], ['5x gtceu:monarkite_dust'], ['gtceu:hodium_nitrate_dust', '2x gtceu:salt_dust'], [Fluid.of('gtceu:rhodium_salt', 1000)], [], LV, 15, 1)
  addMIXRecipe(['gtceu:rhodium_filter_cake_dust'], ['gtceu:rhodium_filter_cake_dust'], [], [Fluid.of('minecraft:water', 1000)], [Fluid.of('gtceu:rhodium_filter_cake', 1000)], LV, 15)
  addCRRecipe(['gtceu:reprecipitated_rhodium_dust'], [], ['gtceu:reprecipitated_rhodium_dust'], [Fluid.of('gtceu:rhodium_filter_cake', 1000)], [], LV, 15, 2)
  addCRRecipe(['gtceu:rhodium_dust'], ['gtceu:reprecipitated_rhodium_dust'], ['gtceu:rhodium_dust'], [Fluid.of('gtceu:rhodium_filter_cake', 1000)], [Fluid.of('gtceu:ammonia', 1000), Fluid.of('gtceu:chlorine', 1000)], LV, 15)
  addCRRecipe(['gtceu:zinc_sulfate_dust'], ['6x gtceu:zinc_sulfate_dust'], ['gtceu:zinc_dust'], [Fluid.of('gtceu:hydrogen', 2000)], [Fluid.of('gtceu:sulfuric_acid', 1000)], ULV, 1.5)
  addCRRecipe(['gtceu:roughly_rhodium_metal_dust'], ['gtceu:zinc_dust'], ['6x gtceu:zinc_sulfate_dust', 'gtceu:roughly_rhodium_metal_dust'], [Fluid.of('gtceu:rhodium_sulfate', 1000)], [], ULV, 1.5)
  addEBFRecipe(['gtceu:rhodium_salt_dust'], ['gtceu:roughly_rhodium_metal_dust', 'gtceu:salt_dust'], ['3x gtceu:rhodium_salt_dust'], [Fluid.of('gtceu:chlorine', 1000)], [], MV, 15, 600)
  addEBFRecipe(['gtceu:sodium_rutheniate_dust'], ['10x gtceu:inert_metal_mixture_dust', '10x gtceu:saltpeter_dust'], ['3x gtceu:sodium_rutheniate_dust', '6x gtceu:rarest_metal_mixture_dust'], [Fluid.of('gtceu:salt_water', 1000)], [Fluid.of('gtceu:steam', 1000)], MV, 10, 775)
  addCRRecipe(['gtceu:ruthenium_tetroxide'], ['6x gtceu:sodium_rutheniate_dust'], [], [Fluid.of('gtceu:chlorine', 3000)], [Fluid.of('gtceu:ruthenium_tetroxide', 9000)], LV, 15)
  addCKRecipe(['gtceu:ruthenium_tetroxide_hot'], [Fluid.of('gtceu:ruthenium_tetroxide', 1000), Fluid.of('gtceu:steam', 1000)], [Fluid.of('gtceu:ruthenium_tetroxide_hot', 2000)], HV, 7.5, 17)
  addDTRecipe(['gtceu:ruthenium_tetroxide_lq'], ['6x gtceu:salt_dust'], [Fluid.of('gtceu:ruthenium_tetroxide_hot', 9000)], [Fluid.of('minecraft:water', 1800), Fluid.of('gtceu:ruthenium_tetroxide_lq', 7200)], HV, 75)
  addFSRecipe(['gtceu:ruthenium_tetroxide_dust'], ['gtceu:ruthenium_tetroxide_dust'], [Fluid.of('gtceu:ruthenium_tetroxide_lq', 1000)], LV, 1.65)
  addCRRecipe(['gtceu:ruthenium_dust'], ['gtceu:ruthenium_tetroxide_dust'], ['gtceu:ruthenium_dust'], [Fluid.of('gtceu:hydrochloric_acid', 6000)], [Fluid.of('gtceu:chlorine', 6000), Fluid.of('minecraft:water', 2000)], LV, 15)
  addEBFRecipe(['gtceu:iridium_metal_residue_dust'], ['2x gtceu:rarest_metal_mixture_dust'], ['gtceu:iridium_metal_residue_dust'], [Fluid.of('gtceu:hydrochloric_acid', 500)], [Fluid.of('gtceu:acidic_osmium_solution', 1000)], MV, 5, 775, 11)
  addDTRecipe(['gtceu:osmium_tetroxide'], [], [Fluid.of('gtceu:acidic_osmium_solution', 1000)], [Fluid.of('gtceu:osmium_tetroxide', 100), Fluid.of('minecraft:water', 900)], MV, 7.5)
  addCRRecipe(['gtceu:osmium_dust'], [], ['gtceu:osmium_dust'], [Fluid.of('gtceu:osmium_tetroxide', 1000), Fluid.of('gtceu:hydrochloric_acid', 6000)], [Fluid.of('gtceu:chlorine', 7000), Fluid.of('minecraft:water', 2000)], LV, 15)
  addEBFRecipe(['gtceu:iridium_dioxide_dust'], ['gtceu:iridium_metal_residue_dust'], ['gtceu:platinum_sludge_residue_dust', 'gtceu:iridium_dioxide_dust'], [], [], MV, 10, 775, 1)
  addCRRecipe(['gtceu:acidic_iridium'], ['gtceu:iridium_dioxide_dust'], [], [Fluid.of('gtceu:hydrochloric_acid', 1000)], [Fluid.of('gtceu:acidic_iridium', 1000)], LV, 15)
  addCRRecipe(['gtceu:iridium_chloride_dust'], [], ['gtceu:iridium_chloride_dust'], [Fluid.of('gtceu:acidic_iridium', 1000), Fluid.of('gtceu:ammonium_chloride_bucket', 3000)], [Fluid.of('gtceu:ammonia', 3000)], LV, 15)
  addCRRecipe(['gtceu:iridium_dust'], ['gtceu:iridium_chloride_dust', 'gtceu:calcium_dust'], ['gtceu:metal_sludge_dust', 'gtceu:iridium_dust'], [], [Fluid.of('gtceu:calcium_chloride', 3000)], EV, 15)
  addFSRecipe(['gtceu:calcium_chloride_dust'], ['gtceu:calcium_chloride_dust'], [Fluid.of('gtceu:calcium_chloride', 1000)], LV, 1.8)
  addFSRecipe(['gtceu:ammonium_chloride_dust'], ['gtceu:ammonium_chloride_dust'], [Fluid.of('gtceu:ammonium_chloride', 1000)], LV, 1.8)
})
