import React from 'react'
import Link from '@mui/joy/Link'
import { useMedalsQuery } from './api'
import { MedalTable } from './MedalTable'

export const Medals = () => {
  const { isLoading, isError, data, refetch } = useMedalsQuery()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (isError) {
    return (
      <div>
        Can't get medal data.
        <Link component="button" onClick={() => refetch}>
          Try again.
        </Link>
      </div>
    )
  }

  return <MedalTable medals={data || []} />
}
