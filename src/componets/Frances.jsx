import React from 'react'
import { Container } from 'react-bootstrap'
import fran1 from '../assets/img/fran1.png';
import fran2 from '../assets/img/fran2.jpg';

function Frances() {
  return (
    <>
    <div>
      <br />
    <h1 className="titulo2">FRANCÉS</h1>
    <br />
    <h4 className="text1">Recopilatorio de cursos gratuitos de francés de todos los niveles de estudio (desde básico A1 hasta avanzado C1). En ellos aprenderás gramática, vocabulario, expresiones en francés desde un nivel inicial hasta uno más experto.

Aprende francés de forma gratuita a través de diferentes metodologías como vídeos, gráficos o podcats, el alumno podrá formarte con todos los conceptos necesarios para llegar a hablar este idioma con total fluidez.

Los cursos de francés más solicitados son el curso de francés de nivel intermedio para estudiar en Francia y el curso de francés avanzado gratuito para trabajar en Francia, ambos de la École Polytechnique.

Casi todos los cursos son obtenidos de las Universidades que lo ofrecen de forma libre, proporcionando el material y los recursos necesarios para el mismo, así como la opción de obtener un certificado una vez finalizado.

Para obtener el certificado debes de abonar una tasa monetaria a la Universidad o Institución que imparte el curso. Dicha tasa oscila entre diversos precios, dependiendo de quién imparta el curso o la duración del mismo.

Puedes realizar el curso sin necesidad de obtener el certificado, no es obligatoria la compra del mismo.</h4>
      </div>
      <br />

      <Container>
        <img src={fran1} width="850" height="450"  />

        </Container>
        <br />

        <Container>
        <img src={fran2} width="850" height="450"  />

        </Container>


    </>
    
  )
}

export default Frances