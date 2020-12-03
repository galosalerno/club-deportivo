import './App.css';
import './estilos.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import Formulario from './components/Formulario';
import Socio from './components/Socio';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Fixture from './components/Fixture';

function App() {


// Inicializar el local Storage

let sociosIniciales = JSON.parse(localStorage.getItem('asociados'));
if (!sociosIniciales){
  sociosIniciales=[]
};

// Generar un state vacío con los asociados

const [asociados, editarAsociados] = useState(sociosIniciales);

// Hook useEffect sirve para ejecutar cosas cuando está todo listo
// o cuando cambia el estado

useEffect(() => {
  if (sociosIniciales) {
    localStorage.setItem('asociados', JSON.stringify(asociados));
  }
  else{
    localStorage.setItem('asociados', JSON.stringify([])); 
  }
}, [sociosIniciales]);

// Función que toma el socio nuevo y lo mete en el array de asociados

const agregarSocio = (socio) => {
    editarAsociados([
      ...asociados,
      socio
    ])
};

const imagenes =   [
  "https://upload.wikimedia.org/wikipedia/commons/c/c6/Deportivo_Morón.png",
  "https://images.clarin.com/2020/04/01/damian-akerman-y-mauricio-alonso___DJGsZVCRR_720x0__1.jpg",
 ] ;

// Función para borrar el socio
// No olvidar el parámetro id en el arrow

const borrarSocio = (id) => {
  const nuevosSocios = asociados.filter (socio => socio.id !== id);
  editarAsociados(nuevosSocios);
};

// Cambiar el título haya o no socios

let titulo = asociados.length === 0 ? "" : "Carnet Online";

//CONSULTAR COMO HACER ESPACIO DENTRO DEL MAPEO PARA QUE HAYA SEPARACION ENTRE LOS SOCIOS AL MOSTRARLOS.
  return (
  <div>
      <div class="banner"></div>
      
      <NavBar/>
      <br/>
      <br/>
      <br/>
      <Container>
        <Row>
          <Col>
            <h3>Generar Carnet Online</h3>
            <Formulario
            agregarSocio={agregarSocio}
            />
            <br/>
            
          </Col>
         
          <Col>
            <h3>{titulo}</h3>
            <br/>
            
            {asociados.map( socio => 
              <Socio
              socio={socio}
              key={socio.id}
              borrarSocio={borrarSocio}
              />         
              )}  
          </Col>
          <Col>
              <Fixture/>
          </Col>
        </Row>
        <Row>
            {imagenes.map(imagen=>
              <div class="galeria">
                  <img src={imagen}/> 
              </div>
              
            )}
        </Row>

      </Container>
      <Footer/>
      </div>   
  );
}

export default App;
