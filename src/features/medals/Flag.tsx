import React from 'react'

const FLAG_WIDTH = 28
const FLAG_HEIGHT = 17

type FlagProps = {
  flagCode: string
}

const mapFlagToPosition = (flagCode: string) =>
  [
    'AUT',
    'BLR',
    'CAN',
    'CHN',
    'FRA',
    'GER',
    'ITA',
    'NED',
    'NOR',
    'RUS',
    'SUI',
    'SWE',
    'USA',
  ].findIndex((country) => country === flagCode)

export const Flag = ({ flagCode }: FlagProps) => {
  const flagIndex = mapFlagToPosition(flagCode)
  const flagPosition = -flagIndex * FLAG_HEIGHT

  return (
    <div
      style={{
        width: `${FLAG_WIDTH}px`,
        height: `${FLAG_HEIGHT}px`,
        backgroundImage: 'url(/public/flags.png)',
        backgroundPosition: `0px ${flagPosition}px`,
        backgroundSize: 'auto',
      }}
    ></div>
  )
}
