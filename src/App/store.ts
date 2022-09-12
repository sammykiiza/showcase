import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filterMenuReducer from '../Core/Menus/FiterMenu/filterMenuSlice';
import authSliceReducer from '../Features/Auth/Login/AuthSlice';
import { listenerMiddleware } from './Middleware/listenerMiddleware';
import { apiAuth, apiFilterMenu } from '../Core/Services';

export const store = configureStore({
  reducer: {
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
