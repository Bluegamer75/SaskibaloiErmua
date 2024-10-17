import React from 'react';
import Img2 from '../../../img/ermua-saski-eskola.jpeg';
import Incripciones from '../../../img/inscripciones2024.jpeg';

{/*Cabezera de la pagina web*/ }
const Header = () => {
  return (
    <div>
      <img src={Img2} className="header" />
      <div className="contacto">
        <h1 className="titulo-contacto">Inscripcion abierta</h1>
        <p>Aqui tienes toda la informacion que necesitas</p>
        <button type="button" className="btn btn-primary botones" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Formulario de Inscripcion
        </button>
      </div>

      {/* Modal de formulario de inscripcion*/}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Formulario de Inscripcion</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Para inscribirte al club de baloncesto de Saskiermua deberas de enviar tu solicitud a traves del siguiente <a href='https://surveyheart.com/form/6680619679a05076b30bdde9'>formulario</a> <br />
              <img src={Incripciones} className='Inscripciones'/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
