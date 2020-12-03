import React, {Fragment, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button,ProgressBar } from 'react-bootstrap';
import uuid from 'uuid/dist/v4';
import socio from './Socio';
import Error from './Error';
const Formulario = ({agregarSocio}) => {

// Creo un socio vacío y lo inicializo con su state

const [socio, editarSocio] = useState({
    nombre:"",
    dni:"",
    clave:"",
    sexo:""
    
});
const [progreso, limpiarProgreso] = useState(0)
// Creo otro state para el error del formulario

const [error, setError] = useState(false);

// Extraer los valores 

const {nombre, dni,clave,sexo} = socio;


// Recoger lo que la persona escribe en el formulario

const handleChange = (e) => {
        editarSocio({
            ...socio,
            [e.target.name]: e.target.value,
            [e.target.sexo]: e.target.cheked
        }
        )
};

// Cuando se envía el formulario

const submitForm = (e) => {
    e.preventDefault();

    // Validar el formulario
        if (nombre.trim() === '' || dni.trim() === '' || clave.trim() === '' ){
            setError(true);
            return;
        }

    // Quitar el mensaje de error
        setError(false);

    // Poner un id
        socio.id = uuid();
        
    // Generar el socio
        agregarSocio(socio);

    // Limpiar el form
    editarSocio({
        nombre:"",
        dni:"",
        clave:"",
        sexo:""
    })
   
};

const completado = (e) => {
    if (error === false){
        limpiarProgreso(100)
    }
    else{
        limpiarProgreso(0)
    }
}
    
    return ( 
        <Fragment>
            {
                error
                ? <Error/>
                : null
            }
               <Form
                    onSubmit={submitForm}
               >
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nombre completo"
                            name="nombre" 
                            onChange={handleChange}
                            value={nombre}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>DNI</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Sin puntos ni espacios" 
                            name="dni"
                            onChange={handleChange}
                            value={dni}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contrasena</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Escriba su contrasena" 
                            name="clave"
                            onChange={handleChange}
                            value={clave}
                        />
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Sexo</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Masculino"
                            name="masculino"
                            onChange={handleChange}
                            value={sexo}
                        />
                        <Form.Check
                            type="radio"
                            label="Femenino"
                            name="femenino"
                            onChange={handleChange}
                            value={sexo}
                        />
                        <Form.Check
                            type="radio"
                            label="Reservado"
                            name="reservado"                       
                            onChange={handleChange}
                            value={sexo}
                        />
                    </Form.Group>
                    
                    
                    <Button 
                        onClick={submitForm,completado}
                        variant="danger" 
                        type="submit"
                    >
                        Generar Carnet
                    </Button>
               </Form>
               <br/>
               <ProgressBar animated now={progreso} /> 
        </Fragment>
     );
}
 
export default Formulario;