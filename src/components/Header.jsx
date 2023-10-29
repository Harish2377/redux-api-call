import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <Navbar className=" bg-secondary ">
    <Container className='ms-5 ps-5'>
      <Navbar.Brand href="#home" className='fs-4 fw-bold  '>
      <i class="fa-solid fa-utensils fa-flip  "></i>{' '}
        Fat Chef
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header