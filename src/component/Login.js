import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [signin,setsignin]=useState(true)
    const toggleSignInForm=()=>{
        setsignin(signin==false)
    }
  return (
    <div className="relative h-screen">
        {/* Ensure the Header has proper styling and padding */}
        <Header className="absolute top-0 left-0 w-full bg-gradient-to-b" />
        
        <div data-uia="hero-vlv">
          <img 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg" 
            srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_small.jpg 959w" 
            alt="" 
            aria-hidden="true" 
            className="absolute inset-0 object-cover w-full h-full" 
          />
        </div>

        <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 bg-black bg-opacity-80 text-white w-3/12 z-20 rounded-lg">
  <h1 className="font-bold text-3xl py-4">{signin?"Sign-In":"Sign-Up"}</h1>
  {
    (!signin &&<input
        type="text"
        placeholder="Full Name"
        className="p-3 my-4 w-full bg-black bg-opacity-60 border-2 border-separate rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-white placeholder-white"
      />)
  }
  <input
    type="text"
    placeholder="Email Address"
    className="p-3 my-4 w-full bg-black bg-opacity-60 border-2 border-separate rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-white placeholder-white"
  />
  <input
    type="password"
    placeholder="Password"
    className="p-3 my-4 w-full bg-black bg-opacity-60 border-2 border-separate rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-white placeholder-white"
  />
  <button className="p-4 my-4 bg-red-600 w-full rounded-lg hover:bg-red-700 transition duration-300">
  {signin?"Sign-In":"Sign-Up"}
  </button>
  <p className='p-4 cursor-pointer'  onClick={toggleSignInForm}>{signin?"New to Netflix? Sign-Up":" Already registered? Sign-In"}</p>
</form>

    </div>
  )
}

export default Login
