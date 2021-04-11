import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {usestate, setModalShow} from 'react';
import {BrowserRouter as Router,  Switch, Route, Link} from "react-router-dom";


class Menu extends Component{

    render(){  //este metodo render el que se encarga de mostrar lavista del componenete y siempre tiene que llevar un return
        return(//la etiqueta React.Fragmentes para poder añadir por ejemplo 2 h2 , sino solo te deja poner 1 y se recomienda meterlo dentro de un DIV
            <div>
                <Navbar className="fixed-top mx-auto col-10" bg="" expand="lg">
                    <Navbar.Brand href="#home">CAMÏ</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home" >Inicio</Nav.Link>
                            <Link to={"/tienda"}>
                                <NavDropdown title="Tienda" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Velas</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Cerámica</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Hazlo a tu gusto!</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Todo</NavDropdown.Item>
                                </NavDropdown>
                            </Link>
                            <Nav.Link><Link to={"/contacto"}>Contacto</Link></Nav.Link>
                            <Nav.Link><Link to={"/Login"} onClick={(setModalShow)}>Login</Link></Nav.Link>
                            <Nav.Link href="#compra">
                            
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        
        
        );
    }

}
export default Menu;