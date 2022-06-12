import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {getUsers} from "./features/usersSlice"
import { useEffect } from 'react';
import Button from './components/Button';

function App() {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

 

  return (
    <div className="text-center text-white">
      <header className="mt-20">
        <h1 className='text-4xl font-bold'>Convin Ai</h1>
       <Button user={user}/>
      </header>
    </div>
  );
}

export default App;
