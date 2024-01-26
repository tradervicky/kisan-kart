import React from 'react'
import { FaKey } from 'react-icons/fa6'

const Login = () => {
  return (
    <div>
        <div className='flex flex-row justify-center items-center mt-9'>
            <div className='w-[400px] relative h-[450px] p-10 shadow-lg flex flex-col justify-center bg-slate-800 rounded-lg'>
                <div className='absolute top-6  left-10 z-10 text-orange-400'>
                    <FaKey  size={18}/>
                </div>
                <button className='absolute top-4  left-4 rounded-full w-16 h-16  font-bold text-white bg-gray-600 shadow-2xl drop-shadow-md'>Guest</button>
                <div className='flex flex-col justify-center items-center mb-6'>
                    <h2 className='text-white font-bold text-3xl'>LOGO</h2>
                    <h2 className='text-green-500 text-xl p-2'>Welcome Here</h2>
                    <p className='text-slate-400'>Bridge Between Customers and Farmers </p>
                </div>
                <form className='relative'>
                <input type="text" placeholder="Email" id="email" className="h-12 w-full outline-none border-0 border-b-2 border-cyan-500 p-2 mb-8 bg-transparent text-white text-xl" value="test@gmail.com"/>
                <input type="password" id="password" name="password" placeholder="Password" className="h-12 w-full outline-none border-0 border-b-2 border-cyan-500 p-2 mb-8 bg-transparent text-white text-xl" value="test"/>
                <div class="absolute right-1 bottom-[4.2rem] text-blue-700 mb-4 h-5">
                    <i className="fa-regular fa-eye"></i></div>
                    <button type="submit" className="bg-cyan-600 text-white w-full p-2 rounded-md font-semibold text-md hover:bg-cyan-700 hover:duration-300 hover:scale-95 shadow-xl ">Login</button>
                </form>

            </div>

        </div>

    </div>
  )
}

export default Login