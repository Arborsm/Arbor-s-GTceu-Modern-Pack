/* eslint no-unused-vars: "off" */
const [luoshuan, zhimi, xian, bo, kuangjia, chilun, changgan, ban, quan, gan, zhuanzi, gunzhu, xiaochilun, tanhuang, xiaotanhuang] =
['boltScrew', 'dense', 'fineWire', 'foil', 'frame', 'gear', 'longRod', 'plate', 'ring', 'rod', 'rotor', 'round', 'smallGear', 'spring', 'smallSpring']
const ALL = [luoshuan, zhimi, xian, bo, kuangjia, chilun, changgan, ban, quan, gan, zhuanzi, gunzhu, xiaochilun, tanhuang, xiaotanhuang]
StartupEvents.registry('item', event => {
  event.create('greg_icon')
  event.create('poke_flute').unstackable().rarity('uncommon').tooltip('§5右键后按H与宝可梦一起冒险吧！').displayName('宝可梦之笛')
})

GTCEuStartupEvents.registry('gtceu:material', event => {
  // 特殊注册
  event.create('sodium_pyrosulfate').dust(1).fluid().color(0xff9900).iconSet(GTMaterialIconSet.METALLIC).components('2x potassium', '2x sulfur', '7x oxygen').blastTemp(1123)
  event.create('sodium_sulfate').dust(1).color(0xF9F6CF).iconSet(GTMaterialIconSet.SAND).components('2x sodium', 'sulfur', '4x oxygen')
  event.create('zinc_sulfate').dust(1).color(0x533c1b).iconSet(GTMaterialIconSet.SAND).components('zinc', 'sulfur', '4x oxygen')
  event.create('wollastonite').dust(1).ore().color(0xc4cbcf).iconSet(GTMaterialIconSet.SAND).components('calcium', 'silicon', '3x oxygen')
  event.create('arcane_crystal').dust(1).ore().gem().color(0x93AEFF).iconSet(GTMaterialIconSet.DIAMOND)

  // 粉末注册
  function Dust (dust, color, is, fluid, ore) {
    const create = event.create(dust).dust(1).flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    if (color != null) {
      create.color(color)
    }
    if (is != null) {
      switch (is) {
        case 1:
          create.iconSet(GTMaterialIconSet.SAND)
          break
        case 2:
          create.iconSet(GTMaterialIconSet.ROUGH)
          break
        case 3:
          create.iconSet(GTMaterialIconSet.METALLIC)
          break
      }
    }
    if (fluid != null) {
      switch (fluid) {
        case 1:
          create.fluid()
          break
        case 2:
          create.gas()
          break
      }
    }
    if (ore != null) {
      create.ore()
    }
  }
  // 流体注册
  function Lq (lq, w, color) {
    const create = event.create(lq).iconSet(GTMaterialIconSet.ROUGH)
    if (color != null) {
      create.color(color)
    }
    if (w != null) {
      switch (w) {
        case 1:
          create.fluid()
          break
        case 2:
          create.gas()
          break
      }
    }
  }
  // 锭注册
  function Ingot (ingot, color, materials, iconset, ore) {
    const create = event.create(ingot).ingot(1).fluid()
    if (color != null) {
      create.color(color)
    }
    if (materials != null) {
      materials.forEach(material => {
        switch (material) {
          case 'boltScrew':
            create.flags(GTMaterialFlags.GENERATE_BOLT_SCREW)
            break
          case 'dense':
            create.flags(GTMaterialFlags.GENERATE_DENSE)
            break
          case 'fineWire':
            create.flags(GTMaterialFlags.GENERATE_FINE_WIRE)
            break
          case 'foil':
            create.flags(GTMaterialFlags.GENERATE_FOIL)
            break
          case 'frame':
            create.flags(GTMaterialFlags.GENERATE_FRAME)
            break
          case 'gear':
            create.flags(GTMaterialFlags.GENERATE_GEAR)
            break
          case 'longRod':
            create.flags(GTMaterialFlags.GENERATE_LONG_ROD)
            break
          case 'plate':
            create.flags(GTMaterialFlags.GENERATE_PLATE)
            break
          case 'ring':
            create.flags(GTMaterialFlags.GENERATE_RING)
            break
          case 'rod':
            create.flags(GTMaterialFlags.GENERATE_ROD)
            break
          case 'rotor':
            create.flags(GTMaterialFlags.GENERATE_ROTOR)
            break
          case 'round':
            create.flags(GTMaterialFlags.GENERATE_ROUND)
            break
          case 'smallGear':
            create.flags(GTMaterialFlags.GENERATE_SMALL_GEAR)
            break
          case 'spring':
            create.flags(GTMaterialFlags.GENERATE_SPRING)
            break
          case 'smallSpring':
            create.flags(GTMaterialFlags.GENERATE_SPRING_SMALL)
            break
          default:
            break
        }
        if (ore != null) {
          create.ore()
        }
      })
    }
    if (typeof iconset !== 'number') { create.iconSet(iconset) } else {
      switch (iconset) {
        case 1:
          create.iconSet(GTMaterialIconSet.SHINY)
          break
        case 2:
          create.iconSet(GTMaterialIconSet.METALLIC)
          break
      }
    }
  }
  Ingot('manasteel', 0x2177b8, ALL, 1)
  Ingot('terrasteel', 0x5dbe8a, ALL, 1)
  Ingot('elementium', 0xFFB3D6, ALL, 1)
  Ingot('shadow_steel', 0x35333c, ALL, 2)
  Ingot('refined_radiance', 0xfffef9, ALL, 2)
  // 铂处理
  // Dust
  Dust('platinum_salt', 0xEEF2AE, 1)
  Dust('refined_platinum_salt', 0xFFFEC2, 1)
  Dust('palladium_salt', 0x33302D, 1)
  Dust('hodium_nitrate', 0x8C5A0C, 1)
  Dust('roughly_rhodium_metal', 0x594C1A, 1)
  Dust('rhodium_salt', 0x61200A, 1, 1)
  Dust('rhodium_filter_cake', 0x87350C, 2, 1)
  Dust('platinum_metal', 0xEBEBB2, 2)
  Dust('palladium_metal', 0x30302E, 1)
  Dust('sodium_rutheniate', 0x282C8C, 3)
  Dust('iridium_dioxide', 0xA2BFFF, 3)
  Dust('metal_sludge', 0x362605, 1)
  Dust('platinum_slag', 0x343318, 1)
  Dust('reprecipitated_rhodium', 0xD40849, 1)
  Dust('monarkite', 0x4e2a40, 1)
  Dust('kaolinite', 0x969090, 2, null, 1)
  Dust('dolomite', 0x9F9191, 2, null, 1)
  // Liquid
  Lq('concentrated_platinum', 1, 0xC3C39A)
  Lq('rhodium_sulfate_gas', 2, 0xBD8743)
  Lq('palladium_rich_ammonia', 1, 0x676767)
  Lq('ruthenium_tetroxide_hot', 2, 0x9B9B9B)
  Lq('ruthenium_tetroxide_lq', 1, 0xA8A8A8)
  Lq('acidic_iridium', 2, 0x634E3A)
  Lq('sodium_formate', 1, 0xf1939c)
  Lq('formic_acid', 1, 0xf8c387)
})
