import Card from 'react-bootstrap/Card';
import TapBox from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/TapBox.png';
import Sjsu from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/Sjsu.png';
import Hartnell from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/Hartnell.png';
import Grandcircus from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/grandcircus.png'
function Education() {
  return (
    <div>
    <h1 className='Education-Title'>Education</h1>
    <div className='Education-Cards'>
    

    <Card id='Grand-Circus-Education-Card'>
      <Card.Body>
      <Card.Img variant="top" src={Grandcircus} />
        <Card.Title>Grand Circus Bootcamp</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Dec. 2022 – April 2023 | Detroit, MI</Card.Subtitle>
        <Card.Text>
        <p>Full Stack Javascript Bootcamp Certificate</p>
        
        </Card.Text>
      </Card.Body>
    </Card>

    <Card id='San-Jose-State-Education-Card'>
      <Card.Body>
      <Card.Img variant="top" src={Sjsu} />
        <Card.Title>San Jose State University</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Aug. 2019 – Dec 2021 | San Jose, CA</Card.Subtitle>
        <Card.Text>
        <p>Bachelor of Science in Business Administration, Major in Marketing</p>
       
        </Card.Text>
      </Card.Body>
    </Card>


    <Card id='Hartnell-College-Education-Card' >
      <Card.Body>
      <Card.Img variant="top" src={Hartnell} />
        <Card.Title>Hartnell College</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Aug. 2017 – May 2019 | Salinas, CA</Card.Subtitle>
        <Card.Text>
        <p>Associate's degree, Business Administration</p>
       
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default Education;