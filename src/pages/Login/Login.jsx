import React from 'react'

import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='bg-[#fff8f0] h-screen'>
            <div className="flex justify-center align-center">
                <div>
                    <h1 className="text-4xl font-bold text-center py-8">
                        ADMIN
                    </h1>

                    <div className='mt-16'>
                        <div className="text-center font-bold text-2xl">
                            <h2>
                                LOGIN
                            </h2>
                        </div>
                    </div>
                    <div className='text-center'>
                        <input type="text" className="border-b bg-[#fff8f0] border-b-[#000000] w-56 py-1 mt-2" placeholder='Username' />
                    </div>
                    <div className='text-center'>
                        <input type="text" className="border-b bg-[#fff8f0] border-b-[#000000] w-56 py-1" placeholder='Password' />
                    </div>
                    <div className='text-center'><Link to="/dashboard">
                        <button type="button" className=" bg-[#090b63] px-5 py-1 mt-4 rounded w-56 text-[#ffffff]">Sign In</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login;