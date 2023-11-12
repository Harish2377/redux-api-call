import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';


function Review({restaurant}) {


    const [open, setOpen] = useState(false);
    




  return (
    <>

<button className='btn btn-warning text-black fw-bold py-2 ' onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} style={{width:'350px'}} >View Reviews</button>

<Collapse in={open} className='mt-2'>
        <div id="example-collapse-text">
        <h3>Reviews:</h3>
                    <ul>
                        {restaurant?.reviews && restaurant.reviews.map((review, reviewIndex) => (
                            <li key={reviewIndex}>
                                <p><strong>Name:</strong> {review.name}</p>
                                <p><strong>Date:</strong> {review.date}</p>
                                <p><strong>Rating:</strong> {review.rating}</p>
                                <p><strong>Comments:</strong> {review.comments}</p>
                            </li>
                        ))}
                    </ul>
        </div>
      </Collapse>
        
    </>
  )
}

export default Review