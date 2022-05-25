import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, selectCounterValue } from './counterSlice'

import './Counter.css'

function Counter() {
  const dispatch = useDispatch()
  const count = useSelector(selectCounterValue)

  return (
    <div className="counter">
      <button onClick={() => dispatch(decrease())}>-</button>
      <output>{count}</output>
      <button onClick={() => dispatch(increase())}>+</button>
    </div>
  )
}

export default Counter
