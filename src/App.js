
import {BrowserRouter as Router,  Switch, Route} from "react-router-dom";
import vela from  './assets/images/velaformada.png'
/*Importaciones para multipagina*/
import Contacto from './pages/Contact/Contacto';
import Articulos from './pages/Articulos/Tienda';
import Inicio from './pages/Inicio/Inicio';
import Inspo from './pages/Inspo/Inspo';
import Login from './pages/Login/Login';
import Carrito from './pages/Carrito/Carrito';
/*Importaciones componentes*/
import Menu from './components/Menu';



function App() {
  return (
    <div className="App container-fluid">
        <Router>     
          <div>
            <Menu/>
            {/*Rutas de la pag web*/}
            <Switch> 
              <Route path="/inicio"><Inicio /></Route>
              <Route path="/tienda"><Articulos /></Route>
              <Route path="/inspo"><Inspo /></Route>
              <Route path="/contacto"><Contacto /></Route>
              <Route path="/login"><Login /></Route>
              <Route path="/carrito"><Carrito /></Route>
            </Switch>
          </div>
        </Router>    

      <header className="App-header">
        {/* <img src={vela} className="App-logo" alt="logo" /> */}
      </header>
    </div>
 );
}
export default App;
