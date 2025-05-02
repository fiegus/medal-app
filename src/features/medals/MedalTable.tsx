import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Box, Table, Typography } from '@mui/joy'
import { CountryMedals } from './api'
import { Flag } from './Flag'
import { SortType, sortCountries } from './helpers'
import styled from 'styled-components'

interface MedalTableProps {
  medals: CountryMedals[]
}

const FilterHeadStyled = styled.th<{ $isActive: boolean }>`
  cursor: pointer;
  border-top: ${({ $isActive }) =>
    $isActive ? '2px solid lightgray' : 'none'};
`

const toNumber = (value: any) =>
  typeof value === 'number' && !isNaN(value) ? value : 0

export const MedalTable = ({ medals }: MedalTableProps) => {
  const [sortedMedals, setSortedMedals] = useState<CountryMedals[]>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const sortParam = searchParams.get('sort') as SortType
  const sortBy = sortParam ?? SortType.Gold

  useEffect(() => {
    console.log(sortBy)
    setSortedMedals(sortCountries(medals, sortBy))
  }, [searchParams, medals])

  const handleSort = (sortType: SortType) => {
    setSearchParams({ sort: sortType })
  }

  return (
    <Box>
      <Typography level="h1">MEDAL COUNT</Typography>
      <Table aria-label="table variants">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <FilterHeadStyled
              $isActive={sortBy === SortType.Gold}
              onClick={() => handleSort(SortType.Gold)}
            >
              🥇
            </FilterHeadStyled>
            <FilterHeadStyled
              $isActive={sortBy === SortType.Silver}
              onClick={() => handleSort(SortType.Silver)}
            >
              🥈
            </FilterHeadStyled>
            <FilterHeadStyled
              $isActive={sortBy === SortType.Bronze}
              onClick={() => handleSort(SortType.Bronze)}
            >
              🥉
            </FilterHeadStyled>
            <FilterHeadStyled
              $isActive={sortBy === SortType.Total}
              onClick={() => handleSort(SortType.Total)}
            >
              Total
            </FilterHeadStyled>
          </tr>
        </thead>
        <tbody>
          {sortedMedals.map((medal, index) => (
            <tr key={medal.code}>
              <td>{index + 1}</td>
              <td>
                <Flag flagIndex={index} />
              </td>
              <td>{medal.code}</td>
              <td>{toNumber(medal.gold)}</td>
              <td>{toNumber(medal.silver)}</td>
              <td>{toNumber(medal.bronze)}</td>
              <td>
                {toNumber(medal.gold) +
                  toNumber(medal.silver) +
                  toNumber(medal.bronze)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  )
}
