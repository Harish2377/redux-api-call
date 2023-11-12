import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Review from '../components/Review'
import OperatingHours from '../components/OperatingHours'




function Restaurant() {

    const {id} = useParams()
    const {allRestaurants,loading,error} =  useSelector((state)=>state.restSlice)
    const [restaurant,setRestaurant] = useState({})
    useEffect(()=>{setRestaurant(allRestaurants?.find(item=>item.id==id))},[])

    console.log(restaurant);

    

  
   
    
    
   

    
  return (

    <>

    <Row className='mt-5 px-2 '>
        <Col  sm={12} md={6} className='p-4' >
            <img  height={'600px'} width={'100%'} src={restaurant?.photograph} alt="" />
        </Col>
        <Col  sm={12} md={6} className='p-4 ' >
            <div className='d-flex flex-column justify-content-center align-items-start ' >

                <div className='bg-light w-100 p-4'>
                   <h1>{restaurant?.name}</h1>
                   <p className='mb-4'>{restaurant?.neighborhood}</p>
                   <p className='mb-2'>Cuisine : {restaurant?.cuisine_type}</p>
                   <p>Address : {restaurant?.address}</p>


                </div>

                <div className='d-flex flex-column justify-content-center align-items-start mt-5 gap-4  '>

                  
                  <OperatingHours restaurant={restaurant} />
                  <Review restaurant={restaurant}    />
                   
           
                </div>

                          
            </div>
         
        </Col>
    </Row>

    

     
    
    
    
    
    
    </>
  )
}

export default Restaurant