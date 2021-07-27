import React, {useState} from 'react'
import {SetCount} from './SetCount'
import {Count} from './Count'
import {Pure} from './Pure'
import {getBg} from '../getColor'

export const CountContext = React.createContext({})
export const SetCountContext = React.createContext({})

const Stage5Solution = () => {
  const [_, forceReRender] = useState({})
  return (
    <div>
      <h1>Stage5Solution</h1>
      <button style={getBg('255,1,1')} onClick={() => forceReRender({})}>
        forceReRender
      </button>
      <Container />
    </div>
  )
}

const Container = () => {
  const [count, setCount] = useState(0)
  return (
    <CountContext.Provider value={count}>
      <SetCountContext.Provider value={setCount}>
        <AppBarrier />
      </SetCountContext.Provider>
    </CountContext.Provider>
  )
}

const AppBarrier = React.memo(() => {
  return (
    <>
      <Count />
      <SetCount />
      <Pure />
    </>
  )
})

export default Stage5Solution
