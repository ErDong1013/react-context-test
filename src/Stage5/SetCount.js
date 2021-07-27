import React, { useContext } from 'react'
import { SetCountContext } from '.'
import { getBg } from '../getColor'

export const SetCount = () => {
  const setCount = useContext(SetCountContext)
  return (
    <button
      style={getBg('100,1,1')}
      onClick={() => {
        setCount(c => c + 1)
      }}
    >
      SetCount
    </button>
  )
}
