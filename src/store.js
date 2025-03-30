import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import businessNamesReducer from './slices/businessNamesSlice';
export default configureStore({
  reducer: {
 theme: themeReducer,
  businessNames: businessNamesReducer,
  },
})