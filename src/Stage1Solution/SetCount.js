import React from 'react'
import {getBg} from '../getColor'

export const SetCount = React.memo((props) => {
  return (
    <button
      style={getBg('100,1,1')}
      onClick={() => {
        props.setCount((c) => c + 1)
      }}
    >
      SetCount
    </button>
  )
})
