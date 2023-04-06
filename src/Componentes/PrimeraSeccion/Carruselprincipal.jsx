import React from 'react'

export const Carruselprincipal = () => {
  return (
<div className='paramq'>
<div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-inner">
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" id='carrusel-principal'>
    <div className="carousel-item active">
      <img src="./salar-2.webp" className="d-block w-100" alt="1" id='image1'/>
    </div>
    <div className="carousel-item">
      <img src="./salar-1.jpg" className="d-block w-100" alt="2" id='image2' />
    </div>
    <div className="carousel-item">
      <img src="./salar-3.jpg" className="d-block w-100" alt="3" id='image3'/>
    </div>
    <div className='contenedor-texto'>
    <h1 className='titulo-principal'>Sed ut perspiciatis unde omnis iste natus</h1>
    <p className='subtitulo'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
    <button className="btn btn-primary" id='boton-principal' href='#fulltextwith'>Leer mas</button>
    </div>
  </div>
</div>
    </div>
  </div>
  </div>
  )
}