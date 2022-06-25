import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { LoginRequest, useLoginMutation } from '../../../services/apiAuth';
import AuthLayout from '../layouts/AuthLayout';
import { setCredentials } from './authSlice';

function Login() {
    const today: Date = new Date();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [login, result] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const loginCredentials = useAppSelector((state:RootState) => state.auth);

    const handleLogin = async (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        const loginRequest: LoginRequest = {
            email: email,
            password: password
        }

        try {
            await login(loginRequest).unwrap();
            navigate('/map');
          } catch (error) {
            console.error('rejected', error);
          }
    }
    return (
        <AuthLayout>
            <div className='ml-[39%] pt-[8%]'>
                <div className="w-full max-w-xs">
                    <h1 className='text-center text-xl text-white font-bold pb-2'>ITT-RAMS</h1>
                    <p className={(result.error? 'absolute top-[24%] left-[41%] text-red-500 text-sm italic' : 'hidden')}>Wrong credentials</p>
                    <div className={(result.isLoading? 'absolute top-0 left-0 bg-black opacity-50 w-screen h-screen' : 'hidden')}>
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