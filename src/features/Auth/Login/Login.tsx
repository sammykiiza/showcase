import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { LoginRequest, useLoginMutation } from '../../../services/apiAuth';
import AuthLayout from '../Layouts/AuthLayout';
import { setCredentials } from './AuthSlice';

function Login() {
    const today: Date = new Date();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    const [login, { isLoading, error }] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const loginCredentials = useAppSelector((state: RootState) => state.auth);

    const handleLogin = async (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        const loginRequest: LoginRequest = {
            email: email,
            password: password
        }

        try {
            await login(loginRequest).unwrap();
            navigate('/map');
        } catch (error: any) {
            setLoginError(error.data.message);
        }
    }
    return (
        <AuthLayout>
            <div className={(error ? "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" : 'hidden')} role="alert">
                <strong className="ml-[38%] font-bold">Error!</strong>
                <span className="pl-2 block sm:inline">{loginError}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                </span>
            </div>
            <div className='ml-[39%] pt-[8%]'>
                <div className="w-full max-w-xs">
                    <h1 className='text-center text-xl text-white font-bold pb-2'>ITT-RAMS</h1>
                    <div className={(isLoading ? 'absolute top-0 left-0 bg-black opacity-50 w-screen h-screen' : 'hidden')}>
                        <div className="absolute left-[46%] top-[43%] flex items-center justify-center space-x-2 animate-pulse">
                            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                        </div>
                    </div>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        onSubmit={(e) => handleLogin(e)}
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                placeholder="Email Address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="**************"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-20 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    <p className="text-center text-white text-xs">
                        &copy;{today.getFullYear()} IT Transport Limited. All rights reserved.
                    </p>
                </div>
            </div>
        </AuthLayout>
    )
}

export default Login