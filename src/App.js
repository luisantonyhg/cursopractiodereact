import logo from './logo.svg';
// --------------------------------------------------------------------------------
// AQUI ESTAMOS IMPORTANDO NUESTRO ESTILOS APP.CSS
// --------------------------------------------------------------------------------
import './App.css';
// --------------------------------------------------------------------------------
// CUANDO CREAMOS UN COMPONENTE CLASE TENEMOS QUE IMPORTAR REACT
// --------------------------------------------------------------------------------
import React from 'react';

// --------------------------------------------------------------------------------
// LE PASAMOS UN PARAMETRO AL COMPONENTE  PARA QUE SEA DINAMICO EL PROPS ES 
//                  IMPORTANTE EN PARAMETRO
// --------------------------------------------------------------------------------

function HolaMundo(props){
  return(
    <div>
      <h1>Hola {props.nombre} y {props.nombre2}</h1>
  <h2>Google Developer Expert {props.chenchomaster}</h2>
    </div>
  );
}

const HolaMundo2 = (props)=> <div><h3>Soy HolaMundo2 y llamo a {props.chenchito}</h3><HolaMundo /></div>



// --------------------------------------------------------------------------------
// CUANDO HACEMOS USO DE UN CLASE TENEMOS QUE IMPORTAR REACT
// -----------------------------------------------------------------------------
class HolaMundo3  extends React.Component {
  render(props){
    return(
    <div><h3>Soy HolaMundo3 {this.props.jefefelipes}</h3></div>
    )
  }
};

function Suma(props){
  return(
    <div>
      la Suma de {props.numero1} y {props.numero2} es {parseInt(props.numero1) * parseInt(props.numero2)}
    </div>
  );
}

function TablaPar(props){
  const elementos = []
  for (var i =1; i <=12; i++){
    if(i%2 == 0){
    elementos.push(<tr className="filaPar"><td>{i} * {props.numero} = {i * parseInt(props.numero)}</td></tr>)
    }
  }
  return (
    <div>
      <table>
  <tr className="cabecera"><td>TABLA DE MULTIPLICAR PAR DEL NUMERO {props.numero}</td></tr>
  {elementos}
      </table>
    </div>
  );
}

// --------------------------------------------------------------------------------
// CUANDO HACEMOS USO DE UN CLASE TENEMOS QUE IMPORTAR REACT
// -----------------------------------------------------------------------------

class Tabla extends React.Component {
state = {
  show: true
}
Ocultar = () => {
  this.setState({show: false})
}
Mostrar = () => {
  this.setState({show: true})
}

render(props){
  const elementos = []
  for(var i = 1; i <=12; i++){
    if(i%2 ==0){
  elementos.push(<tr className="filaPar"><td>{i} * {this.props.numero} = {i * parseInt(this.props.numero)}</td></tr>)
  }else{
  elementos.push(<tr><td>{i}* {this.props.numero} = {i * parseInt(this.props.numero)}</td></tr>)
  }
}
if(this.state.show){
  return(
    <div>
      <table>
  <tr className="cabecera"><td>Tabla de MULTIPLICAR par del numero {this.props.numero}</td></tr>
  {elementos}
      </table>
      <button onClick={this.Ocultar}>Ocultar Tabla</button>
    </div>
  );

}else{
  return(
    <div>
      <h3>
        TABLA DESABILITADA NO SE PUEDE ACCEDER A SU CONTENIDO
       </h3>
       <button onClick={this.Mostrar}>Mostrar Tabla</button>
    </div>
  );
}
} 
};

// --------------------------------------------------------------------------------
// CUANDO HACEMOS USO DE UN CLASE TENEMOS QUE IMPORTAR REACT
// --------------------------------------------------------------------------------

function App() {
  return (
    <div className="App">
      <h1 >BIENVENIDOS </h1> 
    <HolaMundo nombre="Luis Antony"/>
    <HolaMundo nombre="React" nombre2="VSCode" chenchomaster="tony" />
    <HolaMundo nombre="Angular" />
    <HolaMundo nombre="React Native" nombre2="Chencho" chenchomaster="chencho" />
    <HolaMundo2 nombre="chencho pruebita" chenchito="anglas123" />
    <HolaMundo3 jefefelipes="valor"/>
    <Suma numero1="2" numero2="3" />
    <TablaPar numero="5" />
    <br></br>
    <br></br>
    <Tabla numero="8" />
    
    </div>
  );
}


// -----------------------------------------------------------------------------------------
// AQUI ESTAMOS EXPORTANDO LA FUNCION APP AL INDEX.JS PARA QUE PUEDA IMPRIMIR EN LA PANTALLA 
//                         DE NUESTRO NAVEGADOR 
// -----------------------------------------------------------------------------------------
export default App;
