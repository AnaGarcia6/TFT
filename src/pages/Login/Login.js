import React, {Component} from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormGroup, Button, Row, Col } from 'react-bootstrap';
import Modal from 'react-modal';
import close from './img/cancel.svg'

//Yup es la libreria para validar los campos de formik
//Formik es para validar los formularios

const formSchema = Yup.object().shape({
  Email: Yup.string()
    .required("Campo Requerido")
    .email("Correo Electronico Invalido")
    .max(255, `Máximo 255 caracteres`)
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
  Password: Yup.string()
    .required("Campo Requerido")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Debe contener 8 catacteres, una mayúscula, una minúscula, un numero y un caracter especial"
    )
});


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Login extends React.Component {

  state = {
    modalIsOpen: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  

  render() {
    const { open } = this.state;
    return (
      <div>
        <br/><br/>
         <a onClick={this.openModal}>Open modal</a>
        {/* <ReactModal open={open} styles=" popupLogin"> */}
        <Modal className=" popupLogin" isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} ariaHideApp={false}>
          <a onClick={this.closeModal}><img src={close} width="20" alt="20"/></a>
          <div className="mx-auto">
              <h3 className="text-center col-12 tittle_cami">Welcome to CAMÏ</h3>
              <Formik
                initialValues={{
                  Email: "",
                  Password: "",
                }}
                validationSchema={formSchema}
                onSubmit={(values) => console.log(values)}
              >
                <div className="col-12 mx-auto">
                  <Form>
                  <FormGroup>
                    <label className="label-contact" htmlFor='Email'>Correo Electronico * </label>
                    <Field
                      className='form-control'
                      name='Email'
                      placeholder='login@gmail.com'
                      type='email'
                    />
                    <ErrorMessage
                      name='Email'
                      component='div'
                      className='field-error text-danger mensaje-error'
                    />
                  </FormGroup>
                  <FormGroup>
                    <label className="label-contact" htmlFor='Password'>Contraseña *</label>
                    <Field
                      className='form-control'
                      name='Password'
                      placeholder=''
                      type='password'
                    />
                    <ErrorMessage
                      name='Password'
                      component='div'
                      className='field-error text-danger mensaje-error'
                    />
                  </FormGroup>
                  <Row>
                    <Col lg={12} md={12}>
                      <Button 
                        color='primary'
                        className='button-login'
                        type='submit'
                      >Guardar
                      </Button>
                    </Col>
                  </Row>
                </Form>
                </div>
              </Formik>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Login;