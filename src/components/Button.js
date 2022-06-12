import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buttonClicked } from '../features/idSlice';
import Card from './Card'

const Button = ({user}) => {

  const dispatch = useDispatch();
  const {value} = useSelector((state) => state.id)

  return (
    <div className='mx-auto'> 
      <div>
        <Card value={value}/>
      </div>
      <div className='flex flex-wrap justify-center items-center mt-28'>
      {
          user?.data?.map((item) => {
            return(
              <div key={item.id}>
                <h1 className='mr-10 text-xl border-2 px-6 py-3 rounded-md cursor-pointer mb-5' onClick={() => dispatch(buttonClicked(item.id))}>Button <span className='ml-2'>{item.id}</span></h1>
              </div>
          )})
        }
      </div>
        </div>
  )
}

export default Button