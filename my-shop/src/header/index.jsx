import React from "react";
import logo from '../assets/img/logo.png'
import './style.scss'

class Header extends React.Component {
    render() {
        return <header>
            <img src={logo}  />
            <div className="head-menu">
                <div className="navbar">
                <p>Home</p>
                <p>Shop</p>
                <p>Detail shop</p>
                <p>pages</p>
                <p>contact</p>
                </div>
                <div className="head-icons">
                <i className="icon-heart">&#xe9da;</i>
                <i className="icon-bin2">&#xe9ad;</i>           
                     </div>
            </div>
        </header>
    }
}
export default Header