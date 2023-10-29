import React, { useEffect } from 'react'
import RestCard from '../components/RestCard'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurants } from '../redux/restSlice'


function Home() {

const allrestaurants = useSelector((state)=>state.restSlice.allRestaurants)
const dispatch = useDispatch()

useEffect(()=>{

  dispatch(fetchRestaurants())

},[])

  return (
    <>
      <Row className='mt-5'>

        {
          allrestaurants.length>0 ? allrestaurants.map(restaurant=>(
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