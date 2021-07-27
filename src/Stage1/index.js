import React, {useState} from 'react'
import {SetCount} from './SetCount'
import {Count} from './Count'
import {Pure} from './Pure'

const Stage1 = () => {
  const [count, setCount] = useState(0)
  console.log('render')
  return (
    <div>
      <h1>Stage1</h1>
      <Count count={count} />
      <SetCount setCount={setCount} />
      <Pure />
    </div>
  )
}

export default Stage1
