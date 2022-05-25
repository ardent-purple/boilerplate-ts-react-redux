import { createSlice, Selector } from '@reduxjs/toolkit'
import { RootState } from '../../store'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increase: (state) => {
      state.value += 1
    },
    decrease: (state) => {
      state.value -= 1
    },
  },
})

export const selectCounterValue = (state: RootState) => state.counter.value
export const { increase, decrease } = counterSlice.actions
export default counterSlice.reducer
