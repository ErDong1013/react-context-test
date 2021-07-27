import React, {useState} from 'react'
import {SetCount} from './SetCount'
import {Count} from './Count'
import {Pure} from './Pure'

const Stage4 = () => {
  return (
    <div>
      <h1>Stage4</h1>
      <Container
        render={(count, setCount) => {
          return (
            <>
              <Count count={count} />
              <SetCount setCount={setCount} />
            </>
          )
        }}
      >
        <Pure />
      </Container>
    </div>
  )
}

const Container = (props) => {
  const [count, setCount] = useState(0)
  return (
    <>
      {props.render(count, setCount)}
      {props.children}
    </>
  )
}

export default Stage4
