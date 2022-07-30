  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { SocialIcon } from 'react-social-icons';
import Contact from './Contact';
function Footer() {
    return ( 
        <>

    <div className="footer">
        <>
        <div className='contactWriting' style={{color: "white"}}>
                Contact us if you have any questions or alternatively message us on one of our social media accounts below.
            </div>
            <Contact/>


        </>

    </div>
    <div style={{width: "100%", backgroundColor: "var(--bs-dark)", float: "right", padding: "10px"}}>
            <SocialIcon url='https://www.instagram.com/ubrobotics/'/>
            <SocialIcon url='https://www.facebook.com/groups/brum.robotics'/>
            <SocialIcon url='https://www.linkedin.com/company/ubrobotics/about/'/>
        </div>
    </>
 );
}

export default Footer;