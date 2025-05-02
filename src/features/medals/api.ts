import { useQuery } from '@tanstack/react-query'

export interface CountryMedals {
  code: string
  gold: number
  silver: number
  bronze: number
}

const GET_MEDALS_QUERY_KEY = 'GET_MEDALS_QUERY_KEY'

async function fetchMedals(): Promise<CountryMedals[]> {
  const res = await fetch('/data/medals.json')
  if (!res.ok) {
    throw new Error('Failed to fetch medals data')
  }
  return res.json()
}

export const useMedalsQuery = () =>
  useQuery({ queryKey: [GET_MEDALS_QUERY_KEY], queryFn: fetchMedals })
