import React, { useMemo, useState } from 'react'
import { SetCount } from './SetCount'
import { Count } from './Count'
import { Pure } from './Pure'

export const Context = React.createContext({})

const Stage2Solution = () => {
  const [count, setCount] = useState(0)
  const [_, forceReRender] = useState({})
  const memorizeValue = useMemo(() => {
    return {
      count,
      setCount,
    }
  }, [count])
  return (
    <div>
      <Context.Provider value={memorizeValue}>
        <h1>Stage2Solution</h1>
        <button onClick={() => forceReRender({})}>forceReRender</button>
        <Count />
        <SetCount />
        <Pure />
      </Context.Provider>
    </div>
  )
}

export default Stage2Solution
