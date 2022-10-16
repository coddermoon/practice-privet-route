import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <nav>
        <div className="navbar bg-neutral text-neutral-content">
  <Link className="btn btn-ghost normal-case text-xl">ASMRoute</Link>
  <div className="nav-links ">
    <Link className="btn btn-ghost normal-case text-xl"  to='/'>Home</Link>

    <Link className="btn btn-ghost normal-case text-xl"  to='/register'>Signup</Link>
    <Link  className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
  </div>
</div>
       </nav>
    );
};

export default Header;