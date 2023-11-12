import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';


function OperatingHours({restaurant}) {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   



    return (

    <>
     <button className='btn btn-dark py-2 ' style={{width:'350px'}} onClick={handleShow}  >Operating Hours</button>

    
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
            <h6>Monday: {restaurant?.operating_hours?.Monday || 'Not available'}</h6>
            <h6>Tuesday: {restaurant?.operating_hours?.Tuesday || 'Not available'}</h6>
            <h6>Wednesday: {restaurant?.operating_hours?.Wednesday || 'Not available'}</h6>
            <h6>Thursday: {restaurant?.operating_hours?.Thursday || 'Not available'}</h6>
            <h6>Friday: {restaurant?.operating_hours?.Friday || 'Not available'}</h6>
            <h6>Saturday: {restaurant?.operating_hours?.Saturday || 'Not available'}</h6>
            <h6>Sunday: {restaurant?.operating_hours?.Sunday || 'Not available'}</h6>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        
    </>
  )
}

export default OperatingHours