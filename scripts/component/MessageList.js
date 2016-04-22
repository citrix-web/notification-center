import React, {Component} from 'react';
import '../../sass/index.scss';
import FontAwesome from 'react-fontawesome';

export default class MessageList extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    var newMessage = this.props.newNotifications.map(function (newMessage) {
      return (
        <li className={newMessage.category}>
          <div className={newMessage.read ? 'leftDiv hideDiv' : 'leftDiv'}>
            <FontAwesome name="fa fa-circle"/>
          </div>
          <div className="rightDiv">
            <div className="header">
              <p className="notification-time">Just Now</p>
              <p className="notification-group">{newMessage.group}</p>
            </div>
            <span>{newMessage.category}</span>
            <p className="notification-item">
              {newMessage.message}
            </p>
          </div>
        </li>
      );
    });

    var messages = this.props.oldNotifications.map(function (currentMessage) {
      return (
        <li key={currentMessage.id}>
          <div className={currentMessage.read ? 'leftDiv hideDiv' : 'leftDiv'}>
            <FontAwesome name="fa fa-circle"/>
          </div>
          <div className="rightDiv">
            <div className="header">
              <p className="notification-time">{currentMessage.messageTime}</p>
              <p className="notification-group">{currentMessage.group}</p>
            </div>
            <span>{currentMessage.category}</span>
            <p className="notification-item">
              {currentMessage.message}
            </p>
          </div>
        </li>
      )
    });

    return (
      <ul>
        {newMessage}
        {messages}
      </ul>
    );
  }
};
