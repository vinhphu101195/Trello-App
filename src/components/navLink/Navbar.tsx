import React from 'react'
import {Link} from 'react-router-dom';
import {SignInNav} from './SignInNav';
import {SignOutNav} from './SignOutNav';

interface Props {

}

export const Navbar: React.FC<Props> = () =>{
        return (
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">PhuChau Trello</Link>
                    <SignOutNav></SignOutNav>
                </div>
            </nav>
        );
}