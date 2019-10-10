import React from 'react';
import { Link } from 'react-router-dom';

export default function Page1() {
    return (
      <div classname="text-question">  
          <p>
            You walk into your local artisan coffee shop. A woman with crazy coloured hair sits at a table working on her laptop. 
            What do you do?
          </p> 
          <div className="options">
             <Link to="/2" className="clickable-option">1. Sit down and say "hello"</Link> 
            <Link to="/error" className="clickable-option">
                2. Ask the barista for your oat milk latte to go and leave the cafe
            </Link> 
          </div> 
      </div>
    );
  }
