import React from 'react'
import { Col, Container, Form, Navbar, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { SearchRestaurants } from '../redux/restSlice'



function Header() {

  const dispatch = useDispatch()

  return (
    <Navbar className=" bg-secondary w-100 ">
    <Container fluid>
      <Navbar.Brand href="#home" className='fs-4 fw-bold ps-4   '>
      <i className="fa-solid fa-utensils fa-flip  "></i>{' '}
        Fat Chef
      </Navbar.Brand>
      <Form inline className=''>
        <Row>
          <Col  xs="auto" className='d-flex justify-content-center align-items-center pe-5 ' >
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2  " onChange={(e)=>dispatch( SearchRestaurants(e.target.value))}
            /> <i className="fa-solid fa-magnifying-glass" style={{marginLeft:'-30px'}}   ></i>
          </Col>
       
        </Row>
      </Form>
    </Container>
  </Navbar>
  )
}

export default Header