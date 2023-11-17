// src/components/Experience.js
import React from 'react';
import bhalogo from '../assets/bharathbrands_logo.jpeg'; 
import zindualogo from '../assets/zindua.jpeg'; 
import bringlogo from '../assets/bring.jpeg'; 
import gebeyalogo from '../assets/gebeya.jpeg'; 
import '../styles/Exp.css'

function Experience() {
  return (
    <section id="experience" >
      <div className="container exp">
        <h2 className='text-center'> My Work Experience</h2>

       <div className='row'>
                  {/* BharathBrands Experience */}
                  <div className="col-md-6">
            <div className="experience-entry">
              <img
                src={bhalogo}
                alt="BharathBrands Logo"
                className="company-logo"
                style={{ maxWidth: '80px' }}
              />
              <div className="experience-details">
                <h3>BharathBrands PVT LTD</h3>
                <p className="position">Back End Software Engineer</p>
                <p className="duration">Oct 2023 - Present</p>
                <p className="location">Nairobi County, Kenya</p>
                {/* Add your other details here */}
              </div>
            </div>
          </div>

          {/* Zindua School Experience */}
          <div className="col-md-6">
            <div className="experience-entry">
            <img
                src={zindualogo}
                alt="Zindua Logo"
                className="company-logo"
                style={{ maxWidth: '80px' }}
              />
              <div className="experience-details">
                <h3>Zindua coding School</h3>
                <p className="position">Software Development Technical Mentor</p>
                <p className="duration">Feb 2023 - Present</p>
                <p className="location">Nairobi, Kenya (Remote)</p>
                {/* Add your other details here */}
              </div>
            </div>
          </div>


        {/* Gebeya Inc. Experience */}
        <div className="col-md-6">
        <div className="experience-entry">
             <img
                src={gebeyalogo}
                alt="Gebeya Logo"
                className="company-logo"
                style={{ maxWidth: '80px' }}
              />
          <div className="experience-details">
            <h3>Gebeya Inc.</h3>
            <p className="position">Software Developer</p>
            <p className="duration">Jul 2019 - Jun 2023</p>
            <p className="location">Nairobi, Kenya (Remote)</p>
            
          </div>
          
        </div>
        </div>
         {/* Bring Global Experience */}
         <div className="col-md-6">
         <div className="experience-entry">
         <img
                src={bringlogo}
                alt="Bring' Logo"
                className="company-logo"
                style={{ maxWidth: '80px' }}
              />
          <div className="experience-details">
            <h3>Bring Global</h3>
            <p className="position">Integration Consultant</p>
            <p className="duration">Apr 2022 - Jan 2023</p>
            <p className="location">Nairobi, Kenya (Hybrid)</p>
   
          </div>
        </div>

        </div>
        
      
     
       </div>


      </div>
    </section>
  );
}

export default Experience;
