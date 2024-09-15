import {useState,useContext} from 'react'
import UserContext from '../contexts/UserContext';
function Login() {
    const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');

  const {setUser} = useContext(UserContext);
  console.log('The user context is ',useContext(UserContext));
function handleSubmit(e)
{
  e.preventDefault();
  setUser({username,password});
}
// useEffect(()=>
// {
//     setUser({username,password});
// },[username,password]);
  return (
    <div className="w-full h-screen bg-amber-300  text-center flex">
        <div className="w-1/2 h-1/2 bg-gray-400 m-auto ">
          <h1 className="text-3xl text-white">Login Page</h1>
          <label htmlFor="username">Username : </label>
          <input type="text" placeholder="Enter Username" 
          value={username}
          onChange={(e)=> setUserName(e.target.value)}
          id="username" className='p-3 m-3 rounded-2xl'/>
          <br />
            <label htmlFor="password">Password : </label>
          <input type="text" placeholder="Enter Password" 
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          id="password" className='p-3 m-3 rounded-2xl'/>
          <br />
          <button
          onClick={handleSubmit}
          className='bg-blue-500 p-2 rounded-2xl '
          >Submit</button>
        </div>
      </div>
  )
}

export default Login;
