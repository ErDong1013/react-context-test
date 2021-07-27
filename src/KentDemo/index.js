import React, {useState} from 'react'
import {SetCount} from './SetCount'
import {Count} from './Count'
import {getBg} from '../getColor'

export const CountContext = React.createContext({})
export const SetCountContext = React.createContext({})

const KentDemo = () => {
  const [_, forceReRender] = useState({})

  return (
    <div>
      <h1>KentDemo</h1>

      <button style={getBg('255,1,1')} onClick={() => forceReRender({})}>
        forceReRender
      </button>

      <Container>
        <Count />
        <SetCount />
      </Container>

      <footer>
        <a
          target="_black"
          href="https://github.com/kentcdodds/kentcdodds.com/blob/319db97260078ea4c263e75166f05e2cea21ccd1/content/blog/how-to-optimize-your-context-value/index.md"
        >
          article
        </a>
        <br />
        <a
          target="_black"
          href="https://codesandbox.io/s/ynn88nx9x?view=editor&file=/src/count-context.js"
        >
          demo
        </a>
      </footer>
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

export default KentDemo
