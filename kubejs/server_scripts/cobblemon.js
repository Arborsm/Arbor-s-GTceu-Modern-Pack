/* eslint prefer-const: "off", valid-typeof: "off" */
const modAndStage = [
  ['cobblemon', 'cobblemontrainer']
]

ServerEvents.recipes(event => {
  event.shapeless('kubejs:poke_flute', ['supplementaries:flute', 'cobblemon:poke_ball'])
})

PlayerEvents.loggedIn(e => {
  e.server.scheduleInTicks(100, callback => {
    if (!e.player.getStages().getAll().contains('cobblemontrainer')) {
      Utils.server.runCommandSilent('tp @e[type=cobblemon:pokemon] 0 -70 0')
    }
  })
})

EntityEvents.spawned(event => {
  const { entity } = event
  if (typeof (entity) !== null) {
    let entityName = entity.getType()
    let player = entity.getLevel().getNearestPlayer(entity, global.mobStageRange)
    if (player !== null && player.getName() !== null) {
      // let playerName = player.getName().getString()
      let playerStages = player.getStages().getAll()
      modAndStage.forEach(pair => {
        const [mod, stage] = pair
        if (entityName.split(':')[0] === mod && !playerStages.contains(stage)) {
          if (global.debug) {
            // console.log(`Canceling ${entityName} spawn for ${playerName} due to ${stage} stage abscence`)
          }
          event.cancel()
        }
      })
    }
  }
})

ItemEvents.rightClicked(event => {
  if (event.item.id === 'kubejs:poke_flute') {
    if (!event.player.getStages().getAll().contains('cobblemontrainer')) {
      event.player.stages.add('cobblemontrainer')
      event.player.tell('§e宝可梦，启动！')
    } else {
      event.player.stages.remove('cobblemontrainer')
      Utils.server.runCommandSilent('tp @e[type=cobblemon:pokemon] 0 -70 0')
      event.player.tell('§e宝可梦，关闭！')
    }
  }
})
