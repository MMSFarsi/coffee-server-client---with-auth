import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvide'

const SignIn = () => {

  const {signInUser}=useContext(AuthContext)
  const handleSignIn=(e)=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password);

     signInUser(email,password)
     .then(result =>{
      console.log(result.user);
      // Update last login user
      const lastSignInTime= result?.user?.metadata?.lastSignInTime;
      const loginInfo={email,lastSignInTime}
      fetch(`http://localhost:5000/users/${email}`,{
        method: 'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(loginInfo)
      
      })
        .then(res=>res.json())
        .then(data=>{
          console.log('sign in info update',data);
        })
      
     })
     .catch(error=>{
      console.log(error.message);
     })

  }
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Sign In</h1>
        <p className="py-6">
          Create an account to get access to the best deals and discounts!
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form onSubmit={handleSignIn} className="card-body">
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
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
            <button className="btn btn-primary">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SignIn