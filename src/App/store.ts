import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../Features/counter/counterSlice';
import filterMenuReducer from '../Features/Menus/FiterMenu/filterMenuSlice';
import authSliceReducer from '../Features/Auth/Login/AuthSlice';
import { apiAuth } from '../Services/apiAuth';
import { apiFilterMenu } from '../Services/apiFilterMenu';
import { listenerMiddleware } from './Middleware/listenerMiddleware';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
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
