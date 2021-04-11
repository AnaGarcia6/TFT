import React, { Component } from 'react';

class Contacto extends Component {
  handleChange = (e) =>{
    console.log(e);
  }
 render(){
   return(
      <form>
        <input name="nombre"onchange={this.handleChange}/>
        <input name="apellido"onchange={this.handleChange}/>
      </form>
   )
 }
 
}
export default Contacto;