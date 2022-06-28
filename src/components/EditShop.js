import React, { useState} from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { FaShopify } from "react-icons/fa";
import {useLocation} from "react-router-dom"
import axios from 'axios';
import {Link} from 'react-router-dom'
import '../css/EditShop.css';
function EditShop() {
    const {state}=useLocation();

    const [name, setName] = useState(state.name);
    const [secretId,setSecretId]=useState(state.secret)
    const nameHandler = (event) => {
setName(event.target.value)
    };
    const secret_idHandler = (event) => {
setSecretId(event.target.value)
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data={
            name:name,
            secret:secretId
        }
        console.log(data)
        axios.put(`https://umusic-b.herokuapp.com/shopifystores/${state._id}`, data)
            // .then(response => alert(response))
            // .catch(error => {
            //     alert(error.response.data)
            // });
            setName("");
            setSecretId("");
    }

    return (
        <div>
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={9} style={{ 'marginTop': '-790px', 'marginLeft': '-11px' }}>
                    <div className="addnewapp" style={{ 'width': '950px' }} >
                        <h2 style={{ 'fontWeight': 'normal' }}><FaShopify color="#B6B6B6" fontSize="40px" style={{ 'marginRight': '20px', 'marginTop': '-8px' }} />Edit Shopify Stores</h2>

                        <hr></hr>
                    </div>
                    
                    <Form style={{ 'width': '50%', 'marginLeft': '180px', 'marginTop': '30px' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the name</span></Form.Label>
                            <Form.Control type="name" onChange={nameHandler} value={name} />

                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>ID<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the ID</span></Form.Label>
                            <Form.Control type="name" />
                        </Form.Group> */}

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Secret<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the Secret</span></Form.Label>
                            <Form.Control type="name" onChange={secret_idHandler} value={secretId}/>
                        </Form.Group>
                    </Form>
                    <div className="add-btn">
                        <div className="add-btn1">
                            <Button variant="outline-secondary"><Link to="/shopifystores/">Cancel</Link></Button>
                        </div>
                        <div className="add-btn2">
                        
                        <Button variant="info" className='add-btn21' onClick={handleSubmit}><Link to="/shopifystores/">Save</Link></Button>
                        
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default EditShop;