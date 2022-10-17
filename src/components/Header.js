import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';





const Header = () => {

const {user} = useContext(AuthContext)


  
    return (
       <nav>
        <div className="navbar bg-neutral text-neutral-content">
  <Link className="btn btn-ghost normal-case text-xl">ASMRoute</Link>
  <div className="nav-links ">
    <Link className="btn btn-ghost normal-case text-xl"  to='/'>Home</Link>

    <Link className="btn btn-ghost normal-case text-xl"  to='/register'>Signup</Link>
    <Link  className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
  </div>
 {user.DisplayName && <span className='btn btn-ghost normal-case text-xl'>Wellcome {user.DisplayName}</span>}
</div>
       </nav>
    );
};

export default Header;