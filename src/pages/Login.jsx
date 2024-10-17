import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const credentials = {
      email,
      password,
    };
    try {
      console.log('User Data:', credentials)
      toast.success("Login Successfully, Redirecting...")
    } catch (error) {
      console.log(error)
    } finally {
      setEmail('')
      setPassword('')
    }
  };

  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{borderRadius: "25px"}}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <p className="mb-5 text-center">Don't have an account? 
                      <Link to={'/signup'} href="">Sign Up</Link>
                    </p>

                    <form onSubmit={handleSubmit} className="mx-1 mx-md-4">

                      <div className="mb-4">
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <input 
                          type="email"
                          className="form-control" 
                          id="email" 
                          required 
                          onChange={(e) => setEmail(e.target.value)}
                          value={email} 
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input 
                          type="password" 
                          className="form-control" 
                          id="password" 
                          required 
                          onChange={(e) => setPassword(e.target.value)}
                          value={password} 
                        />
                      </div>

                      <div className="d-flex justify-content-center mb-3 mb-lg-4">
                        <Button type='submit' className='w-100'>
                          Login
                        </Button>
                      </div>

                    </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <Link to={'/'}>
                      <img 
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" 
                        alt="Sample image" 
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
