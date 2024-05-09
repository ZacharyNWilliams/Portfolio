import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PosApp from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/PosApp.png';
import SocialPosts from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/SocialPosts.png';
import MovieApp from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/MovieApp.png';
import GraveBook from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/GraveBook.png';
function Projects() {
  return (
    <div>
      
      <div>
<h1 className='Projects-Title'>Projects</h1>
<div className='Project-Cards-Div'>


<Card id='Projects-Card'>

      <Card.Body>
      <Card.Img variant="top" src={GraveBook} />
       
   
        <Card.Text>
          <h1>GraveBook</h1>
       <a href="https://finalproject-8c02e.web.app/"><h1>Live Preview</h1></a>
        
       Developed a full stack MERN application for digital obituaries, featuring customizable boards, Google sign-in, and pagination. Users can post, edit, and delete boards. The backend is powered by Express.js and Firebase, handling MongoDB operations, while React is used for the frontend.
        </Card.Text>
        
      </Card.Body>
</Card>

<Card id='Projects-Card'>

      <Card.Body>
      <Card.Img variant="top" src={PosApp} />
       
   
        <Card.Text>
        <h1>Point of sale application (POS)</h1>
       <a href="https://github.com/ZacharyNWilliams/Shopping-Cart"><h1>Github Link</h1></a>
        
        
       Developed a point-of-sale website application that allows users to add or edit items in their shopping cart, check out, and choose the option to pay with cash or card.
        
        
       
        </Card.Text>
        
      </Card.Body>
</Card>


<Card id='Projects-Card'>

      <Card.Body>
      <Card.Img variant="top" src={MovieApp} />
       
   
        <Card.Text>
        <h1>Movie App</h1>
       <a href="https://github.com/ZacharyNWilliams/Movie-App"><h1>GitHub Link</h1></a>
        
        
       The application gathers movie results from the TMDB API based on user-selected criteria. Users can mark movies as favorites to watch later and manage their favorites list by editing or removing entries.

        </Card.Text>
        
      </Card.Body>
</Card>
</div>
<div>
  
</div>
</div> 

    </div>
    
  );
}


export default Projects;
      
