import '/src/assets/styles/login.css'
import '/src/assets/styles/forget_password.css'
// import email from '/src/assets/images/email.png'
import { Link, useNavigate } from 'react-router-dom';
import arrow from '/src/assets/images/arrowback.png'
// import { Textcontext } from '../../components/context';
import { useContext, useRef, useState } from 'react';
// import { post_otp } from '../../services/pos';

function Reset_password(params) {
    const navigate = useNavigate();
    // const { forget_password, setForget_Password } = useContext(Textcontext)

    let [code, setCode] = useState("");
    const [state, setUsestate] = useState(false);
    const loginRef = useRef(null);
    const emailRef = useRef(null);
    const emailRef2 = useRef(null);
    const emailRef3 = useRef(null);
    const emailRef4 = useRef(null);
    const emailRef5 = useRef(null);
    const emailRef6 = useRef(null);
    // let [email, seEmail] = useState(forget_password.email);

    const me= (event)=>{
        console.log(event.key)
        // key = "Tab"

        // document.addEventListener('keyup', (event) => {
        //     console.log(event.key)
        //     // key.innerHTML = event.key;
        //     key = "Tab"
        //     // if (event.key == "ArrowUp") {
        //     //     up()
        //     // } else if (event.key == "ArrowDown") {
        //     //     down()
        //     // }else if(event.key == "ArrowLeft"){
        //     //     back()
        //     // }
        //     // else if(event.key == "ArrowRight"){
        //     //     front()
        //     // }
        // })
    }

    const next = async (ev) => {
        setUsestate(true)
        ev.preventDefault()

        try {
            let code = emailRef.current.value + emailRef2.current.value + emailRef3.current.value + emailRef4.current.value + emailRef5.current.value + emailRef6.current.value;
            setCode(code)
            console.log(code)
            let data = {
                code: code,
                email: email
            }
            const response = await post_otp(data)
            let forget_password = data
            setForget_Password(forget_password)
            console.log(forget_password)
            navigate("/login/new_password");

        } catch (error) {
            loginRef.current.style.display = "block"
            setUsestate(false)

        }

    }
    return (
        <div id='form' >
            <main className=''>
                {/* <p className='logimg'>
                    <img width={75} src={email} alt="" />

                </p> */}
                <p className='logacc mb-3'>Check your email</p>
                <div className='logwel mb-3'>Please enter verification code sent to  example@example.com
                {/* {forget_password.email} */}
                </div>

                <div ref={loginRef} className=' invalid '>
                    {/* <p className=''><img src={warn} alt="" /></p> */}
                    <p className=''>
                        Invalid login credentials, please enter correct email or password
                    </p>
                </div>

                <form className='' onSubmit={next}>
                    <div className="justify-content-center d-flex mb-3">
                        <input onChange={me} maxLength={1} placeholder='' type="tel" className=" bigbox" ref={emailRef} required />
                        <input maxLength={1} placeholder='' type="tel" className=" bigbox" ref={emailRef2} required />
                        <input maxLength={1} placeholder='' type="tel" className=" bigbox" ref={emailRef3} required />
                        <input maxLength={1} placeholder='' type="tel" className=" bigbox" ref={emailRef4} required />
                        <input maxLength={1} placeholder='' type="tel" className=" bigbox" ref={emailRef5} required />
                        <input maxLength={1} placeholder='' type="tel" className=" bigbox" ref={emailRef6} required />
                    </div>

                    <div className="w-100 mb-3">
                        <button className=" submit" type="submit">Verify email {
                            state && <span className='spinner-border-sm spinner-border'></span>
                        }</button>
                    </div>
                </form>
                <footer className="logfooter d-flex text-center ">
                    <p className='logfo'> Didn’t receive the email?</p>
                    <Link className='resend'>Click to resend</Link>
                </footer>
                <p className='arrow-left logfooter'><Link to="/login" className='text-dark'> <img width={15} src={arrow} alt="" /> Back to log in</Link></p>

            </main>
        </div>
    )
}
export default Reset_password;



// onChange={(ev) => setEmailRef(ev.target.value)}
// onChange={(ev) => setEmailRef(ev.target.value)}
// onChange={(ev) => setEmailRef(ev.target.value)}
// onChange={(ev) => setEmailRef(ev.target.value)}