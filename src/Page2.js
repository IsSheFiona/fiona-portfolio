import React from 'react';
import { Link } from 'react-router-dom';

export default function Page2() {
    return (
      <div classname="text-question">  
          <p>
            The woman looks up from her screen shyly and says 'hi'...
          </p> 
          <div className="options">
            <Link to="/error" className="clickable-option">
                1. You don't have time for introverts, you need to get your coffee and leave
            </Link> 
            <Link to="/main" className="clickable-option">
                2. You're intrigued, and you ask what she's working on
            </Link> 
          </div>   
      </div>
    );
  }