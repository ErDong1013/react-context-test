import React from 'react'
import {getBg} from '../getColor'

export const Pure = React.memo(() => {
  return <div style={getBg(`255,100,100`)}>pure</div>
})
