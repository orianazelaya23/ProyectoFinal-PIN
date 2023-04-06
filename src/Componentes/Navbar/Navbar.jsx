import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm " id='navbar-principal'>
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <img src="./top-logo.svg" alt="" className='logo-top'/>
        <ul className="navbar-nav">
          <li className='nav-item'>
          <a className="nav-link" href='#carrusel-principal'>Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href='#fulltextwith'>Nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#slider'>Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#acordion'>Servicios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#formulario'>Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  )
}
