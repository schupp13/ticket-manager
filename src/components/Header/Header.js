import React from 'react';
import './Header.css';
import Status from '../Status/Status';

 export default function Header(props){
   return(
<header className="header">
  <i className="fas fa-frog frog"></i>
  <h1 className="headerTitle">Support Squad - Ticket Manager</h1>
  <div className="statusHeader">
  </div>
</header>
   )
}

