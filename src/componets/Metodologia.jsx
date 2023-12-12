import React from 'react'
import { Container } from 'react-bootstrap'
import met1 from '../assets/img/met1.png';
import met2 from '../assets/img/met2.png';
import met3 from '../assets/img/met3.jpg';

function Metodologia() {
  return (
    <><div>
        <br />
        <h1 className="titulo2">METODOLOGÍA DE ENSEÑANZA</h1>
        <h4 className="text1">El sistema de enseñanza “Work-Based Training" tiene como objetivo incorporar el quehacer laboral del ejecutivo en el diseño fundamental del curso, transforma el quehacer laboral a clases. 

Los cursos del área In Company toman las actividades y responsabilidades laborales del alumno como punto de partida para el desarrollo de las habilidades comunicativas en el idioma. </h4>
        <br />
        <Container>
        <img src={met3} width="850" height="450"  />

        </Container>
        <br />
        <h4 className="text1">Asimismo, el CIDUP brinda el sistema "Goal Achievement​", a fin de brindar un aprendizaje efectivo y rápido de la lengua a estudiar. El mencionado sistema se 
        caracteriza por brindar a los participantes logros concretos de aprendizaje en cada una de las sesiones de clase. El principal objetivo del sistema es que, en cada lección, el alumno 
        desarrolle habilidades comunicativas en el nuevo idioma y sea capaz de ponerlas en práctica de manera inmediata en situaciones propias de su contexto laboral.</h4>
        
        <br />
        <Container>
        <img src={met1} width="850" height="450"  />

        </Container>
        <br />
        <h4 className="text1">El sistema "Goal Achievement​" se caracteriza por poner como eje central del curso las labores de los participantes, promoviendo un aprendizaje efectivo 
        en cada una de las sesiones de clase, no teniendo el alumno que esperar a culminar el curso o un nivel para medir sus resultados.</h4>
        <br />
        <Container>
        <img src={met2} width="850" height="450"  />

        </Container>
    </div> 
    </>
    
  )
}

export default Metodologia