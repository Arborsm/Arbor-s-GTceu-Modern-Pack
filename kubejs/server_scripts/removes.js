ServerEvents.recipes(event => {
  global.removes.forEach(function (remove) {
    event.remove({ output: remove })
  })
  const replacesMap = new Map([
    ['gtceu:brass_plate', 'create:brass_sheet'], ['gtceu:zinc_block', 'create:zinc_block'], ['gtceu:zinc_ingot', 'create:zinc_ingot'],
    ['gtceu:zinc_nugget', 'create:zinc_nugget'], ['gtceu:copper_plate', 'create:copper_sheet'], ['gtceu:iron_plate', 'create:iron_sheet'],
    ['gtceu:iron_plate', 'ad_astra:iron_plate'], ['gtceu:gold_plate', 'create:golden_sheet'], ['gtceu:steel_plate', 'ad_astra:steel_plate'],
    ['gtceu:steel_ingot', 'ad_astra:steel_ingot'], ['gtceu:steel_nugget', 'ad_astra:steel_nugget'], ['gtceu:obsidian_dust', 'create:powdered_obsidian'],
    ['gtceu:desh_plate', 'ad_astra:desh_plate'], ['gtceu:ostrum_plate', 'ad_astra:ostrum_plate'], ['gtceu:calorite_plate', 'ad_astra:calorite_plate']
  ])
  replacesMap.forEach((replace, remove) => {
    event.replaceInput({}, replace, remove)
    event.replaceOutput({}, replace, remove)
  })
  event.remove({ id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot' })
})

ServerEvents.tags('item', event => {
  event.remove('forge:plates/obsidian', 'create:sturdy_sheet')
  event.remove('forge:plates/iron', 'ad_astra:iron_plate')
  event.remove('forge:plates/iron', 'create:iron_sheet')
  event.remove('forge:plates/steel', 'ad_astra:steel_plate')
  event.remove('forge:nuggets/zinc', 'create:zinc_nugget')
  event.add('forge:blocks/glass', 'minecraft:glass')
  event.add('forge:blocks/andesite_alloy', 'create:andesite_alloy_block')
  event.add('forge:steel_ingots', 'gtceu:steel_ingot')
  event.add('forge:calorite_ingots', 'gtceu:calorite_ingot')
})

const Allremoves = global.removes
if (Platform.mods.emi !== undefined) {
  ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', Allremoves)
  })
}
