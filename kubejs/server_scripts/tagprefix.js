/* eslint prefer-const: "off" */
const blocks = new Map([
  ['infinity', 'avaritia:infinity'],
  ['calorite', 'ad_astra:calorite_block'],
  ['ostrum', 'ad_astra:ostrum_block'],
  ['desh', 'ad_astra:desh_block'],
  ['andesite_alloy', 'create:andesite_alloy_block'],
  ['arcane_crystal', 'forbidden_arcanus:arcane_crystal_block']
])
const nuggets = new Map([
  ['space_neutronium', 'avaritia:neutronium_nugget'],
  ['desh', 'ad_astra:desh_nugget'],
  ['ostrum', 'ad_astra:ostrum_nugget'],
  ['calorite', 'ad_astra:calorite_nugget'],
  ['brass', 'create:brass_nugget'],
  ['copper', 'create:brass_nugget']
])
const ingots = new Map([
  ['infinity', 'avaritia:infinity_ingot'],
  ['andesite_alloy', 'create:andesite_alloy'],
  ['space_neutronium', 'avaritia:neutronium_ingot'],
  ['desh', 'ad_astra:desh_ingot'],
  ['ostrum', 'ad_astra:ostrum_ingot'],
  ['calorite', 'ad_astra:calorite_ingot']
])
const rawOres = new Map([
  ['desh', 'ad_astra:raw_desh'],
  ['ostrum', 'ad_astra:raw_ostrum'],
  ['calorite', 'ad_astra:raw_calorite']
])
const dusts = new Map([
  ['arcane_crystal', 'forbidden_arcanus:arcane_crystal_dust'],
  ['ender_pearl', 'miniutilities:ender_dust']
])
const gems = new Map([
  ['arcane_crystal', 'forbidden_arcanus:arcane_crystal']
])

ServerEvents.highPriorityData(e => {
  const [block, ingot, nugget, rawOre] = [TagPrefix.block, TagPrefix.ingot, TagPrefix.nugget, TagPrefix.rawOre]
  function Ignore (type, id, item) {
    ChemicalHelper['registerUnificationItems(com.gregtechceu.gtceu.api.data.tag.TagPrefix,com.gregtechceu.gtceu.api.data.chemical.material.Material,net.minecraft.world.level.ItemLike[])'](type, GTMaterials.get(id), [Item.getItem(item)])
  }
  blocks.forEach((m, r) => { Ignore(block, r, m) })
  nuggets.forEach((m, r) => { Ignore(nugget, r, m) })
  ingots.forEach((m, r) => { Ignore(ingot, r, m) })
  rawOres.forEach((m, r) => { Ignore(rawOre, r, m) })
})

ServerEvents.recipes(event => {
  blocks.forEach((i, k) => {
    event.replaceInput({}, 'gtceu:' + k + '_block', i)
    event.replaceOutput({}, 'gtceu:' + k + '_block', i)
  })
  nuggets.forEach((i, k) => {
    event.replaceInput({}, 'gtceu:' + k + '_nugget', i)
    event.replaceOutput({}, 'gtceu:' + k + '_nugget', i)
  })
  ingots.forEach((i, k) => {
    event.replaceInput({}, 'gtceu:' + k + '_ingot', i)
    event.replaceOutput({}, 'gtceu:' + k + '_ingot', i)
  })
  rawOres.forEach((i, k) => {
    event.replaceInput({}, 'gtceu:raw_' + k, i)
    event.replaceOutput({}, 'gtceu:raw_' + k, i)
  })
  dusts.forEach((i, k) => {
    event.replaceInput({}, 'gtceu:' + k + '_dust', i)
    event.replaceOutput({}, 'gtceu:' + k + '_dust', i)
  })
  gems.forEach((i, k) => {
    event.replaceInput({}, 'gtceu:' + k, i)
    event.replaceOutput({}, 'gtceu:' + k + '_gem', i)
  })
})

const materials = Array.from(blocks).map((m) => { return 'gtceu:' + m[0] + '_block' })
  .concat(Array.from(nuggets).map((m) => { return 'gtceu:' + m[0] + '_nugget' }))
  .concat(Array.from(ingots).map((m) => { return 'gtceu:' + m[0] + '_ingot' }))
  .concat(Array.from(rawOres).map((m) => { return 'gtceu:raw_' + m[0] }))
  .concat(Array.from(dusts).map((m) => { return 'gtceu:' + m[0] + '_dust' }))
  .concat(Array.from(gems).map((m) => { return 'gtceu:' + m[0] + '_gem' }))

ServerEvents.tags('item', event => {
  materials.forEach((i) => {
    event.add('c:hidden_from_recipe_viewers', i)
  })
})
