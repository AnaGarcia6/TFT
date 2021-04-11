import './assets/css/App.css';
import {BrowserRouter as Router,  Switch, Route, Link} from "react-router-dom";
import vela from  './assets/images/velaformada.png'
/*Importaciones para multipagina*/
import Contacto from './pages/Contact/Contacto';
import Articulos from './pages/Articulos/Tienda';
import Inicio from './pages/Inicio/Inicio';
import Login from './pages/Login/Login';
import Carrito from './pages/Carrito/Carrito';
/*Importaciones componentes*/
import Menu from './components/Menu';
/*Importaciones para el menu*/
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import carrito from './assets/images/carrito.svg';
/*Importaciones pagina contacto */ 

function App() {
  return (
    <div className="App">
 
        <Router>
          <div>
            <Menu/>
            {/*Rutas de la pag web*/}
              <Switch> 
                <Route path={'/inicio'}component={Inicio}></Route>
                <Route path="/tienda"><Articulos /></Route>
                <Route path="/contacto"><Contacto /></Route>
                <Route path="/login"><Login /></Route>
                <Route path="/carrito"><Carrito /></Route>
              </Switch>
          </div>
        </Router>    

      <header className="App-header">
        <img src={vela} className="App-logo" alt="logo" />
      </header>
    </div>
 );
}
export default App;
