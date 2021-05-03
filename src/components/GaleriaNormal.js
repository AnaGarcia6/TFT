import React, {Component} from 'react';
import {CardColumns, Card} from 'react-bootstrap';
import img from '../assets/images/vela.png'

class Galeria extends Component{

    render(){  //este metodo render el que se encarga de mostrar lavista del componenete y siempre tiene que llevar un return
        return(//la etiqueta Reac
            <section className="row">
                <div className="col-3">
                    <img src={img} alt=""/>
                </div>
            </section>
        )
    }
}