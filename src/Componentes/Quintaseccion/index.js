import { Formulario } from "./Formulario";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useEffect } from "react";

function DateContact() {
  const [contactInfo, setInfoContact] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const disableEnviar = !(
    contactInfo.name &&
    contactInfo.phone &&
    contactInfo.email &&
    contactInfo.message
  );

  const handleChange = (event) => {
    if (success) setSuccess(false);
    if (error) setError(false);
    const valorPropiedad = event.target.value;
    const propiedad = event.target.id;
    //console.log(valorPropiedad,propiedad)


    setInfoContact({ ...contactInfo, [propiedad]: valorPropiedad });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("La Info ingresada es:", contactInfo);
    axios({
      method: "POST",
      url: "https://pinnuevobackend.up.railway.app/api/insertContacto",
      data: contactInfo,
    })
      .then((response) => {
        setSuccess(true);
        console.log(response.data);
        setInfoContact({name: "", phone: "", email: "", message: "" });
 // reinicia valores
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });      
  };

  const mostrarAlertaOK= () => {
    Swal.fire("Informacion", "Se cargaron los datos correctamente y se envio el email", "success");
  }

  const mostrarAlertaError= () => {
    Swal.fire("Informacion", "No se pudieron procesar los datos", "error");
  }
  
  return (
    <section id="contact">
      <h1>Contactanos</h1>
      <Formulario
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        contactInfo={contactInfo}        
        name={contactInfo.name}
        email={contactInfo.email}
        phone={contactInfo.phone}
        message={contactInfo.message}
        disableEnviar={disableEnviar}
      />
      {success && (
        mostrarAlertaOK()
        // <div className="alert alert-success alert-dismissible fade show" role="alert" id="alert-success">
        //   Se registraron los datos y se envio el mail correctamente
        //   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        // </div>
      )}
      {error && (
        mostrarAlertaError()
      //   <div className="alert alert-danger alert-dismissible fade show" role="alert">
      //   Verifique el error porque no pudimos procesar el registro de contacto
      //   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      // </div>
      )}
    </section>
  )
};

export default DateContact;
