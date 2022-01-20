import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

import logo from '../assets/share.png'
import camera from '../assets/camera.svg'

export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to="/">
                    <img src={logo} width={30} alt='Share Web'/>
                </Link>
                
                    <h1>Share</h1>
                
                <Link to="/new">
                    <img src={camera} alt="Nova Publicação" />
                </Link>
            </div>
        </header>
    )
}