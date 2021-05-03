import React, { Component } from 'react'
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormGroup, Button, Row, Col } from 'react-bootstrap';
import Login from '../Login/Login'
import collage from './collage-2.png'
//Yup es la libreria para validar los campos de formik
//Formik es para validar los formularios

export default function Contacto () {


  const formSchema = Yup.object().shape({
    Email: Yup.string()
      .required("Campo Requerido")
      .email("Correo Electronico Invalido")
      .max(255, `Máximo 255 caracteres`)
      .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
    Name: Yup.string()
      .required("Campo Requerido")
      .matches(
        /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        "Debe contener entre 2 y 8 Letras"
      ),
    Surname: Yup.string() 
      .required("Campo Requerido")
      .matches(
        /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        "Debe contener entre 2 y 8 Letras"
      ),
    Password: Yup.string()
      .required("Campo Requerido")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Debe contener 8 catacteres, una mayúscula, una minúscula, un numero y un caracter especial"
      )
  });

  return (
    <>
    <section className="row col-9 mx-auto formContacto">

      <h3 className="col-12 text-center tittle_cami">CONTACTA CON NOSOTROS</h3>
      <div className="col-6 mt-4">
        <img src={collage} alt=""/>
      </div>
      
      <Formik
        initialValues={{
          Email: "",
          Name: "",
          Surname: "",
          Password: "",
          MobilePhone: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values) => console.log(values)}
      >
      <div className="col-6 mt-4">
          <Form>
          <FormGroup>
            <label className="label-contact" htmlFor='Name'>Nombre *</label>
            <Field
              className='form-control'
              name='Name'
              placeholder='Introduce tu nombre'
              type='text'
            />
            <ErrorMessage
              name='Name'
              component='div'
              className='field-error text-danger mensaje-error'
            />
          </FormGroup>
          <FormGroup>
            <label  className="label-contact" htmlFor='Surname'>Apellido *</label>
            <Field
              className='form-control'
              name='Surname'
              placeholder='Introduce tu apellido'
              type='text'
            />
            <ErrorMessage
              name='Surname'
              component='div'
              className='field-error text-danger mensaje-error'
            />
          </FormGroup>
          <FormGroup>
            <label className="label-contact" htmlFor='Email'>Correo Electronico * </label>
            <Field
              className='form-control'
              name='Email'
              placeholder='martinez@gmail.com'
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
                className='button-contact'
                type='submit'
              >
                Guardar
              </Button>
            </Col>
          </Row>
        </Form>
        </div>
        
      </Formik>
    </section>
    </>
  );
}
