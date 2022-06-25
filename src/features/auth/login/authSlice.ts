import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../app/store'
import { User } from '../../../services/apiAuth'

interface AuthState {
  user: User | null
  accessToken: string | null
}

const initialState: AuthState = { user:null, accessToken: null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state: AuthState, action: PayloadAction<{ user: User; accessToken: string }>) => {
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
    },
  },
})

export const { setCredentials } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
