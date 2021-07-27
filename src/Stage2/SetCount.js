import React, {useContext} from 'react'
import {Context} from '.'
import {getBg} from '../getColor'

export const SetCount = React.memo(() => {
  const context = useContext(Context)

  return (
    <button
      style={getBg('100,1,1')}
      onClick={() => {
        context.setCount((c) => c + 1)
      }}
    >
      SetCount
    </button>
  )
})
