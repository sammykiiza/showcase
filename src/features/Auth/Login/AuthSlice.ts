import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../app/store'
import { AuthState } from '../../../Types/Models/Auth/authState'
import { User } from '../../../Types/Models/Auth/user'

const initialState: AuthState = {
  user: null,
  accessToken: null
}

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
