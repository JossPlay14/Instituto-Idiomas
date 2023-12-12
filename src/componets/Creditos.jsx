import React from 'react'
import logoJoss from '../assets/img/logoJoss.jpeg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap'

function Creditos() {
  return (
    <> 
    <br />
    <Container className="cont">
      <Row>
        <Col>
        <Card style={{ width: '20rem' }}>
      <img src={logoJoss} width="250" height="250"  />
      <Card.Body>
        <Card.Title>JOSE ALFREDO CHOQUE CHOQUE</Card.Title>
        <Card.Text>
          CI: 9900040
          <br />
          Materia: Inf-122 Paralelo 'D'

          
        </Card.Text>
        <Button variant="primary">Apoyar</Button>
      </Card.Body>
    </Card>
        
        </Col>
      </Row>
    </Container>
     
     </>
    
  )
}

export default Creditos