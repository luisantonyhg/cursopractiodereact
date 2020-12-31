import React from 'react';


import 'bootstrap/dist/css/bootstrap.css';

import Nombre from '../componentes/Nombre';
import BadgeForm from '../componentes/BadgeForm';

import cabeza from '../images/AliadoPlatzi.svg';



class PaginaWeb extends React.Component{
    state = {form: {
        nombre: '',
        apellido: '',
        email: '',
        direccion: '',
        twitter: '',
      },
    };

      handleChange = e => {
        this.setState({
          form: {
            ...this.state.form,
          [e.target.name]: e.target.value,
          },
        });
      }

    render(){
        return(
        
    <React.Fragment>
    
      <div className="">
        <img className="img-fluid" src={cabeza} alt="logo" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
           <Nombre nombre={this.state.form.nombre}
                apellido={this.state.form.apellido}
                email={this.state.form.email}
                direccion={this.state.form.direccion}
                twitter={this.state.form.twitter} />
          </div>
          <div className="col-6">
           <BadgeForm  onChange={this.handleChange}
           formValues={this.state.form} />
          </div>
        </div>
      </div>
    </React.Fragment>
        );
    }
}

export default PaginaWeb;

