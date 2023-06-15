export type PriceTableType = {
  [key: string]: { day: number, night: number }
}

export const priceTable: PriceTableType = {
  // prices based on 15 minute intervals
  workday: { day: 0.20 / 4, night: 0.18 / 4 },
  weekend: { day: 0.18 / 4, night: 0.18 / 4 }
}