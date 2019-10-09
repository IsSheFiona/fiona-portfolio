import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
 


export default function Main() {
    return (
      <div classname="text-question">  
          <p>
            Hi, I'm Fiona, a Manchester based software developer and Northcoders graduate. I like robots, hair dye and all things retro. 
            I'm currently available for full time employment, so please get in touch.
          </p>  
          <p>View my CV</p>
          <Link to="https://www.linkedin.com/in/ffairbairn/" className="clickable-option"><FontAwesomeIcon icon={faLinkedin} />Connect with me on LinkedIn</Link>
          <p>Send me an email</p>
          <Link to="/1" className="clickable-option">
            Go back to the start.
          </Link> 
 
      </div>
    );
  }