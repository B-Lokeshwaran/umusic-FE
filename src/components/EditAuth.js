import React,{ useState} from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { FaShopify } from "react-icons/fa";
import axios from 'axios';
import {useLocation} from 'react-router-dom'
import {Link} from 'react-router-dom'
export default function EditAuth() {

    const {state} = useLocation();
    console.log(state);
    const [name, setName] = useState(state.name);
    const [providerId, setProviderId] = useState(state.provider_id);
    const [clientId, setClientId] = useState(state.client_id);
    const [clientSecret, setClientSecret] = useState(state.client_secret);
    const [applicationId, setApplicationId] = useState(state.application_id);
    const [isGlobal, setIsGlobal] = useState(state.global);
    const [state1, setState1] = useState(state.state);

    const nameHandler = (event) => {
        setName(event.target.value)
    };

    const providerIdHandler = (event) => {
        setProviderId(event.target.value)
    };

    const clientIdHandler = (event) => {
        setClientId(event.target.value)
    };

    const clientSecretHandler = (event) => {
        setClientSecret(event.target.value)
    };

    const applicationIdHandler = (event) => {
        setApplicationId(event.target.value)
    };

    const isGlobalHandler = (event) => {
        setIsGlobal(event.target.value)
    };

    const state1Handler = (event) => {
        setState1(event.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: name,
            provider_id: providerId,
            client_id: clientId,
            client_secret: clientSecret,
            application_id: applicationId,
            global: isGlobal,
            state: state1
        }
        console.log(data)
        axios.put(`https://umusic-b.herokuapp.com/authenticationproviders/${state._id}`, data)
            // .then(response => alert(response))
            // .catch(error => {
            //     alert(error.response.data)
            // });
            setName("");
            setProviderId("");
            setClientId("");
            setClientSecret("");
            setApplicationId("");
            setIsGlobal("");
            setState1("");
    }
    return (
        <div className="addauthe">
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={9} style={{ 'marginTop': '-790px', 'marginLeft': '-11px' }}>
                    <div className="addnewapp" style={{ 'width': '950px' }} >
                        <h2 style={{ 'fontWeight': 'normal' }}><FaShopify color="#B6B6B6" fontSize="40px" style={{ 'marginRight': '20px', 'marginTop': '-8px' }} />Edit Authentication Providers</h2>

                        <hr></hr>
                    </div>
                    <Form style={{ 'width': '50%', 'marginLeft': '180px', 'marginTop': '5px' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the name</span></Form.Label>
                            <Form.Control type="name" onChange={nameHandler} value={name}/>

                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>ID<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the ID</span></Form.Label>
                            <Form.Control type="name" />
                        </Form.Group> */}

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Provider ID<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the Client ID</span></Form.Label>
                            <Form.Control type="name" onChange={providerIdHandler} value={providerId}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Client ID<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the Client Secret</span></Form.Label>
                            <Form.Control type="name" onChange={clientIdHandler} value={clientId}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Client Secret<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the Redirect URLs</span></Form.Label>
                            <Form.Control type="name" onChange={clientSecretHandler} value={clientSecret}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Application IDs<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the Application IDs</span></Form.Label>
                            <Form.Control type="name" onChange={applicationIdHandler} value={applicationId}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Is Global<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the State</span></Form.Label>

                        </Form.Group>
                        <Form style={{'display':'flex', 'marginTop':'-25px'}}>
                            {['radio'].map((type) => (
                                <div className="mb-3" style={{'display':'flex', 'marginTop':'10px'}}>
                                    <Form.Check
                                        type={type}
                                        id={`default-${type}`}
                                        label={`True`}
                                        value={true}
                                        onChange={isGlobalHandler}
                                    />

                                    <Form.Check
                                        active
                                        type={type}
                                        label={`False`}
                                        value={false}
                                        onChange={isGlobalHandler}
                                        id={`disabled-default-${type}`}
                                    style={{'marginLeft':'20px'}}/>
                                </div>
                            ))}
                        </Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword" >
                            <Form.Label>State<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the State</span></Form.Label>
                            <Form.Control type="name" onChange={state1Handler} value={state1} />
                        </Form.Group>
                    </Form>
                    <div className="add-btn">
                        <div className="add-btn1">
                            <Button variant="outline-secondary"><Link to="/authenticationproviders">Cancel</Link></Button>
                        </div>
                        <div className="add-btn2">
                        <Button variant="info" className='add-btn21' type="submit" onClick={handleSubmit}><Link to="/authenticationproviders">Save</Link></Button>
                        </div>

                    </div>                
                </Col>
            </Row>
        </div>
    )
}
