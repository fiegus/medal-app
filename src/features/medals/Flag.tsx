import React from 'react'

type FlagProps = {
  flagIndex: number
}

export const Flag = ({ flagIndex }: FlagProps) => {
  const flagWidth = 28
  const flagHeight = 17

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
