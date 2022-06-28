import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Table, Nav } from 'react-bootstrap'
import { IoIosLock } from "react-icons/io";
import { BsSearch} from "react-icons/bs";

import { MDBCol, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom"
import ReactLoading from 'react-loading'
import '../css/Authentication.css'
import axios from 'axios';
import _ from 'lodash'; 


export default function Authentication() {

    const [post, setPost] = useState({count:"",value:""});
    const [isLoading,setIsLoading] = useState(false)
    const [pagination,setPagination] = useState({limit:6,skip:0})
    const [data,setData] = useState({name:""});
    const [number,setNumber] = useState(1)
    // const [pagedata, setPageData] = useState();
    // const [currentPage, setCurrentPage] = useState(1);
    const[buttonDis,setButtonDis] = useState(false)
    const[nextButtonDis,setNextButtonDis] = useState(true);


    // const [sort, setSort] = useState({});
    // const [condition, setCondition] = useState(false);

    // const [data, setData] = useState({ name: "" });
    // const handleSearch = async (e) => {
    //     console.log(data);


    //     var response = await axios.post("http://localhost:9001/authenticationproviders/getbyname", { ...data })
    //     console.log(response.data);
    //     setSort(response.data)

    //     console.log(sort, "sortUp")
    //     if (Object.keys(sort).length !== 0) {
    //         console.log(sort, "Sort")
    //         var temp = []

    //         temp.push(sort)
    //         console.log(temp, "temp")
    //         setPost(temp)
    //         console.log(post, "post")
    //     }
    // }

    const handleChange = (e) => {
        setData({ ...data, name: e.target.value })
    }

    const clearData = () =>{
        setData({name:""})
    }

    useEffect(()=>{
        const value = async () =>{
            const response = await axios.post("https://umusic-b.herokuapp.com/authenticationproviders/getbyname",data)
            console.log(response.data);
            console.log(post.count)
            setPost((previous) =>({
                ...previous,value:response.data
            }))
        }
        value()
    },[data])



    // const [post, setPost] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://umusic-b.herokuapp.com/authenticationproviders/${pagination.limit}/${pagination.skip}`)
                .then(res => {
                    console.log(res.data)
                    setPost({count:res.data.count,value:res.data.value})
                    // setPageData(res.data)
                    setIsLoading(true)
                    // setpaginatedPosts(_(res.data).slice(0).take(pageSize).value());
                    // console.log(paginatedPosts)
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

    // const pageCount = pagedata ? Math.ceil(pagedata.length / pageSize) : 0;
    // if(pageCount === 1) return null;
    // const pages = _.range(1, pageCount + 1)

    // const pagination = (pageNo) => {
    //     setCurrentPage(pageNo);
    //     const startIndex = (pageNo - 1) * pageSize;
    //     const paginatedPosts = _(pagedata).slice(startIndex).take(pageSize).value();
    //     setpaginatedPosts(paginatedPosts)
    // }

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
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={9} style={{ 'marginTop': '-790px', 'marginLeft': '-11px' }}>
                    <div className="authentication" style={{ 'display': 'flex' }}>
                        <h2 style={{ 'fontWeight': 'normal' }}><IoIosLock color="#B6B6B6" fontSize="40px" style={{ 'marginRight': '20px', 'marginTop': '-7px' }} />Authentication Providers<Button variant="info" className='appbtn'><Nav.Link href="/authenticationproviders/addauth">Add New</Nav.Link></Button></h2>
                        <div className="authpro-hd" style={{ 'marginLeft': '200px' }}>
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
                                        <span className="input-group-text " >
                                            <GrFormClose fontSize="23px" onClick={clearData}/>
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
                    <hr style={{width:'975px'}}></hr>
                    <Table responsive="lg" style={{ 'marginTop': '25px', 'width': '970px' }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>ID</th>
                                <th>Provider ID</th>
                                <th>Client ID</th>
                                <th>Client Secret</th>
                                <th>App ID</th>
                                <th>Global</th>
                                <th>State</th>
                                <th></th>
                            </tr>
                        </thead>
                        {!isLoading ? (
                            <div className="loader" style={{ 'marginLeft': '390px', 'marginTop': '130px' }}>
                                <ReactLoading type={"spin"} color={"black"} width={'280%'} />

                            </div>
                            
                        ) : (
                            post.value.length === 0?(<h7>No Data Found</h7>) : (
                            post.value.map((data) => {
                                // {{console.log(data)}}
                                return (
                                    <tbody>
                                        <tr>
                                            <td><Nav.Link as={Link} to={`/authenticationproviders/viewall/${data._id}`} state={data}>{data.name}</Nav.Link></td>
                                            <td><Nav.Link as={Link} to={`/authenticationproviders/viewall/${data._id}`} state={data}>{data._id}</Nav.Link></td>
                                            <td><Nav.Link as={Link} to={`/authenticationproviders/viewall/${data._id}`} state={data}>{data.provider_id}</Nav.Link></td>
                                            <td><Nav.Link as={Link} to={`/authenticationproviders/viewall/${data._id}`} state={data}>{data.client_id}</Nav.Link></td>
                                            <td><Nav.Link as={Link} to={`/authenticationproviders/viewall/${data._id}`} state={data}>{data.client_secret}</Nav.Link></td>
                                            <td><Nav.Link as={Link} to={`/authenticationproviders/viewall/${data._id}`} state={data}>{data.application_id}</Nav.Link></td>
                                            <td><Nav.Link as={Link} to={`/authenticationproviders/viewall/${data._id}`} state={data}>{data.global}</Nav.Link></td>
                                            <td><Nav.Link as={Link} to={`/authenticationproviders/viewall/${data._id}`} state={data}>{data.state}</Nav.Link></td>
                                            <td><Link to='/authenticationproviders/editauth' state={data}><Button variant="outline-secondary">Edit</Button></Link></td>
                                        </tr>

                                    </tbody>
                                    
                                    )
                                }
                                )
                            
                            ))}
                    </Table>
                    {/* <Nav className="d-flex justify-content-center">
                        <ul className="pagination">
                            {
                                pages.map((pages) => (
                                    <li className={ pages === currentPage ? "page-item active" : "page-item"}>
                                        <p className="page-link" onClick={() => pagination(pages)} style={{'cursor':'pointer'}}>{pages}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </Nav> */}
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
        </div>
    )
}