import React from 'react'
import { Link } from 'react-router-dom'
// import logo from 'components/assets/img'

const Search = () => {
  return (
    <>
        <section className="search">
          <div className="container c-flex">
            <div className="logo width">
              {/* <img src={logo} alt="" /> */}
            </div>

            <div className="search-box f-flex">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Pesquisar...' />
            <span>Todas as Categorias</span>
            </div>

            <div className="icon f-flex width">
            <i class="fa-solid fa-user icon-circulo"></i>
            <div className="carrinho">
              <Link to='/carrinho'>
              <i class="fa-solid fa-basket-shopping icon-circulo"></i>
              <span>0</span>
              </Link>
            </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Search