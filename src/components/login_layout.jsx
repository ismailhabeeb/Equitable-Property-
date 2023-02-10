import logo from '../assets/images/TreeCity.webp'
import '../assets/styles/login.css'
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <main className='login-div'>
            <div id='logo'>
                <img src={logo} alt="" />
            </div>
            {/* <div> */}
                <Outlet/>
            {/* </div> */}
        </main>
    )
}