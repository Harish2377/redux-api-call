import React, { useEffect } from 'react'
import RestCard from '../components/RestCard'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurants } from '../redux/restSlice'
import { all } from 'axios'



function Home() {

const {allRestaurants,loading,error} = useSelector((state)=>state.restSlice)
const dispatch = useDispatch()

useEffect(()=>{

  dispatch(fetchRestaurants())

},[])

  return (
    <>
 
        
        <div className="d-flex justify-content-center align-items-center mt-2 w-100">
          {
            loading ? <div>
               <Spinner animation="border" variant='info'  role="status" >
       
      </Spinner> <span className="ms-2">Loading...</span>
            </div>:null
          }
        </div>
  
        <div className="d-flex justify-content-center align-items-center mt-2 w-100">
          {
            !loading && error? <div>
              
        <span className="fw-bolder text-danger">{error}</span>
      
            </div>:null
          }
        </div>
 
      <Row className='mt-5'>

        {
          allRestaurants.length>0 ? allRestaurants.map(restaurant=>(
            <Col className='px-5 py-3' sm={12} md={6} lg={4} xl={3} >
        <RestCard restaurant={restaurant} />
        </Col>

          )):null
          
        }

      </Row>
    </>
  )
}

export default Home