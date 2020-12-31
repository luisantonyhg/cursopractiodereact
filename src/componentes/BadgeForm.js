
import React from 'react';
import {Link} from 'react-router-dom';

class BadgeForm extends React.Component{


    handleClick = e =>{
       
        console.log("Le diste click");
    }

    handleSubmit = e =>{
        e.preventDefault();
        console.log("Estamos en el submit");
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <h1 className="text-center">Registrate</h1>


                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="nombre"
                        value={this.props.formValues.nombre}></input>
                    </div>
                    <div className="form-group">
                        <label>Apellido</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="apellido"
                        value={this.props.formValues.apellido}></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}></input>
                    </div>
                    <div className="form-group">
                        <label>Direccion</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="direccion" value={this.props.formValues.direccion}></input>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}></input>
                    </div>
                    <div className="row">
                        
                    <div className="col-8">
                    <button  onClick={this.handleClick} className="btn btn-primary">Guardar</button>
                    </div>
                    <div className="col-4">
                    <Link to="/" className="btn btn-primary">
                            Regresar
                        </Link>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default BadgeForm;