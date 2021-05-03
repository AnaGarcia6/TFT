import React, {Component} from 'react';
import {CardColumns, Card} from 'react-bootstrap';

class Galeria extends Component{

    render(){  //este metodo render el que se encarga de mostrar lavista del componenete y siempre tiene que llevar un return
        return(//la etiqueta React.Fragmentes para poder añadir por ejemplo 2 h2 , sino solo te deja poner 1 y se recomienda meterlo dentro de un DIV
        
            //Gallery Modal
            <section  id="fotos">
                <div class="contenedorana row mx-auto">                 
                    <div class="elemento">
                        <img src="" width="100" height="300" alt="recibidor casa"/>
                        <img src=""  width="100" height="150" alt="salon"/>
                    </div>
                    <div class="elemento">
                        <img src="img/4.jpg" width="100" height="150" alt="salon"/>
                        <img src="img/3.jpg" width="100" height="300" alt="comedor"/>
                    </div>
                    <div class="elemento">
                        <img src="img/15.jpg" width="100" height="300" alt="habitacion"/>
                        <img src="img/13.jpg" width="100" height="150" alt="hhabitacion matrimonio"/>
                    </div>
                    <div class="elemento">
                        <img src="img/15.jpg" width="100" height="300" alt="habitacion"/>
                        <img src="img/13.jpg" width="100" height="150" alt="hhabitacion matrimonio"/>
                    </div>
                    
                    
                </div>
            </section>
        
        )
    }      
}

export default Galeria;