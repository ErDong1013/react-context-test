import React, {useState} from 'react'
import {SetCount} from './SetCount'
import {Count} from './Count'
import {Pure} from './Pure'
import {getBg} from '../getColor'

export const CountContext = React.createContext({})
export const SetCountContext = React.createContext({})

const Stage5 = () => {
  const [_, forceReRender] = useState({})
  return (
    <div>
      <h1>Stage5</h1>
      <button style={getBg('255,1,1')} onClick={() => forceReRender({})}>
        forceReRender
      </button>
      <Container>
        <Count />
        <SetCount />
        <Pure />
      </Container>
    </div>
  )
}

const Container = (props) => {
  const [count, setCount] = useState(0)
  return (
    <CountContext.Provider value={count}>
      <SetCountContext.Provider value={setCount}>
        {props.children}
      </SetCountContext.Provider>
    </CountContext.Provider>
  )
}

export default Stage5
