export function getPromotionsAreas(value: string): string {
  console.log(promotionsAreas['официальный, основная площадка, категория премиум'])
  let op = Object.keys(promotionsAreas)
  for (let i = 0; i < op.length; i++) {
    // @ts-ignore
    if (promotionsAreas[op[i]] === value) {
      return op[i];
    }
  }
  // @ts-ignore
  return promotionsAreas[value];
}

export const promotionsAreas = {
  'официальный, основная площадка, категория премиум': 'official_basic_premium',
  'официальный, основная площадка, категория стандарт': 'official_basic_standard',
  'официальный, основная площадка, категория облигации': 'official_basic_bonds',
  'официальный, основная площадка, категория коммерческие облигации': 'official_basic_commercial'
}
