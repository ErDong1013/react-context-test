import React, { useMemo } from 'react'
import { getBg } from '../getColor'

export const Pure = () => {
  return <div style={getBg(`255,100,100`)}>pure</div>
}
