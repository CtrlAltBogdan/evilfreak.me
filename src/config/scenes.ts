export type SceneAsset = {
  id: string
  src: string
  alt?: string
  layer: 'back' | 'mid' | 'front'
  x?: string
  y?: string
  width?: string
  opacity?: number
  depth?: number
  blendMode?: 'normal' | 'screen' | 'multiply' | 'lighten' | 'overlay'
  mobileSrc?: string
  mobileX?: string
  mobileY?: string
  mobileWidth?: string
  mobileScale?: number
  mobileOpacity?: number
  mobileDepth?: number
  mobileCrop?: string
  mobileBlendMode?: SceneAsset['blendMode']
  mobileHidden?: boolean
}

export type Scene = {
  id: string
  act: string
  title: string
  accent: string
  secondary: string
  background: string
  light: 'red' | 'cold' | 'toxic' | 'split' | 'white' | 'none'
  grain: number
  assets: SceneAsset[]
}

export const scenes: Record<string, Scene> = {
  prologue: {
    id: 'top', act: 'Prologue', title: 'House lights down', accent: '#b51f2e', secondary: '#efe9de', background: '#070707', light: 'red', grain: .065,
    assets: [
      { id: 'balcony', src: '/assets/processed/prologue/balcony-back.webp', layer: 'back', x: '18%', y: '4%', width: '69%', opacity: .56, depth: .03, blendMode: 'screen', mobileX: '-25%', mobileY: '8%', mobileWidth: '145%', mobileOpacity: .34 },
      { id: 'architecture-left', src: '/assets/processed/prologue/architecture-left.webp', layer: 'mid', x: '-4%', y: '7%', width: '49%', opacity: .92, depth: .05, mobileX: '-35%', mobileY: '19%', mobileWidth: '95%', mobileOpacity: .72 },
      { id: 'architecture-right', src: '/assets/processed/prologue/architecture-right.webp', layer: 'mid', x: '57%', y: '8%', width: '47%', opacity: .88, depth: .06, mobileX: '57%', mobileY: '20%', mobileWidth: '80%', mobileOpacity: .66 },
      { id: 'angel', src: '/assets/processed/prologue/angel.webp', layer: 'front', x: '61%', y: '9%', width: '18%', opacity: .92, depth: .09, mobileX: '58%', mobileY: '14%', mobileWidth: '43%', mobileOpacity: .86 },
      { id: 'mistress-prologue', src: '/assets/processed/prologue/mistress-silhouette-mobile.webp', layer: 'mid', x: '73%', y: '29%', width: '16%', opacity: .12, depth: .04, blendMode: 'lighten', mobileX: '43%', mobileY: '23%', mobileWidth: '72%', mobileOpacity: .34, mobileBlendMode: 'lighten' },
    ],
  },
  act1: {
    id: 'act-1', act: 'Act I', title: 'Of Velvet and Vice', accent: '#e01d2f', secondary: '#82ff59', background: '#0b0405', light: 'red', grain: .075,
    assets: [
      { id: 'portal', src: '/assets/processed/act-1/opera-portal.webp', layer: 'back', x: '7%', y: '1%', width: '86%', opacity: .42, depth: .03, mobileX: '-40%', mobileY: '2%', mobileWidth: '180%', mobileOpacity: .31 },
      { id: 'curtain-left', src: '/assets/processed/act-1/curtain-left.webp', layer: 'front', x: '-7%', y: '-1%', width: '37%', opacity: .84, depth: .07, mobileX: '-30%', mobileY: '0%', mobileWidth: '80%', mobileOpacity: .58 },
      { id: 'curtain-right', src: '/assets/processed/act-1/curtain-right.webp', layer: 'front', x: '74%', y: '-1%', width: '36%', opacity: .78, depth: .08, mobileHidden: true },
      { id: 'mistress-cage', src: '/assets/processed/act-1/mistress-cage-desktop.webp', mobileSrc: '/assets/processed/act-1/mistress-cage-mobile.webp', alt: 'Mistress of Mayhem in the red cage gown', layer: 'mid', x: '64%', y: '8%', width: '45%', opacity: .88, depth: .06, mobileX: '28%', mobileY: '11%', mobileWidth: '102%', mobileOpacity: .86 },
      { id: 'quills', src: '/assets/processed/act-1/quills.webp', layer: 'front', x: '3%', y: '66%', width: '31%', opacity: .68, depth: .1, blendMode: 'lighten', mobileX: '-13%', mobileY: '75%', mobileWidth: '76%', mobileOpacity: .43 },
    ],
  },
  act2: {
    id: 'act-2', act: 'Act II', title: 'And She Fell Into a Gothic Dream', accent: '#d8d9d3', secondary: '#8497a7', background: '#07090b', light: 'cold', grain: .08,
    assets: [
      { id: 'architecture', src: '/assets/processed/act-2/cold-architecture.webp', layer: 'back', x: '60%', y: '4%', width: '52%', opacity: .38, depth: .03, blendMode: 'screen', mobileX: '29%', mobileY: '2%', mobileWidth: '112%', mobileOpacity: .31 },
      { id: 'runway', src: '/assets/processed/act-2/runway.webp', layer: 'mid', x: '49%', y: '15%', width: '48%', opacity: .55, depth: .05, mobileX: '5%', mobileY: '18%', mobileWidth: '126%', mobileOpacity: .39 },
      { id: 'mistress-trace', src: '/assets/processed/act-2/mistress-trace-mobile.webp', layer: 'mid', x: '77%', y: '23%', width: '13%', opacity: .18, depth: .04, blendMode: 'lighten', mobileX: '68%', mobileY: '24%', mobileWidth: '39%', mobileOpacity: .34, mobileBlendMode: 'lighten' },
      { id: 'grave', src: '/assets/processed/act-2/grave.webp', alt: 'Cold-lit grave stage prop', layer: 'front', x: '-4%', y: '55%', width: '43%', opacity: .86, depth: .09, mobileX: '-29%', mobileY: '72%', mobileWidth: '104%', mobileOpacity: .68 },
    ],
  },
  act3: {
    id: 'act-3', act: 'Act III', title: 'The Beautiful Nightmare That Knows Her Name', accent: '#8e66ff', secondary: '#55ff71', background: '#08070d', light: 'toxic', grain: .075,
    assets: [
      { id: 'performance', src: '/assets/processed/act-3/performance.webp', layer: 'back', x: '4%', y: '4%', width: '92%', opacity: .22, depth: .03, mobileX: '-38%', mobileY: '2%', mobileWidth: '180%', mobileOpacity: .16 },
      { id: 'skull-close', src: '/assets/processed/act-3/skull-close.webp', mobileSrc: '/assets/processed/act-3/skull-wide.webp', alt: 'Giant skull stage prop', layer: 'mid', x: '53%', y: '12%', width: '67%', opacity: .9, depth: .06, mobileX: '10%', mobileY: '10%', mobileWidth: '138%', mobileOpacity: .76 },
      { id: 'skull-wide', src: '/assets/processed/act-3/skull-wide.webp', layer: 'mid', x: '-13%', y: '56%', width: '53%', opacity: .7, depth: .07, mobileX: '-42%', mobileY: '72%', mobileWidth: '112%', mobileOpacity: .5 },
      { id: 'mistress-haunt', src: '/assets/processed/act-3/mistress-haunt-mobile.webp', layer: 'mid', x: '68%', y: '31%', width: '9%', opacity: .16, depth: .04, blendMode: 'lighten', mobileX: '63%', mobileY: '29%', mobileWidth: '32%', mobileOpacity: .41, mobileBlendMode: 'lighten' },
      { id: 'stairs', src: '/assets/processed/act-3/stairs.webp', mobileSrc: '/assets/processed/act-3/stairs-mobile.webp', layer: 'front', x: '-8%', y: '52%', width: '118%', opacity: .42, depth: .1, mobileX: '-28%', mobileY: '60%', mobileWidth: '160%', mobileOpacity: .32 },
      { id: 'roses', src: '/assets/processed/act-3/roses.webp', layer: 'front', x: '1%', y: '18%', width: '26%', opacity: .48, depth: .09, blendMode: 'lighten', mobileHidden: true },
    ],
  },
  act4: {
    id: 'act-4', act: 'Act IV', title: 'Every Chessboard Has Two Queens', accent: '#efe9de', secondary: '#a78a58', background: '#080808', light: 'split', grain: .06,
    assets: [
      { id: 'runway', src: '/assets/processed/act-4/runway.webp', layer: 'back', x: '2%', y: '5%', width: '96%', opacity: .27, depth: .03, mobileX: '-35%', mobileY: '4%', mobileWidth: '170%', mobileOpacity: .18 },
      { id: 'mistress-gondola', src: '/assets/processed/act-4/mistress-gondola-desktop.webp', layer: 'mid', x: '55%', y: '8%', width: '48%', opacity: .42, depth: .05, mobileSrc: '/assets/processed/act-4/mistress-chessboard-mobile.webp', mobileX: '20%', mobileY: '17%', mobileWidth: '94%', mobileOpacity: .58 },
      { id: 'ethereal', src: '/assets/processed/act-4/two-gagas-mobile.webp', layer: 'mid', x: '-2%', y: '22%', width: '29%', opacity: .22, depth: .04, blendMode: 'screen', mobileX: '-18%', mobileY: '43%', mobileWidth: '87%', mobileOpacity: .41, mobileBlendMode: 'screen' },
      { id: 'gondola-close', src: '/assets/processed/act-4/gondola-close.webp', alt: 'Theatrical gondola with lantern', layer: 'front', x: '-6%', y: '66%', width: '75%', opacity: .78, depth: .09, mobileX: '-42%', mobileY: '73%', mobileWidth: '155%', mobileOpacity: .62 },
    ],
  },
  finale: {
    id: 'finale', act: 'Finale', title: 'Eternal Aria of the Monster Heart', accent: '#f2eee7', secondary: '#b51f2e', background: '#0d0d0f', light: 'white', grain: .045,
    assets: [
      { id: 'mistress-dissolve', src: '/assets/processed/finale/mistress-dissolve-mobile.webp', layer: 'back', x: '4%', y: '17%', width: '18%', opacity: .17, depth: .03, blendMode: 'screen', mobileX: '-12%', mobileY: '19%', mobileWidth: '67%', mobileOpacity: .34, mobileBlendMode: 'screen' },
      { id: 'white-ensemble', src: '/assets/processed/finale/white-ensemble.webp', alt: 'White finale ensemble under stage light', layer: 'mid', x: '47%', y: '5%', width: '59%', opacity: .75, depth: .05, mobileX: '6%', mobileY: '12%', mobileWidth: '128%', mobileOpacity: .59 },
      { id: 'angel', src: '/assets/processed/finale/angel.webp', layer: 'front', x: '75%', y: '4%', width: '23%', opacity: .88, depth: .08, mobileX: '63%', mobileY: '5%', mobileWidth: '49%', mobileOpacity: .76 },
    ],
  },
  encore: {
    id: 'encore', act: 'Encore', title: 'After the credits', accent: '#e01d2f', secondary: '#efe9de', background: '#070707', light: 'none', grain: .08,
    assets: [
      { id: 'rigging', src: '/assets/processed/encore/rigging-mobile.webp', layer: 'back', x: '57%', y: '4%', width: '39%', opacity: .16, depth: .03, blendMode: 'screen', mobileX: '8%', mobileY: '2%', mobileWidth: '96%', mobileOpacity: .3, mobileBlendMode: 'normal' },
    ],
  },
}
