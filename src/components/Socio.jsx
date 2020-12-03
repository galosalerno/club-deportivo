import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button, Col, Row } from 'react-bootstrap';
import Logo from './Logo';


const Socio = ({socio, borrarSocio}) => {
   
   

    return ( 
        <Fragment>
            
            <Badge variant="light">
            
                <p><b>SocioID:</b> {socio.id}</p>
                <Row>
                    <Col>
                        <p><b>Nombre:</b>  {socio.nombre}</p>
                        <p><b>Dni:</b> {socio.dni}</p>
                        <p><b>Clave:</b> ≠≠≠≠≠≠≠</p>
                        
                    </Col>
                    <Col>
                        <Logo/>
                    </Col>
                    
                </Row>
            <Button 
                variant="light"
                onClick={() => borrarSocio(socio.id)}
            >Borrar Socio
            </Button>
            </Badge>
            
        </Fragment>
     );
}
 
export default Socio;