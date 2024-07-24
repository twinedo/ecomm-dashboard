import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface UserState {
  id: number;
  name: string;
}

// Define the initial state using that type
const initialState: UserState = {
  id: 0,
  name: ''
}

export const userSlice = createSlice({
  name: 'users',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload
      return state
    },
    resetUser: (state) => {
      state = initialState
      return state
    },
  },
})

export const { setUser, resetUser } = userSlice.actions

export default userSlice.reducer