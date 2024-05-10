import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PosApp from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/PosApp.png';
import SocialPosts from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/SocialPosts.png';
import MovieApp from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/MovieApp.png';
import GraveBook from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/GraveBook.png';
import BlueZones from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/BlueZones.png'
import Unchained from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/Unchained 1.png'

function Volunteering(){
return( <div>
    <h1 className='Volunteering-Title'>Volunteering</h1>
    <div className='Volunteering-Cards'>
    



    <Card id='Volunteering-Card-1' >
      <Card.Body>
      <Card.Img variant="top" src={Unchained} />
        <Card.Title>UnChained</Card.Title>
        <Card.Title>Email Marketing & Web Analyst</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Feb. 2024 – Present | Salinas, CA</Card.Subtitle>
        <Card.Text>
        <p>Volunteering at Unchained, a nonprofit organization focused on nurturing empathy, respect, and responsibility in youth through the human-animal bond. In this capacity, responsible for analyzing web and email marketing strategies to support and elevate outreach efforts.</p>
       
        </Card.Text>
      </Card.Body>
    </Card>

    <Card id='Volunteering-Card-2' >
      <Card.Body>
      <Card.Img variant="top" src={BlueZones} />
        <Card.Title>Blue Zones Project</Card.Title>
        <Card.Title>Community Volunteer</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Jun. 2023 – Present | Salinas, CA</Card.Subtitle>
        <Card.Text>
        <p>Passionate volunteer dedicated to community-driven initiatives for a cleaner environment and inclusive spaces. Actively involved in park cleanups, enhancing accessibility, and supporting maintenance efforts. Committed to creating a more accessible and welcoming community.</p>
       
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>)
}

export default Volunteering