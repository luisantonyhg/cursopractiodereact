import React from 'react';
import './styles/Badge.css';
import Logos from '../images/luis.png';


class Nombre extends React.Component{
    render(){
        return(
            <div className="badge">
            <div className="badge_header">
                
            </div>
            
            <div className="badge_section-name">
            <img className="badge_avatar" src={Logos} alt="Logo de Cabecera" />
            <h1>
                {this.props.nombre}<br /> {this.props.apellido} <br /> 
            </h1>

            </div>
            <div className="badge_section-info">
                <h5>DEVELOPER JUNIOR</h5>
                <h6>{this.props.direccion}</h6>
                <div>@{this.props.twitter}</div>
            </div>
            <div className="badge_footer">
                #{this.props.email}
            </div>



        </div>
        );
       
    }
}

export default Nombre;