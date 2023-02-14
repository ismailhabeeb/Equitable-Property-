// import logo from '../assets/images/TreeCity.webp'
// import '../assets/styles/login.css'
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/navbar';
import Map from './map';

export default function Home() {
    return (
        <main className=''>
            <div className='sticky-top sticky-topp'>
                <Navbar />
            </div>
            <div className='d-flex'>
                <Outlet />
                <div className='sticky-top sticky-to'>
                    <Map />
                </div>
            </div>
            <span className=' sticky-bottom b' >
                <button className="btn me-3">Save Search</button>
                <button className="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Map</button>
            </span>
            <Footer />
        </main>
    )
}