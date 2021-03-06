import React, {useState} from 'react';
import {Button, Modal, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {BrowserRouter as Router, Link} from "react-router-dom";
/* 

function Login(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
       
            <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </> 
        </div>
    );
}

export default Login; */
export default function Login(props){

        return (
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        );

        function App() {
        const [modalShow, setModalShow] = React.useState(false);

            return (
                <>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch vertically centered modal
                </Button>

                <Login
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                </>
            );
        
        }  
    React.DOM.render(<App />);
} 
