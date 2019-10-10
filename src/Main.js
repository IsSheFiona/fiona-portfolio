import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf, faUndoAlt } from '@fortawesome/free-solid-svg-icons';


export default function Main() {
    return (
      <div classname="text-question">  
          <p>
            You strike up a conversation and meet Fiona, a Manchester based software developer and Northcoders graduate. She likes robots, hair dye and vintage TV. 
            She is currently available for full time employment, so what will you do now...?
          </p>  
          <a href="https://drive.google.com/file/d/1pCAazckgJNH9H-AJ8ermkMypF0CJ3E6t/view?usp=sharing" className="clickable-option">
          <FontAwesomeIcon icon={faFilePdf} /> View my CV</a>
          <br></br>
          <a href="//linkedin.com/in/ffairbairn/" className="clickable-option">
          <FontAwesomeIcon icon={faLinkedin} /> Connect with me on LinkedIn</a>
          <br></br>
          <a href = "mailto: fairbairnf@gmail.com" className="clickable-option">
          <FontAwesomeIcon icon={faEnvelope} /> Send me an email</a>
          <br></br>
          <a href="https://www.instagram.com/isshefiona/" className="clickable-option">
          <FontAwesomeIcon icon={faInstagram} /> Snoop on my Instagram</a>
          <br></br>
          <a href="https://github.com/IsSheFiona" className="clickable-option">
          <FontAwesomeIcon icon={faGithubSquare} /> Take a peek at my Github</a>
          <br></br>
          <Link to="/1" className="clickable-option">
           <FontAwesomeIcon icon={faUndoAlt} /> Go back to the start
          </Link> 
 
      </div>
    );
  }