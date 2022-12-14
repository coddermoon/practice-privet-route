import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';





const Header = () => {

const {user,handleSignOut} = useContext(AuthContext)

const handleLogout = ()=>{
  handleSignOut()
  .then(()=>{})
  .catch(error=>console.error(error))
}

  
    return (
       <nav>
        <div className="navbar bg-neutral text-neutral-content">
  <Link className="btn btn-ghost normal-case text-xl">ASMRoute</Link>
  <div className="nav-links ">
    <Link className="btn btn-ghost normal-case text-xl"  to='/'>Home</Link>
    <Link className="btn btn-ghost normal-case text-xl"  to='/orders'>Orders</Link>

   
    { user?
      <button onClick={handleLogout} className="btn btn-ghost normal-case text-xl">Logout</button>
     :
      <>
      <Link className="btn btn-ghost normal-case text-xl"  to='/register'>Signup</Link>
      <Link  className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
      </>
    
    }
   
  </div>
 {user?.email && <span className='btn btn-ghost normal-case text-xl'>Wellcome {user.email}</span>}
</div>
       </nav>
    );
};

export default Header;