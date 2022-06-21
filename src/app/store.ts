import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import dropDownReducer from '../features/menus/dropDownSlice';
import filterMenuReducer from '../features/menus/fiterMenu/filterMenuSlice';
import { api } from '../services/api';
import { listenerMiddleware } from './middleware/listenerMiddleware';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dropDown: dropDownReducer,
    filterMenu: filterMenuReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().prepend(listenerMiddleware.middleware, api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
