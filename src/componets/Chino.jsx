import React from 'react'
import { Container } from 'react-bootstrap'
import chin1 from '../assets/img/chin1.jpg';

export default function Chino() {
  return (
    <> 
    <div>
        <br />
    <h1 className="titulo2">Aprende chino</h1>
    <br />
    <h4 className="text1">¿Sabías que el chino es uno de los idiomas más hablados del mundo?
     Ya sea que estés planeando visitar China para hacer turismo o vayas a trabajar allí en un
      proyecto de 6 meses, aprender los conceptos básicos del idioma será extremadamente útil 
      en tu operación diaria. Obtén una introducción al idioma chino con cursos en línea de las 
      mejores universidades e instituciones. Los cursos en línea de edX incluyen videos extensos
       y otras herramientas para ayudarte a aprender habilidades de pronunciación además de 
       vocabulario y gramática básicos. Aprende los tonos, los caracteres y la estructura básica
        del idioma chino mandarín y practica la pronunciación básica y las habilidades de
         comunicación, todo desde la comodidad de tu computadora en cualquier parte del mundo.</h4>
        </div>
        <br />

        <Container>
        <img src={chin1} width="550" height="750"  />

        </Container>
    </>
    
  )
}
