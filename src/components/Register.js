import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Register = () => {

  const {createUser}= useContext(AuthContext)



  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    
    createUser(email,password)
    .then(result=>{
      const user = result.user
      console.log('register user',user)
      alert('successfull')
      form.reset()
    })
    .catch(error=>{
      console.log(error.message)
      alert(error.message)
    })
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <h1 className="text-5xl font-bold">Signup  now!</h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Signup
                </button>
              </div>
              <label className="label">
                  <Link to="/login" className="label-text-alt text-center mx-auto link link-hover">
                    Already Have An account? <br></br>
                  Please  Login
                  </Link>
                </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
