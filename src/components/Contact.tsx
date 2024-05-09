import Card from 'react-bootstrap/Card';
import LinkedIn from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/Linkedin.png';
import Gmail from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/Gmail.png'
import Github from '/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/Github.png'
function Contact() {
  return (
    <div>
    <h1 className='Contact-Title'>Contact</h1>
    
    <a className='Contact-Email' href ="mailto: Zacharynwilliams11@gmail.com"><h1 > Zacharynwilliams11@gmail.com </h1></a>
    <div id='Contact-Cards' >
    
    {/* <div className='Contact-Email'>
        zacharynwilliams9@gmail.com
    </div>
    <div className='Contact-Button-Logos'>
    <div  className='Contact-LinkedIn'>
      <button id='LinkedIn-Logo'>LinkedIn</button>
        
    </div>
    <div className='Contact-Github'>
      <button id='Github-Logo'>
      <img src="/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/Sjsu.png" alt="" srcset="" />
       </button> */}
       
       <Card id='/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/Linkedin.png' >
        <div id='Contact-LinkedIn-Logo'>
        <a href="https://www.linkedin.com/in/zacharywilliams11/">
      <Card.Img variant="top" src={LinkedIn} />
      </a>
      </div>
    </Card>
  
    <Card id='/Users/williams/Grand_Circus/projects/React-Portfolio/portfolio-project/src/Images/Gmail.png' >
    <div id='Contact-Gmail-Logo'>
      <a href="https://github.com/ZacharyNWilliams">
      <Card.Img  variant="top" src={Github} />
      
      </a>
      </div>
    </Card>
    
    {/* </div>
    </div> */}
    </div>
    </div>
  );
}
// mailto:zacharynwilliams9@gmail.com
export default Contact;