import '/src/assets/styles/home.css';
import logo from '../assets/images/TreeCity-removedbg.png'
import { Link } from 'react-router-dom';

export default function Navbar(params) {
    document.onscroll = function () { scrollGo() } 
    function scrollGo() {
        if(document.scrollTop > 2){
            alert("Shout")
        }else{
            // alert("Failed")
        }
    }
    
    const happen = () => {
        
    }
    return (
        <div className=''>
            <nav className='d-flex navbar' id='top'>
                <div className='me-auto'>
                    <Link className='me-auto' to='/login'>Login</Link>
                    <span className='me-auto'>/</span>
                    <Link className='me-auto' to='/login/signup'>Signup</Link>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg secondtop" id='secondtop'>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img height={50} src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Our Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#'>About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Invest in TreeCity</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}