import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Style.scss';
import  {Navbar} from './Componentes/Navbar/Navbar';
import {Carruselprincipal}from './Componentes/PrimeraSeccion/Carruselprincipal';
import { Fullwithtext } from './Componentes/SegundaSeccion/Fullwithtext';
import { Slider } from './Componentes/TerceraSeccion/Slider';
import { Acordion } from './Componentes/CuartaSeccion/Acordion';
import { Formulario } from './Componentes/QuintaSeccion/Formulario';
import { Footer } from './Componentes/Footer/Footer';
import DateContact from './Componentes/QuintaSeccion';

function App() {
  return (
    <div className="App">
      <Carruselprincipal/>
      <Navbar/>
      <Fullwithtext/>
      <Slider/> 
      <Acordion/>
      <Formulario/>
      <Footer/>
      <DateContact />
    </div>
  );
}

export default App;
