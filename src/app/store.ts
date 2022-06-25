import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import dropDownReducer from '../features/menus/dropDownSlice';
import filterMenuReducer from '../features/menus/fiterMenu/filterMenuSlice';
import authSliceReducer from '../features/auth/login/authSlice';
import { apiAuth } from '../services/apiAuth';
import { apiFilterMenu } from '../services/apiFilterMenu';
import { listenerMiddleware } from './middleware/listenerMiddleware';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dropDown: dropDownReducer,
    filterMenu: filterMenuReducer,
    auth: authSliceReducer,
    [apiFilterMenu.reducerPath]: apiFilterMenu.reducer,
    [apiAuth.reducerPath]: apiAuth.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().prepend(listenerMiddleware.middleware, 
      apiFilterMenu.middleware, apiAuth.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
