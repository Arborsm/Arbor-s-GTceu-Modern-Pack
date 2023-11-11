/* eslint prefer-const: "off" */
const Allremoves = global.removes
if (Platform.mods.roughlyenoughitems !== undefined) {
  REIEvents.hide('item', event => {
    Allremoves.forEach(Allremoves => {
      event.hide(Allremoves)
    })
  })
  REIEvents.removeCategories(event => {
    event.remove('ad_astra:compressor')
  })
}
let obj = { removed: [] }
// priority: 9999
function isModifiedPotion (item) {
  if (
    item.getNbt().Potion.indexOf('long') !== -1 ||
    item.getNbt().Potion.indexOf('strong') !== -1 ||
    item.getNbt().Potion.indexOf('thick') !== -1 ||
    item.getNbt().Potion.indexOf('mundane') !== -1
  ) {
    return true
  }
}
if (Platform.mods.emi !== undefined) {
  let potions = [
    'minecraft:potion',
    'minecraft:lingering_potion',
    'minecraft:splash_potion',
    'minecraft:tipped_arrow'
  ]
  // == Hide low-level enchants and modified potions
  Ingredient.of('@minecraft')
    .getStacks()
    .forEach((item) => {
      let itemId = item.getId()
      if (potions.includes(itemId)) {
        if (isModifiedPotion(item)) {
          let potionId = item.getNbt().Potion
          obj.removed.push(`item:${itemId}{Potion:'${potionId}'}`)
        }
      }
    })
  if (Platform.isLoaded('quark')) {
    Ingredient.of('@quark')
      .getStacks()
      .forEach((item) => {
        if (item.getId() === 'quark:seed_pouch' && item.getNbt().Damage > 0) {
          let seed = item.getNbt().storedItem.id
          obj.removed.push(
            `item:quark:seed_pouch{Damage:1,itemCount:640,storedItem:{Count:1b,id:'${seed}'}}`
          )
        }
      })
  }
  if (Platform.mods.apotheosis !== undefined) {
    const EnchHooks = Java.loadClass('dev.shadowsoffire.apotheosis.ench.asm.EnchHooks')
    ClientEvents.highPriorityAssets(event => {
      const enchantedBooks = []
      let totalRemoved = 0
      Utils.getRegistry('enchantment').entrySet().forEach(entry => {
        const id = entry.key.location()
        const maxLevel = EnchHooks.getMaxLevel(entry.value)
        for (let level = 1; level < maxLevel; level++) {
          enchantedBooks.push({
            type: 'item',
            id: 'minecraft:enchanted_book',
            nbt: `{StoredEnchantments:[{id:"${id}",lvl:${level}s}]}`
          })
          totalRemoved++
        }
      })
      event.add('emi:index/stacks/enchanted_books', { removed: enchantedBooks })
      console.log(`Removed ${totalRemoved} enchanted book stacks`)
    })
  }
  let chipped = ['chipped:botanist_workbench', 'chipped:glassblower', 'chipped:carpenters_table', 'chipped:loom_table', 'chipped:mason_table', 'chipped:alchemy_bench', 'chipped:tinkering_table']
  if (Platform.isLoaded('chipped')) {
    Ingredient.of('@chipped')
      .getStacks()
      .forEach((item) => {
        if (!chipped.includes(item.getId())) {
          let itemId = item.getId()
          obj.removed.push(`item:${itemId}`)
        }
      })
  }
  JsonIO.write('kubejs/assets/emi/index/stacks/hidden_stacks.json', obj)
}
