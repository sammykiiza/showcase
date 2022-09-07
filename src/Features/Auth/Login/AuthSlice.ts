import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../App/store'
import { AuthState } from '../../../Types/Models/Auth/authState'
import { User } from '../../../Types/Models/Auth/user'

/**
 * @description The initial state of the user before authentication.
 * Takes on AuthState type.
 */
const initialState: AuthState = {
  user: null,
  accessToken: null
}

/**
 * @description The redux slice that manages a user's authentication credentials 
 * into and out of the state.
 */
const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state: AuthState, action: PayloadAction<{ user: User; accessToken: string }>) => {
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
    },
  },
})

export const { setCredentials } = AuthSlice.actions

export default AuthSlice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
