/* eslint camelcase: "off" */

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
