import React from 'react'
import './Login.css'
import '../../App.css'
import { Link } from 'react-router-dom'

//import icon 
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";

//import file Logo , loginpage
import img from '../../Logo/loginpage.png'
import logo from '../../Logo/logo.png'

const Login = () => {
  return (
    <div className="loginPage flex">
        <div className="container flex">    

            <div className="imgDiv">
                <img src={img}></img>

                <div className="textDiv">
                    <h2 className='title'>Create and </h2>
                    <p>rorem kewfjwek ewkfjkwi efwij</p>
                </div>
            <div className="footerDiv flex">
                <span className="text">Don't have an account ?</span>
                <Link to={'/register'}>
                <button className='btn'>Sign Up</button>
                </Link>
            </div>
            </div>       

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo image" />
                    <h3>Welcome!</h3>
                </div>

                <form action="" className='form grid'>
                    <span>Login Status will go here</span>
                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                            <FaUserShield className='icon'/>
                            <input type="text" id='username' placeholder='Enter username' />
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                            <BsFillShieldLockFill className='icon'/>
                            <input type="password" id='password' placeholder='Enter Password' />
                        </div>
                    </div>

                    <button type='submit' className='btn flex'>
                        <span>Login</span>
                    </button>
                    
                    <span className="forgetPassword">
                        Forget Your Password ? <a href="">Click Here</a> 
                    </span>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login