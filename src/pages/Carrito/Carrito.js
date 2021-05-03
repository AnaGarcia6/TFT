import React from 'react';
import { Button, Table } from 'react-bootstrap';

function Carrito() {
  return (
      <section className="carrito col-10 mx-auto row">

        <div className="col-8">
          <Table hover>
              <thead>
                <p className="tittle_cami">CARRITO</p>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
          </Table>
        </div>
        <div className="col-4 cart_total"> 
          <Table hover>
              <thead>
                <p className="tittle_cami">TOTAL CARRITO</p>
              </thead>
              <tbody>
                <tr>
                  <th>Subtotal</th>
                  <td>
                    <bdi>12,99</bdi>
                    <span>€</span>
                  </td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>
                    <bdi>12,99</bdi>
                    <span>€</span>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">Larry the Bird</td>
                </tr>
              </tbody>
          </Table>
          <Button className=" button_carrito btn btn-secondary">
            Finalizar compra
          </Button>
        </div>
   
      
      </section>
  );
}
      export default Carrito;
     