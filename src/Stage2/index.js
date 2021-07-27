import React, {useState} from 'react'
import {SetCount} from './SetCount'
import {Count} from './Count'
import {Pure} from './Pure'

export const Context = React.createContext({})

const Stage2 = () => {
  const [count, setCount] = useState(0)
  const [_, forceReRender] = useState({})
  console.log('render')
  return (
    <div>
      <Context.Provider value={{count, setCount}}>
        <h1>Stage2</h1>
        <button onClick={() => forceReRender({})}>forceReRender</button>
        <Count />
        <SetCount />
        <Pure />
      </Context.Provider>
    </div>
  )
}

export default Stage2
