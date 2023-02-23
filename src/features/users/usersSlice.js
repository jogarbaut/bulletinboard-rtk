import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: '0', name: 'Henry Jackson'},
  {id: '1', name: 'Calvin Jones'},
  {id: '2', name: 'Fred Benson'}
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer