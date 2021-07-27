import React, { useMemo, useState } from 'react'
import { SetCount } from './SetCount'
import { Count } from './Count'
import { Pure } from './Pure'

export const CountContext = React.createContext({})
export const SetCountContext = React.createContext({})

const Stage3 = () => {
  const [count, setCount] = useState(0)
  const memorizeValue = useMemo(() => {
    return {
      count,
    }
  }, [count])
  return (
    <div>
      <CountContext.Provider value={memorizeValue}>
        <SetCountContext.Provider value={setCount}>
          <h1>Stage3</h1>
          <Count />
          <SetCount />
          <Pure />
        </SetCountContext.Provider>
      </CountContext.Provider>
    </div>
  )
}

export default Stage3
