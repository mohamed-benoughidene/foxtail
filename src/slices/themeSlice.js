import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: localStorage.getItem('theme') || 'light',
  },
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setTheme } = themeSlice.actions

export default themeSlice.reducer