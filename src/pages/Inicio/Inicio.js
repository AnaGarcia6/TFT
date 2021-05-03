import { Component } from "react";
import {Carousel, CardColumns, Card, Jumbotron, Container} from 'react-bootstrap';
import imagen1 from './img/loza1.jpg';
import imagen2 from './img/loza3.jpg';
import imagen3 from './img/loza4.jpg';
import a from './img/a.jfif';
import b from './img/b.jfif';
import c from './img/c.jfif';
import d from './img/d.png';
import loza from './img/vela-concha.png';
import heart from './img/heart.png';

class Inicio extends Component{

  render(){  //este metodo render el que se encarga de mostrar lavista del componenete y siempre tiene que llevar un return
      return(
        <section className="">
          <Carousel className="carrusel">
              <Carousel.Item>
                <img className="d-block w-100" src={imagen1} alt="First slide" />
                <Carousel.Caption>
                  <h3 className="title_carrusel">First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100" src={imagen2} alt="Second slide" />

                <Carousel.Caption>
                  <h3  className="title_carrusel">Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={imagen3} alt="Third slide" />

                <Carousel.Caption>
                  <h3 className="title_carrusel">Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            {/* Gallery Modal */}
          <section  id="fotos">
            <div class="contenedorana row mx-auto">
              <div class="elemento col-3">
                  <img src={d} max-width="100" height="200" alt="Fotos clientes"/>
                  <img src={b} max-width="100" height="150" alt="Fotos clientes"/>
              </div>
              <div class="elemento col-3">
                  <img src={a} max-width="100" height="150" alt="Fotos clientes"/>
                  <img src={b} max-width="100" height="200" alt="Fotos clientes"/>
              </div>
              <div class="elemento col-3">
                  <img src={d} max-width="100" height="150" alt="Fotos clientes"/>
                  <img src={c} max-width="100" height="200" alt="Fotos clientes"/>   
              </div>
              <div class="elemento col-3">
                  <img src={c} max-width="100" height="200" alt="Fotos clientes"/>
                  <img src={d} max-width="100" height="150" alt="Fotos clientes"/>
              </div> 
            </div>
          </section>
        
            {/* Más vendidos*/}
            <Jumbotron fluid className="mt-5 text-center">
              <Container>
                <p className="tittle_cami">
                  Top Ventas
                </p>
              </Container>
            </Jumbotron>
          <section>
            <CardColumns>
              <a href="#">
                <Card className="text-center">
                    <Card.Body>
                        <span className="badge new">Top venta</span>
                        <a href=""><span className="badge_heart"><img src={heart} width="10" alt="10"/></span></a>
                      <Card.Img className="img_product" src={loza}/>
                      <Card.Footer className="text-center text-dark">
                      <Card.Text className="small text-dark font-weight-light">
                          Descripcion del articulo 
                      </Card.Text>
                        <small>51.99€</small>
                      </Card.Footer>
                    </Card.Body>
                </Card>
              </a>
              <a href="#">
                <Card className="text-center">
                    <Card.Body>
                      <span className="badge new">Top venta</span>
                      <a href=""><span className="badge_heart"><img src={heart} width="10" alt="10"/></span></a>
                    <Card.Img className="img_product" src={loza}/>
                    <Card.Footer className="text-center text-dark">
                    <Card.Text className="small text-dark font-weight-light">
                        Descripcion del articulo 
                    </Card.Text>
                      <small>51.99€</small>
                    </Card.Footer>
                    </Card.Body>
                </Card>  
              </a>   
              <a href="#">
                <Card className="text-center">
                    <Card.Body>
                      <span className="badge new">Top venta</span>
                      <a href=""><span className="badge_heart"><img src={heart} width="10" alt="10"/></span></a>
                    <Card.Img className="img_product" src={loza}/>
                    <Card.Footer className="text-center text-dark">
                    <Card.Text className="small text-dark font-weight-light">
                        Descripcion del articulo 
                    </Card.Text>
                      <small>51.99€</small>
                    </Card.Footer>
                    </Card.Body>
                </Card>
              </a>
         {/*      <Card text="warning" className="text-center p-1">
                  <blockquote className="blockquote mb-1 card-body">
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                      erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                      <small className="text-muted">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                      </small>
                  </footer>
                  </blockquote>
              </Card> */}
              <a href="#">
                <Card className="text-center">
                    <Card.Body>
                      <span className="badge new">Top venta</span>
                      <a href=""><span className="badge_heart"><img src={heart} width="10" alt="10"/></span></a>
                    <Card.Img className="img_product" src={loza}/>
                    <Card.Footer className="text-center text-dark">
                    <Card.Text className="small text-dark font-weight-light">
                        Descripcion del articulo 
                    </Card.Text>
                      <small>51.99€</small>
                    </Card.Footer>
                    </Card.Body>
                </Card>
              </a>
              <a href="#">
                <Card className="text-center">
                    <Card.Body>
                      <span className="badge new">Top venta</span>
                      <a href=""><span className="badge_heart"><img src={heart} width="10" alt="10"/></span></a>
                    <Card.Img className="img_product" src={loza}/>
                    <Card.Footer className="text-center text-dark">
                    <Card.Text className="small text-dark font-weight-light">
                        Descripcion del articulo 
                    </Card.Text>
                      <small>51.99€</small>
                    </Card.Footer>
                    </Card.Body>
                </Card>
              </a>
              <a href="#">
                <Card className="text-center">
                    <Card.Body>
                      <span className="badge new">Top venta</span>
                      <a href=""><span className="badge_heart"><img src={heart} width="10" alt="10"/></span></a>
                    <Card.Img className="img_product"src={loza}/>
                    <Card.Footer className="text-center text-dark">
                    <Card.Text className="small text-dark font-weight-light">
                        Descripcion del articulo 
                    </Card.Text>
                      <small>51.99€</small>
                    </Card.Footer>
                    </Card.Body>
                </Card>
              </a>
            </CardColumns>
          </section>
        </section>
      )
  }
}
export default Inicio;