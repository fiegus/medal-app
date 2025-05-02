import React from 'react'

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
  const flagWidth = 28
  const flagHeight = 17

  const flagIndex = mapFlagToPosition(flagCode)

  const xPos = -flagIndex * flagWidth
  const yPos = -Math.floor(flagIndex) * flagHeight

  return (
    <div
      style={{
        width: `${flagWidth}px`,
        height: `${flagHeight}px`,
        backgroundImage: 'url(/public/flags.png)',
        backgroundPosition: `${xPos}px ${yPos}px`,
        backgroundSize: 'auto',
      }}
    ></div>
  )
}
