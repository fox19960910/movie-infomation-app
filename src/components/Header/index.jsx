import React, { useRef } from 'react'
import './Header.scss'
import { Link, useLocation } from 'react-router-dom'
import images from '../../assets/images/images'
const Header = () => {

    const navLinks = [
        {
            display:'Home',
            path:'/'
        },
        {
            display:'Movies',
            path:'/movie'
        },
        {
            display:'TV Series',
            path:'/tv'
        },
    ]
    const {pathname} = useLocation()
    const headerRef = useRef(null)
    const navLinkIndex = navLinks.findIndex(item => item.path === pathname)

    return (
        <header ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <Link to='/'>
                        <img src={images.LOGO} alt="fox logo"/>
                    </Link>
                </div>
                <nav className="navigation">
                    <ul>
                        {
                            navLinks.map((item,index) => (
                                <li key={index} className={`navigation__item  ${navLinkIndex === index ? 'active' : ''}`}>
                                    <Link to ={item.path}>{item.display}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
