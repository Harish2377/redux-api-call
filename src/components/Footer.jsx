import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (

    <div style={{width:'100%',height:'300px'}} className='   d-flex flex-column justify-content-center align-items-center bg-secondary mt-5 '>

       
    <div className="   footer-div  d-flex justify-content-evenly w-100 flex-wrap"  >

        <div className="website" style={{width:'400px',color:'Black'}} >
            <h4 className='mb-3' style={{fontWeight:'bold',color:'Black'}} > <Link to={'/'} style={{textDecoration:'none',color:'Black',fontWeight:'bold'}}><i class="fa-solid fa-utensils fa-flip"></i></Link>{'  '}
            Fat Chef</h4>
            <h6 style={{textAlign:'justify',color:'Black'}}>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
            <h6 style={{color:'Black'}} >Code licensed MIT, docs CC BY 3.0.</h6>
            <p>Currently v5.3.2.</p>
        </div>

        <div className="links d-flex flex-column" style={{color:'Black'}} >
            <h4 className='mb-3' style={{fontWeight:'bold',color:'Black'}} >Links</h4>
            <Link to={'/'} style={{textDecoration:'none',color:'Black'}} >Home</Link>
            {/* <Link to={'/login'} style={{textDecoration:'none',color:'white'}} >Login</Link>
            <Link to={'/register'} style={{textDecoration:'none',color:'white'}} >Register</Link> */}
        </div>

        <div className="guides d-flex flex-column" style={{color:'Black'}}>
        <h4 className='mb-3' style={{fontWeight:'bold',color:'Black'}} >Guides</h4>
            <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'Black'}} >React</Link>
            <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'Black'}} >React Bootstrap</Link>
            <Link to={'https://reactrouter.com/en/main'} style={{textDecoration:'none',color:'Black'}} >Routing</Link>
        </div>

        <div className="contact d-flex flex-column flex-wrap " style={{color:'Black'}}>
            <h4 className='mb-3' style={{fontWeight:'bold',color:'Black'}} >Contact Us</h4>
            <div className="sub d-flex " >
                <input type="text" className='form-control rounded' placeholder='Enter your Email Id' />
                <button className='btn  ms-3 btn-outline-light text-black rounded w-25 d-flex justify-content-center align-items-center '  ><i className="fa-solid fa-arrow-right outline-secondary fa-beat w-100" ></i></button>
            </div>

            <div className="icons fs-5 d-flex justify-content-between mt-3">
            <Link to={'https://www.facebook.com/'} style={{textDecoration:'none',color:'Black'}} ><i className="fa-brands fa-facebook"></i></Link>
            <Link to={'https://twitter.com/'} style={{textDecoration:'none',color:'Black'}} ><i className="fa-brands fa-twitter"></i></Link>
            <Link to={'https://www.instagram.com/'} style={{textDecoration:'none',color:'Black'}} ><i className="fa-brands fa-instagram"></i></Link>
            <Link to={'https://in.linkedin.com/'} style={{textDecoration:'none',color:'Black'}} ><i className="fa-brands fa-linkedin"></i></Link>
            <Link to={'https://www.google.com'} style={{textDecoration:'none',color:'Black'}} ><i className="fa-solid fa-envelope"></i></Link>
            <Link to={'https://github.com/'} style={{textDecoration:'none',color:'Black'}} ><i className="fa-brands fa-github"></i></Link>
            
            </div>

        </div>

    </div>
    <p style={{color:'Black'}} className='fw-bold'>Copyright © 2023 Project Fair. Built with React.</p>




</div>
    
  )
}

export default Footer