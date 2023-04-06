import React from "react";

export const Formulario = (props) => {
  return (
    <div className="quintaseccion" id="formulario">
      <span className="segundocolor"></span>
      <img src="./fotoform.jpg" alt="argentina" />
      <h1>Get in touch We are hiring!</h1>
      <div className="contenedor-form">
        <form onSubmit={props.handleSubmit}>
          <div className="form-floating mb-3">
            <input
              onChange={props.handleChange}             
              type="text"
              className="form-control"
              id="name"
              placeholder="name"
              value={props.name}
            />
            <label for="floatingInput">Name</label>
          </div>
          
          <div className="form-floating mb-3">
            <input
              onChange={props.handleChange}
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              required
              value={props.email}
            />
            <label for="floatingInput">Email</label>
          </div>

          <div className="form-floating mb-3">
            <input
              onChange={props.handleChange}
              type="number"
              className="form-control"
              id="phone"
              placeholder="phone"
              required
              value={props.phone}
            />
            <label for="floatingInput">Phone</label>
          </div>

          <div className="form-floating">
            <textarea
              onChange={props.handleChange}
              type="text"
              className="form-control"
              id="message"
              placeholder="Deja tu comentario aqui"
              value={props.message}
            />
            <label for="floatingTextarea2">Message</label>
          </div>

          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
