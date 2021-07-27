import React, { useMemo, useState } from 'react'
import { SetCount } from './SetCount'
import { Count } from './Count'
import { Pure } from './Pure'

export const CountContext = React.createContext({})
export const SetCountContext = React.createContext({})

const Stage3Solution = () => {
  const [count, setCount] = useState(0)
  const [_, forceReRender] = useState({})
  const memorizeValue = useMemo(() => {
    return {
      count,
    }
  }, [count])
  return (
    <div>
      <CountContext.Provider value={memorizeValue}>
        <SetCountContext.Provider value={setCount}>
          <h1>Stage3Solution</h1>
          <button onClick={() => forceReRender({})}>forceReRender</button>
          <Count />
          <SetCount />
          <Pure />
        </SetCountContext.Provider>
      </CountContext.Provider>
    </div>
  )
}

export default Stage3Solution
