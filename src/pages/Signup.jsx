import React from 'react'
import { Link } from 'react-router-dom';


const Signup = () => {
  const handleClick = async (e) => {
    e.preventDefault();
  }
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <div className='flex justify-between items-center py-6 pl-4 '>
    
</div>

<div className='flex justify-center items-center'>
  <div className='w-[400px] h-[490px] border-gray-400 mb-7 mt-10 bg-white shadow-lg'>
    <h1 className='text-center text-3xl pt-5 text-blue-600 font-semibold font-mono '>Signup</h1>
    <form className='flex justify-center items-center flex-col gap-3 mt-5'>
    <input type="text" name='fullName' placeholder='Enter your full name' className='w-3/4 px-5 py-3 rounded-lg mt-5 mb-5 bg-[#FAFAFA]' onChange={handleForm} />
     <input type="email" name='email' placeholder='Enter your email' className='w-3/4 px-5 py-3 rounded-lg mt-5 mb-5 bg-[#FAFAFA]' onChange={handleForm} />
      <input type="password" name='password' onChange={handleForm} placeholder='Enter your password' className='w-3/4 px-5 py-3 mb-5 rounded-lg bg-[#FAFAFA]' />
      <button onClick={handleClick} className="bg-blue-600 text-white text-lg font-sans font-semibold px-8 py-2  rounded-md mb-4 mt-3">Signup</button>
      <Link to='/login' className='text-blue active:text-red-600  hover:underline'>Already have an Account ?<span className='text-red-600'> login</span></Link>
    </form>
  </div>
</div>
</>
  )
}

export default Signup