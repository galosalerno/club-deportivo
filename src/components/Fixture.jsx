import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Badge} from 'react-bootstrap';
import React, {Fragment} from 'react';
import '/Users/micaelapaniagua/Desktop/GALO UNAHUR/ciu/club-deportivo/src/App.css';


const Fixture = () => {

   return ( 
    
            <div className="fixture">
            <Badge variant="light">
                <Row>
                    <Row>
                        <b>COPA ARGENTINA ≠ </b> <p>Mar 01/12 - 21:00hs</p>
                    </Row>
                </Row>    
                <Row>
                        <Col>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Deportivo_Morón.png" alt="" width="50px" height="50px"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Chacarita_juniors_logo.png" alt="" width="50px" height="50px"/>
                        </Col>
                        <Col>
                            <p><b>Dep. Moron</b> vs</p> <a href="https://www.chacaritajuniors.com.ar">Chacarita</a>
                        </Col>
                </Row>
                
                <Row>

                </Row>
            </Badge>
            </div>
    


  );
}
export default Fixture;




