import '/src/assets/styles/forget_password.css'
import '/src/assets/styles/login.css'
// import Key from '/src/assets/images/key.png'
import arrow from '/src/assets/images/arrowback.png'

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
// import { post_email } from '../../services/pos';
// import { Textcontext } from '../../components/context';
function Forgot_password() {
    const navigate = useNavigate();
    const [emailRef, setEmailRef] = useState("");
    const [state, setUsestate] = useState(false);
    const loginRef = useRef(null);
    // const { forget_password, setForget_Password } = useContext(Textcontext)

    const next = async (ev) => {
        setUsestate(true)
        ev.preventDefault()

        try {

            let data = {
                email: emailRef

            }
            console.log(data)
            console.log(state)
            const response = await post_email(data)
            let forget_password = data
            setForget_Password(forget_password)
            navigate("/login/reset_password");

        } catch (error) {
            loginRef.current.innerText = 'network error'
            setUsestate(false)

        }

    }
    return (
        // <div>
        <main id='form'>
            <main>
                {/* <p className='logimg'>
                    key
                    <img className='m-2' width={78} src={Key} alt="" />
                </p> */}
                <div className='logacc mb-3'>Forgot Password?</div>
                <p className='logwel mb-3'>No worries, we’ll send you reset instructions.</p>
                <div ref={loginRef} className=' invalid text-center' />

                <form action="" onSubmit={next}>
                    <div className="form-floating mb-3">
                        <input value={emailRef} onChange={(ev) => setEmailRef(ev.target.value)} placeholder='Enter your email' type="email" className="form-control" id="floatingInput" required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    
                    <div className=" mb-3">
                        <button className="submit" type="submit">Reset password {
                            state && <span className='spinner-border-sm spinner-border'>ll</span>
                        }</button>

                    </div>
                    <p className='arrow-left logfooter backhome'><Link to="/login" className='text-dark'> <img width={15} src={arrow} alt="" /> Back to log in</Link></p>

                </form>
            </main>

        </main>
        // </div>
    );
}

export default Forgot_password;