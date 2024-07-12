import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
        <div className='SecondHeader'>
            <div className='MainHeader'>
                <Link className="LinkHeader" to="/">LOGO TEST</Link>
                <nav className='NavLinks'>
                    <Link className="LinkHeader LinkPath" to="/">SOBRE NÓS</Link>
                    <Link className="LinkHeader LinkPath" to="/">SERVIÇOS</Link>
                    <Link className="LinkHeader LinkPath" to="/">PRODUTOS</Link>
                    <Link className="LinkHeader LinkPath" to="/">MENSALIDADES</Link>
                </nav>
                <div className='DivLinks'>
                    <Link className="LinkHeader ButtonLink" id="RegisterBtn" to="/">CADASTRAR</Link>
                    <Link className="LinkHeader ButtonLink" id="LoginBtn" to="/">LOGIN</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header