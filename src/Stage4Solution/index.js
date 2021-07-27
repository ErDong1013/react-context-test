import React, { useEffect, useMemo, useState } from 'react'
import { SetCount } from './SetCount'
import { Count } from './Count'
import { Pure } from './Pure'

export const CountContext = React.createContext({})
export const SetCountContext = React.createContext({})

const Stage4Solution = () => {
  return (
    <div>
      <h1>Stage4Solution</h1>
      <Container>
        <Count />
        <SetCount />
        <Pure />
      </Container>
    </div>
  )
}

const Container = props => {
  const [count, setCount] = useState(0)
  return (
    <CountContext.Provider value={count}>
      <SetCountContext.Provider value={setCount}>{props.children}</SetCountContext.Provider>
    </CountContext.Provider>
  )
}

export default Stage4Solution
