import React, {Component} from 'react';
import Axios from 'axios';
import './Notifications.css';
import DisplayNotifications from './DisplayNotifications';


class Notifications extends Component{
  constructor(){
    super();
    this.state = {
      notifications: [],
      notificationFormTest : false,

      //FORM
      notification: '',
      date:''
    }
  }
componentDidMount(){
  Axios.get('api/notifications').then((response)=> {
    this.setState({
      notifications: response.data.reverse()
    });
  })
}

deleteNotification =()=>{
  Axios.post('api/notifications').then((response)=> {
    this.setState({
      notifications: response.data.reverse()
    });
  })
}

handleSubmit = (e) =>{
  e.preventDefault();
  let {notification, date} = this.state;
  console.log(notification , date);
Axios.post('/api/notifications', {
  notification,
  date, 
}).then((response) =>{
  this.setState({notifications: response.data.reverse()})
  this.formToggle();
})
}
deleteNotification = (id)=>{
  Axios.delete(`/api/notifications/${id}`).then(response =>{
    this.setState({notifications: response.data.reverse()})
  });
}


handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value});
}

 formToggle = ()=>{ 
  this.setState({
    notificationFormTest: !this.state.notificationFormTest
  })
 }

  render(){
    let {notifications, notificationFormTest} = this.state;
    return(
      <section className="notificationDiv">
        <div className="notificationHeaderDiv">
        <h1 className="notificationHeader">Notifications</h1>
        <i className="far fa-plus-square plusSign" onClick={this.formToggle} ></i>
       
        </div>
        {notificationFormTest?<form className="notificationForm">
          <input onChange={this.handleChange} name="date" type="date" required></input>
          <textarea onChange={this.handleChange} name="notification" required></textarea>
          <button onClick={this.handleSubmit}>Submit Notification</button>
        </form>:null}
        {notifications.map(notification =>{
          return <DisplayNotifications
          key={notification.id}
          deleteNotification={this.deleteNotification}
          id={notification.id}
          date={notification.date}
          notification={notification.notification}
          />
        })}
        
      </section>
    )
  }
}

export default Notifications;

