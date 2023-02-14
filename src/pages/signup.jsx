import warn from '../assets/images/warning.png'
// import logo from '../assets/images/TreeCity.webp'
import '../assets/styles/login.css'
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const loginRef = useRef(null);
    const pasdRef = useRef(null);
    const newpasdRef = useRef(null);
    const name = useRef(null);
    const newpasd = useRef(null);
    const pasd = useRef(null);

    const [state, setUsestate] = useState(false);

    // navigate("/login/verify");

    const next = async (ev) => {

        ev.preventDefault()
        setUsestate(true)

        if (newpasdRef.current.value === pasdRef.current.value) {
            try {

                let data = {
                    password: pasdRef.current.value,
                    email: emailRef.current.value,
                    userName: nameRef.current.value

                }

                // const response = await post_newpassword(data)
                consol.log(data)
                // navigate("/login/verify")



            } catch (error) {
                console.log(error)
                loginRef.current.innerText = 'username as already been used'
                loginRef.current.style.display = "block"
                name.current.style.boxShadow = "0px 1px 6px red"
                setUsestate(false)

            }
        } else {
            loginRef.current.innerText = 'input a match password'
            loginRef.current.style.display = "block"
            pasd.current.style.boxShadow = "0px 1px 6px red"
            newpasd.current.style.boxShadow = "0px 1px 6px red"
            setUsestate(false)

        }


    }
    return (
        <div id='form'>
            <form onSubmit={next} className='form'>
                <h1 className='logacc mb-3'>Create Account</h1>
                <p className='logwel mb-3'>Enter your personal details  and start your journey with us</p>
                <div ref={loginRef} className=' invalid text-center'></div>

                <div ref={name} className="form-floating mb-3 inp">
                    <input required ref={nameRef} type="text" className="form-control" id="floatingInput" placeholder="name" />
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating mb-3 inp">
                    <input ref={emailRef} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div ref={newpasd} className="form-floating mb-3 inp">
                    <input minLength={8} ref={newpasdRef} type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div ref={pasd} className="form-floating mb-3 inp">
                    <input minLength={8} ref={pasdRef} type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                    <label htmlFor="floatingPassword">Confirm Password</label>
                </div>
                <button type="submit" className="btn submit mb-3">Sign Up {
                    state && <span className='spinner-border-sm spinner-border'></span>
                }</button>
            </form>
            <div className="text-center ">
               <div className="text-center logfooter d-flex mx-auto">
               <p className='logfo'>Already have an account? </p>
                <Link to="/login"> Sign In</Link>
               </div>
            <Link to={'/'} className='backhome'>Back to Home </Link>

            </div>

        </div>
    )
}