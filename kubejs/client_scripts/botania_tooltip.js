// priority: 10
function snakeToCamel (str) {
  return str.replace(/(_\w)/g, (m) => m[1].toUpperCase())
}

function grabPage (camelCasedName, num, maxDepth) {
  maxDepth = maxDepth || 3
  if (num > maxDepth) return '...'
  const key = `botania.page.${camelCasedName}${num}`
  const translated = Text.translate(key)
  if (translated.getString() === key) return ''
  return ' ' + translated.getString() + grabPage(camelCasedName, num + 1)
}
function parseBotaniaPageSyntax (str) {
  return str
    .replace(/\$\((p)?([^)]*)\)/g, (match, p1) => (p1 ? '' : '_')) // clean book references and replace with bold (_)
    .replace(/(\.\s*)([A-Z])/g, '. $2') // add a space after a period if it's followed by an uppercase letter without a space
}

const inconsistentNamesMap = {
  manaPylon: 'pylon',
  naturaPylon: 'aIntro',
  alfheimPortal: 'aIntro',
  lightRelay: 'luminizerTransport',
  detectlorLightRelay: 'luminizerTransport',
  forkLightRelay: 'luminizerTransport',
  toogleLightRelay: 'luminizerTransport',
  lightLauncher: 'luminizerTransport',
  manaSpreader: 'spreader',
  manaPool: 'pool',
  dilutedPool: 'pool',
  fabulousPool: 'pool',
  elvenSpreader: 'dreamwoodSpreader',
  enchanter: 'manaEnchanting',
  manaDistributor: 'distributor',
  manaFluxfield: 'rfGenerator',
  twigWand: 'wand',
  pump: 'poolCart',
  craftyCrate: 'craftCrate'
}
function replaceInconsistentNames (str) {
  Object.entries(inconsistentNamesMap).forEach(([key, value]) => {
    str = str.replace(key, value)
  })
  return str
}
Ingredient.of('@botania').stacks.forEach((item) => {
  let cameCaseName = snakeToCamel(item.id.split(':')[1] + '')
  cameCaseName = replaceInconsistentNames(cameCaseName)
  const key = `botania.tagline.${cameCaseName}`
  const translated = Text.translate(key).getString()
  if (translated === key) {
    console.info(`missing description for ${item} key ${key}`)
    return
  }
  const description = `_${translated}._${parseBotaniaPageSyntax(grabPage(cameCaseName, 0))}`
  // also add floating and chibi versions
  const floatingVersion = Item.of(item.id.split(':')[0] + ':floating_' + item.id.split(':')[1])
  const chibiVersion = Item.of(item.id + '_chibi')
  const floatingChibiVersion = Item.of(floatingVersion.id + '_chibi')
  if (floatingVersion !== 'minecraft:air')addTooltip(floatingVersion, description)
  if (chibiVersion !== 'minecraft:air') addTooltip(chibiVersion, description)
  if (floatingChibiVersion !== 'minecraft:air') addTooltip(floatingChibiVersion, description)

  addTooltip(item, description)
})
