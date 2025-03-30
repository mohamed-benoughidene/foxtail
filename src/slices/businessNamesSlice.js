import { createSlice } from '@reduxjs/toolkit'

export const businessNamesSlice = createSlice({
  name: 'businessNames',
  initialState: {
    value: [],
  },
  reducers: {
    setBusinessNames: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setBusinessNames } = businessNamesSlice.actions

export default businessNamesSlice.reducer