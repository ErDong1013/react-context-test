import React from 'react'
import {getBg} from '../getColor'

export const SetCount = (props) => {
  return (
    <button
      style={getBg()}
      onClick={() => {
        props.setCount((c) => c + 1)
      }}
    >
      SetCount
    </button>
  )
}
