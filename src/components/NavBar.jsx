import React from 'react'
import {Link} from 'react-router-dom'
import LogOut from './sign in & up/LogOut';
 
export default function NavBar() {
    
    let name=localStorage.getItem('UserName');
    return (
        <nav className="navbar navbar-expand-lg bg-black navbar-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand">NaXe</Link>
                <div className="navbar-nav ms-start">
                   <Link className="nav-link active" aria-current="page" to='/'> Home </Link>
                   <Link className="nav-link" to='movies'> Movies</Link>
                    <Link className="nav-link" to='tvs'> TvShowes </Link>
                    <Link className="nav-link" to='people'>People</Link>
                </div>
                <div className="regist navbar-nav float-end col-xl-6">
                    <div className="d-flex mx-auto fs-4 text-primary">
                       <span className='mx-3 text-danger'><i className="fab fa-youtube"></i></span> 
                       <span className='mx-3 text-warning'><i className="fab fa-instagram-square"></i></span> 
                        <span className='mx-3'><i className="fab fa-facebook"></i></span>
                       <span className='mx-3'><i className="fab fa-twitter"></i></span> 
                    </div>
                    {name?(<React.Fragment>
                        <Link className="nav-link d-none" to='login'>Login</Link>
                        <Link className="nav-link d-none" to='sign'>Sign Up</Link>
                        <Link className='nav-link' to='profile'>{name}</Link>
                        </React.Fragment>)
                     :(<React.Fragment>
                        <Link className="nav-link" to='login'>Login</Link>
                        <Link className="nav-link" to='sign'>Sign Up</Link>
                        </React.Fragment>)}
                    <Link className='nav-link ' onClick={LogOut()} to='logout'>{name?"logout":''}</Link>
                </div>
            </div>
        </nav>
    )
}
