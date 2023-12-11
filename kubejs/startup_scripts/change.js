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
  const addores = ['neutronium', 'perlite', 'uvarovite', 'andradite', 'arsenic', 'bismuth', 'antimony', 'uranium', 'uranium_235', 'plutonium_241', 'gallium', 'niobium', 'vanadium', 'osmium', 'iridium', 'titanium', 'manganese', 'rutile', 'tungsten', 'chromium', 'enriched_naquadah']
  addores.forEach(element => {
    GTMaterials.get(element).setProperty($PropertyKey.ORE, new $OreProperty())
  })
  GTMaterials.get('andesite_alloy').addFlags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SPRING)
  GTMaterials.get('brass').addFlags(GTMaterialFlags.GENERATE_DENSE)
  GTMaterials.get('aluminium').addFlags(GTMaterialFlags.GENERATE_DENSE)
  GTMaterials.get('steel').addFlags(GTMaterialFlags.GENERATE_DENSE)
  // GTMaterials.Oxygen.getProperty($PropertyKey.FLUID).getStorage().store($FluidStorageKeys.GAS, Fluid.of('ad_astra:oxygen'))
})

StartupEvents.postInit(event => {
  const materials = ['rhodium_filter_cake', 'platinum_metal', 'palladium_metal', 'sodium_rutheniate', 'iridium_dioxide', 'metal_sludge', 'platinum_slag', 'reprecipitated_rhodium', 'acidic_iridium', 'monarkite', 'roughly_rhodium_metal']
  const formulas = ['?Ru?', '??PtPdIrOsRhRu??', '??Pd??', 'Na2RbO3', 'IrO2', 'NiCu', '??IrOsRhRb??', 'Rh2NH4', '???', 'Na2NO3', '??Rh??']

  materials.forEach(function (materials, index) {
    const formula = formulas[index]
    GTMaterials.get(materials).setFormula(formula)
  })
})
