import './header.css'
import './header-responsive.css'

import Button from './button'
import { useState } from 'react'

const Header = ({ logo }) => {

    return (
        <header>
            <div className="header">
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <Button label="Contato" />
            </div>
        </header>
    )
}

export default Header