import React, {Component} from 'react';

class MiComponente extends Component{

    //este metodo render el que se encarga de mostrar lavista del componenete y siempre tiene que llevar un return

    render(){
        return(//la etiqueta React.Fragmentes para poder añadir por ejemplo 2 h2 , sino solo te deja poner 1 y se recomienda meterlo dentro de un DIV
            <div className ="mi-componente">
                <React.Fragment>
                 <h1>Holasoy el prih.mer MiComponente </h1>  
                 <h2>estoy probanso otraetiqueta</h2>
                </React.Fragment>
            </div>
            

        );
    }

}

export default MiComponente;