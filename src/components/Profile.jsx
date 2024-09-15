import{ useContext } from 'react'
import UserContext from '../contexts/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
 
      if(!user)
         return <div className='bg-amber-300'>Please Login first</div>
    else
       return <div className='bg-amber-300'>Username : {user.username}</div>


    }

export default Profile
