import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Error() {

  return (
      <div classname="text-question"> 
            <FontAwesomeIcon icon={faCoffee} className="coffee" />
          <p>
            Oh no! You've missed out on the opportunity to meet your favourite new software developer.
          </p>  
          <Link to="/1" className="clickable-option">
            Go back to the start.
          </Link> 
 
      </div>
    );
  }