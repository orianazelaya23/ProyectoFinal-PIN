import React from 'react'

export const Slider = () => {
  return (
    <div className="slider" id='slider'>
    <div className='slider-segundocolor'></div>
  <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./productos-1.jpg" class="d-block w-100" alt="..."/>
      <div className="recuadro-slider" >
      <div class="carousel-caption">
        <h6>Sed ut perspiciatis</h6>
        <h5>Nemo Enim</h5>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./productos-2.jpeg" class="d-block w-100" alt="..."/>
      <div className="recuadro-slider">
      <div class="carousel-caption">
        <h6>Sed ut perspiciatis</h6>
        <h5>Nemo Enim</h5>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      </div>
      </div>
      </div>
    <div class="carousel-item">
      <img src="./productos-3.webp" class="d-block w-100" alt="..."/>
      <div className="recuadro-slider">
      <div class="carousel-caption">
        <h6>Sed ut perspiciatis</h6>
        <h5>Nemo Enim</h5>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      </div>
      </div>
    </div>
   
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  </button>
  </div>
</div>
</div>
  )
}
