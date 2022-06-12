import React, { useEffect } from 'react'
import { useState } from 'react';

const Card = ({value}) => {
 
  const [data,setData] = useState(null);

  useEffect(() => {
    const UserAPI = `https://reqres.in/api/users/${value}`;
    value && (async () => {
      const user = await fetch(UserAPI);
      const response = await user.json();
      setData(response)
    })();  
  }, [value])
  

  return (
    <div className='flex flex-col md:flex-row md:justify-center items-center md:items-start mt-10 p-10'>
      <div className=' md:w-[500px] border-2 flex flex-col md:flex-row p-5 rounded-md'>
      <div className='mr-10'>
      <img className='w-[100px] h-[100px]  rounded-full border-2' src={data?.data?.avatar} alt={data?.data?.first_name} />
      </div>
      <div className='text-start mt-3'>
      <h1 className='text-xl font-bold mb-2'> Name : {data?.data?.first_name} {data?.data?.last_name}</h1>
      <h1 className='text-xl font-normal'><span className='font-bold'>E-mail : </span> {data?.data?.email}</h1>
      </div>
      </div>
    </div>
  )
}

export default Card