import React, {Component} from 'react';
import './Header.css';
import { FaUsers } from 'react-icons/fa';
    
    class Header extends Component {
        
        render() {
            const {userName, logOutUser} = this.props;
            return (
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper header nav-wrapper orange lighten-4">
                            
                            <a href="/" className="brand-logo center black-text text-darken-5 header-text">Pakistani Dessert Diary</a>
                            
                            <div className="navbar-nav ml-auto">
                            
                            <div className="left hide-on-med-and-down black-text text-darken-5 userGreet">
                                {userName}
                            </div>
                                <ul className="right hide-on-med-and-down">
                                    <li><a className="black-text text-darken-5" href="/">Home</a></li>
                                    {userName && (
                                        <li><a className="black-text text-darken-5" href="/Create">
                                            <FaUsers/> Create</a></li>
                                    )}           
                                    {!userName && (
                                        <li><a className="black-text text-darken-5" href="/Register">Register</a></li>
                                    )}
                                    {!userName && (
                                        <li><a className="black-text text-darken-5" href="/Login">Login</a></li>
                                    )}
                                    {userName &&(
                                        <li><a className="black-text text-darken-5" href="/"
                                        onClick={e => logOutUser(e)} >Logout</a></li>
                                    )}

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>       
            )
        }
    }



export default Header;