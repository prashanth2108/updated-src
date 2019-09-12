import React from 'react';
import logo from '../assets/bloodbank.jpg'; 
import './Welcome.css';
import Home from '../Home/Home.react';
import {Link} from 'react-router-dom';


const Welcome = () => {

   

    return (
   <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="500">

  <div class="carousel-inner container">
    <div class="carousel-item active">
      <img class="d-block w-100 abc" height="700" src="https://wallpapercave.com/wp/wp4323538.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 abc"height="700" src="https://wallpapercave.com/wp/wp4323461.png" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 abc" height="700" src="https://wallpapercave.com/wp/wp4323467.jpg" alt="Third slide/"/>
    </div>
   
  </div>
  <Link to="/home">
               <button className="btn btn-outline-danger btn-lg">Enter</button></Link>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>

  
</div>


      
    );

}

export default Welcome;

   {/* <div className='container'>
        <img src={logo} alt="Logo" />
        <Link to="/home">
               <button>Enter</button></Link>
     </div> */}