import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {

  return (


      <div classname="text-question"> 
    <p>  
            Oh no! You might have got your coffee, but you've missed out on the opportunity to meet your favourite new software developer.
          </p>  
          <Link to="/1" className="clickable-option">
            Go back to the start
          </Link> 
 
      </div>
    );
  }