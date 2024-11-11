import React from 'react';
import './Stylings/LetsConnect.css';
import arrowUp from '../Assets/arrow-up.svg';
import { LinkedInLink } from '../Assets';

const LetsConnect = () => (

    <button
      className="lets-connect-container"
      onClick={() => window.open(LinkedInLink)}
    >
      <div className="lets-connect-inner">
        <div className="lets-connect-row">
          <p className="lets-connect-text">
            Let's
          </p>
          <img src={arrowUp} alt="arrow up" className="arrow-icon" />
        </div>
        <div className="lets-connect-row">
          <p className="lets-connect-text">
            Connect
          </p>
        </div>
      </div>
    </button>
  );


export default LetsConnect;
