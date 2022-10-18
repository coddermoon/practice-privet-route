import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {

    const {user}= useContext(AuthContext)

    return (

        <div>
           {user?.email && <h1 className='text-4xl font-bold text-center'>Wellcome,{user.email}</h1>}
            this is home
        </div>
    );
};

export default Home;