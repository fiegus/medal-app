import React from 'react'
import { CountryMedals } from './api'

interface MedalTableProps {
  medals: CountryMedals[]
}

export const MedalTable = ({ medals }: MedalTableProps) => {
  return <div><h1>MEDAL COUNT</h1></div>
}
