import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import car3 from '../assets/img/car3.png';
import caru1 from '../assets/img/caru1.png';
import caru2 from '../assets/img/caru2.png';
import caru01 from '../assets/img/caru01.jpg';
import caru4 from '../assets/img/caru4.jpg';
import caru5 from '../assets/img/caru5.jpg';
import img1 from '../assets/img/img1.png';

const Inicio = () => {
  return (
    <>
    <br />
    <br />
    <Container>
      <img src={img1}  />
    </Container>
    <br/>
    <Container>
      <h4 className="text1">El Instituto de Idiomas al servicio de la comunidad, ofertando cursos de inglés dirigido a niños, adolescentes y adultos, además oferta cursos cortos en idiomas extranjeros como: Francés, Alemán, italiano, portugués y español, así mismo ofrece cursos en idiomas nativos como el guaraní y quechua.
Dada su gran aceptación actualmente el Instituto de Idiomas sienta presencia en las ciudades de Yacuiba, Bermejo y Villamontes con gran éxito.
Para el 2014, las autoridades del U.L.I. están trabajando en el Proyecto de convenio con Editorial Santillana para otorgar a nuestros estudiantes el Certificado TOEFEL a través de Cambridge y Oxford.</h4>
    </Container>
    <br />
    <Container>
  
      <Row>
        <Col>
      <Carousel>
      <Carousel.Item>
        <img src={caru01} width="250" height="250"/>
        
      </Carousel.Item>
      <Carousel.Item>
         <img src={caru4} width="250" height="250"/>
        
      </Carousel.Item>
      <Carousel.Item>
          <img src={caru5} width="250" height="250"/>
        
      </Carousel.Item>
    </Carousel>
        </Col>
        <Col xs={6}>
        <Carousel>
      <Carousel.Item>
        <img src={car3} width="250" height="250"/>
        
      </Carousel.Item>
      <Carousel.Item>
         <img src={caru2} width="250" height="250"/>
        
      </Carousel.Item>
      <Carousel.Item>
          <img src={caru1} width="250" height="250"/>
        
      </Carousel.Item>
    </Carousel>
        </Col>
        
      </Row>
      
    </Container>
    <br />

    <Container>
      <h4 className="text1">El Instituto de Idiomas (IDI) es el centro de formación en idiomas y de acreditación del nivel de competencia lingüística de la comunidad universitaria de la Universidad de Sevilla (estudiantes, PDI y PAS) y de la población en general ya que, aunque somos un centro de carácter universitario, cualquier persona puede estudiar y examinarse con nosotros.
Se creó en 1927 con el fin de preparar candidatos para el título de Bachiller en Idiomas clásicos y modernos. En 1932 se reorganizó, abandonando el Bachillerato, y limitándose a la enseñanza de idiomas modernos como institución universitaria. Adscrito en 1945 al Secretariado de Publicaciones y Extensión Cultural de la Universidad, adquiere finalmente en 1972 una estructura similar a la actual. </h4>

    </Container>
    
    </>
  )
}

export default Inicio