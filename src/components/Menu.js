import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {setModalShow} from 'react';
import carro from '../assets/images/shopping-cart.png';
import Login from '../pages/Login/Login';

//<NavLink id="RouterNavLink" style={None} to="/contact">anywords</NavLink>

class Menu extends Component{
    state = {
        navBackground: "transparent", 
        navColor: "white"
      };
    
      componentDidMount() {
        document.addEventListener("scroll", () => {
          const backgroundcolor = window.scrollY < 70 ? "transparent" : "white";
          const color = window.scrollY < 70 ? "white" : "black";
    
          this.setState({ navBackground: backgroundcolor });
          this.setState({ navColor: color });
        });
      }
    render(){  //este metodo render el que se encarga de mostrar lavista del componenete y siempre tiene que llevar un return
        return(//la etiqueta React.Fragmentes para poder añadir por ejemplo 2 h2 , sino solo te deja poner 1 y se recomienda meterlo dentro de un DIV
            <div>
            
                <Navbar style={{ backgroundColor: `${this.state.navBackground}`, color: `${this.state.navColor}`}} className="fixed-top mx-auto col-12 active" bg="" expand="lg" id="mainNav"> 
                    <Navbar.Brand href="#home">CAMÏ</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link><Link to={"/inicio"}>Inicio</Link></Nav.Link>
                            <Link to={"/tienda"}>
                                <NavDropdown title="Tienda" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Velas</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Cerámica</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Hazlo a tu gusto!</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Todo</NavDropdown.Item>
                                </NavDropdown>
                            </Link>
                            <Nav.Link><Link to={"/inspo"}>Inspiración</Link></Nav.Link>
                            <Nav.Link><Link to={"/contacto"}>Contacto</Link></Nav.Link>
                         
                            <Nav.Link><Link to={"/Login"} onClick={this.openModal}>Login</Link></Nav.Link>
                            <Nav.Link><Link to={"/Carrito"}>
                                <a>
                                    <img src={carro} width="20" height="20"/>
                                </a>
                            </Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        
        
        );
    }

}
export default Menu;