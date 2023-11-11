ServerEvents.recipes(event => {
  const yeet = (recipeTag) => {
    event.remove({ id: recipeTag })
  }
  event.remove({ type: 'ae2:transform' })
  event.remove({ type: 'ae2:entropy' })
  event.remove({ type: 'ae2:charger' })
  event.remove({ type: 'ae2:inscriber' })
  event.remove({ output: 'ae2:fluix_crystal', input: 'ae2:charged_certus_quartz_crystal' })

  yeet('ae2:network/blocks/inscribers')
  yeet('ae2:network/blocks/crystal_processing_charger')
  yeet('ae2:misc/deconstruction_certus_quartz_pillar')
  yeet('ae2:misc/deconstruction_certus_quartz_block')
  yeet('ae2:misc/deconstruction_chiseled_certus_quartz')
  yeet('ae2:network/blocks/interfaces_interface')
  yeet('ae2:network/blocks/pattern_providers_interface')
  yeet('ae2:network/blocks/energy_vibration_chamber')
  yeet('ae2:blasting/silicon_from_certus_quartz_dust')
  yeet('ae2:smelting/silicon_from_certus_quartz_dust')
  yeet('ae2:network/blocks/crank')
  yeet('ae2:tools/misctools_entropy_manipulator')
  yeet('ae2:tools/misctools_charged_staff')
  yeet('ae2:tools/network_color_applicator')
  yeet('ae2:tools/matter_cannon')
  yeet('ae2:shaped/not_so_mysterious_cube')
  yeet('ae2:network/blocks/crystal_processing_quartz_growth_accelerator')
})
