import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/js/main.js"
import "../assets/css/homeCarousel.css"
import AgentCarousel from '../Components/AgentCarousel.jsx'
import Properties from '../Components/Properties.jsx'
import Service from '../Components/Service.jsx'
import CountUp from 'react-countup';
import property6 from '../assets/img/property-6.jpg'



const Home = () => {
  return (
    <>
   
      
      
      
      <Service />

      <div className="mt-5" style={{ backgroundColor: 'black' }}>
      <div className="row-fluid">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://ayatrealestate.com/wp-content/uploads/2019/03/ayat-appartments5-1.jpg" class="d-block w-100" alt="https://ayatrealestate.com/wp-content/uploads/2019/03/ayat-appartments5-1.jpg" />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://ayatrealestate.com/wp-content/uploads/2019/03/ayat-appartments5-1.jpg" class="d-block w-100" alt="https://ayatrealestate.com/wp-content/uploads/2019/03/ayat-appartments5-1.jpg" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://ayatrealestate.com/wp-content/uploads/2019/03/ayat-appartments5-1.jpg" class="d-block w-100" alt="https://ayatrealestate.com/wp-content/uploads/2019/03/ayat-appartments5-1.jpg" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>
  {/* <!-- ======= Latest Properties Section ======= --> */ }
  <Properties />
  {/* Latest Properties Section */ }

  {/* <div className="container">
       <div className="row">
       <CountUp start={0} end={100} delay={0}/>
       </div>
     </div> */}

  {/* Agent Section */ }
  <AgentCarousel />
  {/* End Agent Section */ }
    </>
    
  )
}

export default Home
