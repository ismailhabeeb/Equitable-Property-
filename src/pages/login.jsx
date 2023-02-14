import warn from '../assets/images/warning.png'
// import logo from '../assets/images/TreeCity.webp'
import '../assets/styles/login.css'
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

    const loginRef = useRef(null);
    const pasdRef = useRef(null);
    const emailRef = useRef(null);
    // const navigate = useNavigate()
    // const { setUserinfo } = useContext(Textcontext)
    const [state, setUsestate] = useState(false);
    // const [status, setStatus] = useState('password');
    const submit = async (ev) => {

        ev.preventDefault()
        try {
            setUsestate(true)

            let data = {
                password: pasdRef.current.value,
                email: emailRef.current.value

            }

            const response = await post_currentuser(data)
            console.log(response.data)
            localStorage.setItem('accessToken', response.data.data.accessToken);
            localStorage.setItem('useremail', response.data.data.user.email)
            localStorage.setItem('username', response.data.data.user.firstname)
            navigate("/dashboard")



        } catch (error) {
            console.log(error);
            loginRef.current.style.display = "block"
            pasdRef.current.style.boxShadow = "0px 1px 6px red"
            emailRef.current.style.boxShadow = "0px 1px 6px red"
            setUsestate(false)

        }

    }
    const type = () => {
        if (pasdRef.current.type == "password") {
            pasdRef.current.type = "text"
        } else pasdRef.current.type = "password"
    }
    return (

        <main id='form'>
            <form onSubmit={submit} className='form' action="">

                <p className='logacc mb-3'>Log in to your account</p>
                <div className='logwel mb-3'>Welcome back! Please enter your details.</div>
                <div ref={loginRef} className=' invalid  '>
                    <p className=''><img src={warn} alt="" /></p>
                    <p className=''>
                        Invalid login credentials, please enter correct email or password
                    </p>
                </div>
                <div className="form-floating mb-3">
                    <input ref={emailRef} placeholder='Enter your email' type="email" className="form-control" id="floatingInput" defaultValue="" required />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input ref={pasdRef} placeholder='xxxxxxxxxx' type='password' className="form-control" id="floatingPassword" defaultValue="" required />
                    <label htmlFor="floatingPassword">Password</label>
                    <span id='type'><input onClick={type} className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck" /></span>
                </div>
                <div className="d-flex logcheck mb-3">
                    <div className="form-check  ">
                        <input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck" />
                        <label className="form-check-label logre" htmlFor="invalidCheck">
                            Remember me
                        </label>
                    </div>
                    <label className='logfor' htmlFor=""><Link to="./forgot_password">Forgot password</Link></label>
                </div>
                <div className="w-100 mb-3">

                    <button className=" btn submit" type="submit">Sign in {
                        state && <span className='spinner-border-sm spinner-border'></span>
                    }
                    </button>
                </div>

            </form>
            <div className="text-center logfooter mx-auto">
                <div className='text-center logfooter d-flex mx-auto'> <p className='logfo'>Don't have an account? </p>
                    <Link to="/login/signup"> Sign up</Link>
                </div>
                <Link to={'/'} className='backhome'>Back to Home </Link>

            </div>

        </main>
    )
}