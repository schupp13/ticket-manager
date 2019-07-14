import React from 'react';
// STYLES FOR THIS COMPONENT ARE LOCATED IN CUSTOMERS.CSS

 const DisplayNotifications = (props) =>{
let {id, date, notification, deleteNotification} = props;
return(
  <article className="notificationArticle">
    <div className="notificationTop">
      <p>{date}</p>
      <p>{id}</p>
      <i className="fas fa-trash-alt" onClick={()=>{deleteNotification(id)}}></i>
    </div> 
    <p className="notification">{notification}</p> 
  </article>
)

 }

 export default DisplayNotifications;