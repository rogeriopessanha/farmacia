import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className="header">
        <div className="container d-flex">
          <div className="categoria d-flex">
            <span className="fa-solid fa-border-all"></span>
            <h4>
              Categorias <i className="fa-solid fa-chevron-down"></i>
            </h4>
          </div>

          <div className="navlink">
            <ul className={MobileMenu ? 'nav-links-MobileMenu' : 'link f-flex '} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/pages'>Paginas</Link>
              </li>
              <li>
                <Link to='/user'>Minha conta</Link>
              </li>
              {/* <li>
                <Link to='/marcas'>Conta Vendedor</Link>
              </li> */}
              <li>
                <Link to='/localizar'>Meu pedido</Link>
              </li>
              <li>
                <Link to='/contato'>Contato</Link>
              </li>
            </ul>

            <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
              {
                MobileMenu? <i className="fas fa-times close home-btn"></i> : 
                <i className="fa-solid fa-bars open"></i>
              }
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar