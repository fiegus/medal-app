import React from 'react'
import { useMedalsQuery } from './api'
import { MedalTable } from './MedalTable'

export const Medals = () => {
  const { isLoading, isError, error, data } = useMedalsQuery()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (isError) {
    return <div>error.message</div>
  }

  return <MedalTable medals={data || []} />
}
