import React, {useState} from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import '../css/EditApplication.css'
import {useLocation} from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom'
 function EditApplication() {
    const {state} = useLocation();

    const [name, setName] = useState(state.name);
    const [clientId, setClientId] = useState(state.client_id);
    const [clientSecret, setClientSecret] = useState(state.client_secret);
    const [url, setUrl] = useState(state.url);
    const [state1, setState] = useState(state.state);
    
    const nameHandler = (event) => {
        setName(event.target.value);
    };

    const clientIdHandler = (event) => {
        setClientId(event.target.value);
    };

    const clientSecretHandler = (event) => {
        setClientSecret(event.target.value);
    };

    const urlHandler = (event) => {
        setUrl(event.target.value);
    };

    const state1Handler = (event) => {
        setState(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const data = {
            name: name,
            client_id: clientId,
            client_secret: clientSecret,
            url: url,
            state: state1
        }
        console.log(data);
        axios.put(`https://umusic-b.herokuapp.com/application/${state._id}`, data)
        // .then(response => alert(response))
        // .catch(error => {
        //     alert(error.response.data)
        // });

        setName("");
        setClientId("");
        setClientSecret("");
        setUrl("");
        setState("");
        
    }

    return (
        <div>
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={9} style={{ 'marginTop': '-790px', 'marginLeft': '-11px' }}>
                    <div className="addnewapp" style={{ 'width': '950px' }} >
                        <h2 style={{ 'fontWeight': 'normal' }}>Edit Application</h2>

                        <hr></hr>
                    </div>
                    <Form style={{ 'width': '50%', 'marginLeft': '180px', 'marginTop': '30px' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the name</span></Form.Label>
                            <Form.Control type="name" onChange={nameHandler} value={name}/>

                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>ID<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the ID</span></Form.Label>
                            <Form.Control type="name" />
                        </Form.Group> */}

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Client ID<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the Client ID</span></Form.Label>
                            <Form.Control type="name" onChange={clientIdHandler} value={clientId}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Client Secret<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the Client Secret</span></Form.Label>
                            <Form.Control type="name" onChange={clientSecretHandler} value={clientSecret}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Redirect URLs<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the Redirect URLs</span></Form.Label>
                            <Form.Control type="name" onChange={urlHandler} value={url}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>State<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the State</span></Form.Label>
                            <Form.Control type="name" onChange={state1Handler} value={state1}/>
                        </Form.Group>
                    </Form>
                    <div className="add-btn">
                        <div className="add-btn1">
                            <Button variant="outline-secondary"><Link to="/applications">Cancel</Link></Button>
                        </div>
                        <div className="add-btn2">
                            
                        <Button variant="info" className='add-btn21' onClick={handleSubmit}><Link to="/applications">Save</Link></Button>
                        
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default EditApplication;