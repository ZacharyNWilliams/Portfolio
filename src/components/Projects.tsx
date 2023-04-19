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
        
       Full stack social media application for digital obituaries. Features include Google sign in authentication, search functionality, pagination, and hosted on Firebase. 

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
        
        
       An application that displays results from the TMDB API based on user-selected search criteria. The application allows users to mark their "favorite" results and edit their favorites list.
          

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
      {/* <div className='Project-Cards-Div'>
      
      <Card className='Experience-Card'>
      <Card.Img variant="top" src={GraveBook} />
      <Card.Body>
        <a href="https://finalproject-8c02e.web.app/">Live Preview</a>
        <link rel="stylesheet" href="https://finalproject-8c02e.web.app/" />
        <h1>https://finalproject-8c02e.web.app/</h1>
        <h4>POS Shopping Application</h4>
        <Card.Text>
        
        Developed a point of sale website that allows the user to add or edit items in their shopping cart, check out, and choose the option to pay with cash or card.
        

        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card className='Experience-Card' >
      <Card.Img variant="top" src={PosApp} />
      <Card.Body>
       
        <h4>POS Shopping Application</h4>
        <Card.Text>
        
        Developed a point of sale website that allows the user to add or edit items in their shopping cart, check out, and choose the option to pay with cash or card.
        

        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className='Project-Cards-Div'>
    <Card className='Experience-Card' >
      <Card.Img variant="top" src={SocialPosts} />
      <Card.Body>
        
        <h4>Social Posts application</h4>
        <Card.Text>
        
          Co-authored 5 different articles, one of which became one of the blog's top viewed articles.
       

        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
    <div className='Project-Cards-Div'>
    <Card >
      <Card.Img variant="top" src={MovieApp} />
      <Card.Body>
       <h4>Movie API Project</h4>
        <Card.Text>
          
          Created an application that displays results from the TMDB API based on user-selected search criteria. The application allows users to mark their "favorite" results and edit their favorites list.
          

        </Card.Text>
      
      </Card.Body>
    </Card>
    
    </div> */}


