/* eslint camelcase: "off" */
// priority: 50

ItemEvents.tooltip((event) => {
  const langs = {}

  Platform.getMods().forEach((mod) => {
    Object.assign(
      langs,
      global.readJsonFileFromMod('assets', mod, `${mod}:lang/en_us`)
    )
  })

  event.addAdvancedToAll((itemStack, _, lines) => {
    if (itemStack != null) {
      if (event.alt) {
        lines.add(1, [
          Text.translate('tooltip.kubejs.translate_helper.default_name').gray(),
          Text.darkGray(langs[itemStack.descriptionId] || 'null')
        ])
        lines.add(2, [
          Text.translate('tooltip.kubejs.translate_helper.translate_key').gray(),
          Text.darkGray(itemStack.descriptionId)
        ])
      }
    }
  })
})

ClientEvents.lang('en_us', (event) => {
  event.addAll({
    'tooltip.kubejs.translate_helper.default_name': '* 默认名字: ',
    'tooltip.kubejs.translate_helper.translate_key': '* 翻译键名: '
  })
})

ItemEvents.tooltip(tooltip => {
  const tooltips = ['create:encased_fan']
  tooltips.forEach(tooltips => {
    let str = tooltips
    str = str.replace(/:/g, '.')
    const key = 'tooltip.' + str
    const translated = Text.translate(key).gold()
    tooltip.addAdvanced(tooltips, (s, adv, text) => {
      text.add(1, translated)
    })
  })
})
