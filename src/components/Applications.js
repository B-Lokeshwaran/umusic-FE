import React, { useState, useEffect } from 'react'
import { Row, Col, Container, Table, Button, FormControl } from 'react-bootstrap'
import Sidebar from './Sidebar'
import '../css/Applications.css'
import { Nav } from 'react-bootstrap'
import { MDBCol, MDBIcon } from "mdbreact";
import { BsSearch } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import axios from "axios"
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading';

function Applications() {
    const [post, setPost] = useState({count: "",value: ""})
    const [isLoading, setIsLoading] = useState(false)
    const [pagination, setPagination] = useState({ limit: 6, skip: 0  })
    const [data, setData] = useState({ name: "" });
    const [number, setNumber] = useState(1)
    const [buttonDis, setButtonDis] = useState(false)
    const [nextButtonDis, setNextButtonDis] = useState(true)
    const handleChange = async (e) => {
        setData({ ...data, name: e.target.value });

    }
    const clearData = () => {
        setData({ name: "" })
    }

    useEffect(() => {
        const value = async () => {
            const response = await axios.post("https://umusic-b.herokuapp.com/application/getbyname", data)
            console.log(response.data);
            console.log(post.count)
            setPost((previous) => ({
                ...previous,value:response.data
            }))
        }
        value()
    }, [data])
    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://umusic-b.herokuapp.com/application/${pagination.limit}/${pagination.skip}`)
                .then(res => {
                    console.log(res.data)
                    setPost({count:res.data.count, value:res.data.value})
                    setIsLoading(true)
                })
                .catch(err => {
                    console.log(err)
                });
        }, 800);
        if(pagination.skip / 6 ===0){
            setButtonDis(true)
        }else{
            setButtonDis(false)
        }

        if(((pagination.skip /6)+1)===Math.ceil((post.count/6))){
            setNextButtonDis(true)
        }
        else{
            setNextButtonDis(false)
        }
    }, [pagination]);


    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(post.count / pagination.limit); i++) {
        pageNumber.push(i);
    }
    if(post.value.length > 6) {
        const sea = post.value.slice(0, 6)
        setPost((previous) => ({
            ...previous, value: sea
        }))
    }

    const ChangePage = (pageNumber) => {
        setNumber(pageNumber);
        setPagination((previous) => ({
            ...previous, skip: pagination.limit * (pageNumber - 1)
        }))

    };

    const onPreviousPageHandler = () => {
        console.log(pagination.skip / 6)
        setPagination((previous) => ({
            ...previous, skip: pagination.limit * ((pagination.skip / 6) - 1)
        }))
    }

    const onNextPageHandler = () => {
        console.log(pagination.skip / 6)
        setPagination((previous) => ({
            ...previous, skip: pagination.limit * ((pagination.skip / 6) + 1)
        }))
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={3}>
                    </Col>
                    <Col sm={9} style={{ 'marginTop': '-800px', 'marginLeft': '-50px' }}>
                        <div className="applications" style={{ 'display': 'flex', 'marginTop': '10px' }}>
                        <img src={require('/Users/lokeshwaranbasha/Desktop/umusic FE/src/Assets/Group 203.png')} style={{height:'35px','marginRight': '10px'}}/>
                            <h2 style={{ 'fontWeight': 'normal' }}>Applications <Button variant="info" className='appbtn'><Link to='/applications/AddApp'>Add New</Link></Button></h2>
                            <div className="app-hd" style={{ 'marginLeft': '354px' }}>
                                <MDBCol md="12">
                                    <div className="input-group md-form form-sm form-1 pl-0">

                                        <input
                                            className="form-control my-0 py-1"
                                            type="text"
                                            placeholder="Search"
                                            aria-label="Search"
                                            onChange={handleChange}
                                            name="name"
                                            value={data.name}
                                        />
                                        {/* <div className="input-group-prepend">
                                            <span className="input-group-text" >
                                                <GrFormClose fontSize="23px"  onClick={clearData}/>
                                            </span>
                                        </div> */}
                                        <div className="input-group-prepend">

                                         <span className="input-group-text purple lighten-3" id="basic-text1" style={{ 'color': 'white', 'background-color': 'black', 'cursor': 'pointer' }} >

                                           <BsSearch fontSize="23px" />

                                             </span>

                                           </div>
                                    </div>
                                </MDBCol>
                            </div>



                        </div>
                        <hr></hr>
                        <Table responsive="lg" style={{ 'marginTop': '25px', 'width': '970px'}}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>ID</th>
                                    <th>Client ID</th>
                                    <th>Client Secret</th>
                                    <th>Redirect URLs</th>
                                    <th>State</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {!isLoading ? (
                                <div className="loader" style={{ 'marginLeft': '390px', 'marginTop': '130px' }}>
                                    <ReactLoading type={"spin"} color={"black"} width={'150%'} />

                                </div>
                            ) : (
                                post.value.length === 0? (<h7>No Data Found</h7>) : (
                                post.value.map((data) => {
                                return (
                                    <tbody>

                                        <tr>

                                            <td><Nav.Link as={Link} to={`/applications/viewall/${data._id}`} state={data}>{data.name}</Nav.Link></td>
                                            <td>
                                                <Nav.Link as={Link} to={`/applications/viewall/${data._id}`} state={data}>
                                                    {data._id}
                                                    </Nav.Link>
                                                    </td>
                                            <td>
                                            <Nav.Link as={Link} to={`/applications/viewall/${data._id}`} state={data}>
                                                {data.client_id}
                                                </Nav.Link>
                                                </td>
                                            <td>
                                            <Nav.Link as={Link} to={`/applications/viewall/${data._id}`} state={data}>
                                                {data.client_secret}
                                                </Nav.Link>
                                                </td>
                                            <td> 
                                                <Nav.Link as={Link} to={`/applications/viewall/${data._id}`} state={data}>
                                                {data.url}
                                                </Nav.Link>
                                                </td>
                                            <td>
                                            <Nav.Link as={Link} to={`/applications/viewall/${data._id}`} state={data}>
                                                {data.state}
                                                </Nav.Link>
                                                </td>
                                            <td><Link to='/applications/editapp' state={data}><Button variant="outline-secondary">Edit</Button></Link></td>

                                        </tr>

                                    </tbody>
                                )
                                }
                                )
                            
                            ))}
                        </Table>
                    </Col>
                </Row>
                <div className="text-center" style={{ "marginTop": "-200px" }}>
                <button
                    className="px-3 py-2 m-1 text-center" style={{ 'backgroundColor': '#66D6FF', 'border': 'none' }} onClick={onPreviousPageHandler} disabled={buttonDis}
                >
                    Previous
                </button>

                {pageNumber.map((num) => {
                    return (
                        <>
                            <button
                                className="px-3 py-2 m-1 text-center btn-outline-dark" style={{ "border": "none" }} onClick={() => ChangePage(num)}
                            >
                                {num}
                            </button>
                        </>
                    );
                })}
                <button
                    className="px-3 py-2 m-1 text-center" style={{ 'backgroundColor': '#66D6FF', 'border': 'none' }} onClick={onNextPageHandler} disabled={nextButtonDis}
                >
                    Next
                </button>
            </div>
            </Container>
        </div>
    )
}
export default Applications;