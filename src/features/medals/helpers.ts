import { CountryMedals } from './api'

export enum SortType {
  Gold = 'gold',
  Silver = 'silver',
  Bronze = 'bronze',
  Total = 'total',
}

export const getTopSortedCountries = (
  countries: CountryMedals[],
  sortBy: SortType = SortType.Gold
): CountryMedals[] =>
  [...countries].sort((a, b) => {
    let primary: number, secondary: number

    if (sortBy === SortType.Gold) {
      primary = b.gold - a.gold
      secondary = b.silver - a.silver
    } else if (sortBy === SortType.Silver) {
      primary = b.silver - a.silver
      secondary = b.gold - a.gold
    } else if (sortBy === SortType.Bronze) {
      primary = b.bronze - a.bronze
      secondary = b.gold - a.gold
    } else {
      const totalA = a.gold + a.silver + a.bronze
      const totalB = b.gold + b.silver + b.bronze
      primary = totalB - totalA
      secondary = b.gold - a.gold
    }

    return primary !== 0 ? primary : secondary
  }).slice(0, 10)
