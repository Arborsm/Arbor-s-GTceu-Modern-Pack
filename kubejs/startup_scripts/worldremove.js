WorldgenEvents.remove(event => {
  event.removeFeatureById(
    'raw_generation',
    [
      'ad_astra:moon_cheese_ore', 'ad_astra:moon_desh_ore', 'ad_astra:moon_iron_ore', 'ad_astra:moon_ice_shard_ore',
      'ad_astra:mars_iron_ore', 'ad_astra:mars_diamond_ore', 'ad_astra:mars_ostrum_ore', 'ad_astra:mars_ice_shard_ore',
      'ad_astra:venus_coal_ore', 'ad_astra:venus_gold_ore', 'ad_astra:venus_diamond_ore', 'ad_astra:venus_calorite_ore',
      'ad_astra:glacio_ice_shard_ore', 'ad_astra:glacio_coal_ore', 'ad_astra:glacio_copper_ore', 'ad_astra:glacio_iron_ore',
      'ad_astra:mercury_iron_ore', 'ad_astra:glacio_deepslate_lapis_ore', 'ad_astra:glacio_deepslate_iron_ore',
      'ad_astra:glacio_lapis_ore', 'ad_astra:glacio_deepslate_copper_ore', 'ad_astra:glacio_deepslate_coal_ore'
    ]
  )

  event.removeOres(ores => {
    ores.blocks = [
      'forbidden_arcanus:stella_arcanum', 'forbidden_arcanus:darkstone', 'miniutilities:ender_ore',
      'forbidden_arcanus:runic_deepslate', 'forbidden_arcanus:runic_stone', 'forbidden_arcanus:runic_darkstone',
      'forbidden_arcanus:xpetrified_ore', 'forbidden_arcanus:arcane_crystal_ore', 'forbidden_arcanus:deepslate_arcane_crystal_ore'
    ]
  })
})
