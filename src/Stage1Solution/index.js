import React, { useState } from 'react'
import { SetCount } from './SetCount'
import { Count } from './Count'
import { Pure } from './Pure'

const Stage1Solution = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Stage1Solution</h1>

      <Count count={count} />
      <SetCount setCount={setCount} />
      <Pure />
    </div>
  )
}

export default Stage1Solution
