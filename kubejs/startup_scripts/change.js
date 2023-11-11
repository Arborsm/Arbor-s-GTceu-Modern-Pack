GTCEuStartupEvents.registry('gtceu:material', event => {
  const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
  const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
  const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys')
  const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
  function AddFluidExistMaterials (material) {
    material.setProperty($PropertyKey.FLUID, new $FluidProperty())
    material.getProperty($PropertyKey.FLUID).storage.enqueueRegistration($FluidStorageKeys.LIQUID, new GTFluidBuilder())
  }
  AddFluidExistMaterials(GTMaterials.RutheniumTetroxide)
  AddFluidExistMaterials(GTMaterials.OsmiumTetroxide)
  AddFluidExistMaterials(GTMaterials.AmmoniumChloride)
  AddFluidExistMaterials(GTMaterials.CalciumChloride)
  const addores = ['neutronium', 'perlite', 'uvarovite', 'andradite']
  addores.forEach(element => {
    GTMaterials.get(element).setProperty($PropertyKey.ORE, new $OreProperty())
  })
  GTMaterials.get('andesite_alloy').addFlags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SPRING)
})

StartupEvents.postInit(event => {
  const materials = ['rhodium_filter_cake', 'platinum_metal', 'palladium_metal', 'sodium_rutheniate', 'iridium_dioxide', 'metal_sludge', 'platinum_slag', 'reprecipitated_rhodium', 'acidic_iridium', 'monarkite', 'roughly_rhodium_metal']
  const formulas = ['?Ru?', '??PtPdIrOsRhRu??', '??Pd??', 'Na2RbO3', 'IrO2', 'NiCu', '??IrOsRhRb??', 'Rh2NH4', '???', 'Na2NO3', '??Rh??']

  materials.forEach(function (materials, index) {
    const formula = formulas[index]
    GTMaterials.get(materials).setFormula(formula)
  })
})
