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
            <ul className="nav">
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/pages'>paginas</Link>
              </li>
              <li>
                <Link to='/user'>conta usuario</Link>
              </li>
              <li>
                <Link to='/marcas'>conta marcas</Link>
              </li>
              <li>
                <Link to='/localizar'>localize meu pedido</Link>
              </li>
              <li>
                <Link to='/contato'>contato</Link>
              </li>
            </ul>

            <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
              {
                MobileMenu? <i className="fas fa-times close home-btn"></i> : 
                <i className="fas fa-bars open"></i>
              }
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar