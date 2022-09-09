import { User } from "./user";

export interface AuthState {
    user: User | null,
    accessToken: string | null
}