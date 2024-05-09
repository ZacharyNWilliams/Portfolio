import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import HomeMoreProject from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/HomeMoreProject.png';
import InfiniteOptions from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/InfiniteOptions.png';
import TapBox from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/TapBox.png';

import New from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/New.png';



// const Experience = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handlePrevClick = () => {
//     setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
//   };

//   const handleNextClick = () => {
//     setCurrentImageIndex((currentImageIndex + 1) % images.length);
//   };
function Experience(){
  return (
    <div className='Experience-Cards-Div'>
      <h1 className='Experience-title'>Experience</h1>
      <div className='Experience-Cards'>
      <Card >
    <Card.Img id='TapBox-Card-Image' variant="top" src={TapBox} />
    <Card.Body id='Tapbox-Card-Body'>
      <Card.Title id='Tapbox-Card-Title'>TapBox LLC.</Card.Title>
      <h4 id='Tapbox-Card-Position'>Digital Marketing Assistant</h4>
      <h4 id='Experience-Dates'>Dec. 2021 – Present | City of Industry, CA</h4>
      <p id='Company-Summary'>Interactive Media Startup</p>
      <Card.Text id='Tapbox-Card-Summary'>
      <li>
      Engages users and increases TapBox followership through curated content generation and customer loyalty initiatives.
      </li>
      <li>Researches and develops marketing strategies for social media channels based on performance metrics and other quantitative reports, posting on a daily schedule.</li>
      <li>Collects resources for career advancement opportunities, financial assistance, and collaboration opportunities for college students and early career professionals.</li>


      </Card.Text>
      
    </Card.Body>
  </Card>
  </div>
  <div className='Experience-Cards'>
   <Card>
      <Card.Img id='HomeMore-Card-Image' variant="top" src={HomeMoreProject} />
      <Card.Body id='HomeMore-Card-Body'>
        <Card.Title id='HomeMore-Card-Title'>The HomeMore Project</Card.Title>
        <h4 id='HomeMore-Card-Position'>Marketing Communications Intern</h4>
        <h4 id='Experience-Dates'>Aug. 2021 – Jan. 2022</h4>
        <p id='Company-Summary'>Non-profit organization based in San Francisco, California focusing on innovating in assisting the unhoused community by Investing in Every Root Cause for Every Individual.</p>
        <Card.Text id='HomeMore-Card-Summary'>
        <li>
          Co-authored 5 different articles, one of which became one of the blog's top viewed articles.
        </li>
        <li>
          Collaborated on the Makeshift Traveler Backpack to serve the homeless, conducting market research to
          inform prototype production, and developing cost projections to achieve $30,000+ in donations.
        </li>
        <li>
          Developed and implemented business plans, marketing strategies, and experiential strategies.
        </li>
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
    <div className='Experience-Cards'>
     <Card >
    <Card.Img id='Infinite-Card-Image' variant="top" src={InfiniteOptions} />
    <Card.Body id='Infinite-Card-Body'>
      <Card.Title id='Infinite-Card-Title'>Infinite Options</Card.Title>
      <h4 id='Infinite-Card-Position'>Marketing Communications Intern</h4>
      <h4 id='Experience-Dates'>Sep. 2020 - Aug. 2021</h4>
      <p id='Company-Summary'>Infinite Options LLC. is a technology and training company based out of San Jose, CA.</p>
      <Card.Text id='Infinite-Card-Summary'>
        <li>
        Built web traffic & sales by creating email marketing campaigns and managing social media.
        </li>
        <li>
        Developed and implemented business plans, marketing strategies, and experiential strategies for new businesses.
        </li>
        <li>
        Created, implemented, and tracked paid advertisements through Google and Facebook.
        </li>
        <li>Utilized strong communication skills when reaching out to marketing team with answers to business questions & issues and calling prospective clients to communicate specific value propositions.</li>
      </Card.Text>
    
    </Card.Body>
  </Card>
  </div>
      
 
    </div>
  );
}




export default Experience;   

{/* {images[currentImageIndex].caption} */}
      
{/* <button onClick={handlePrevClick}>Prev</button>
<button onClick={handleNextClick}>Next</button> */}