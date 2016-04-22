import React, {Component} from 'react';
import '../../sass/index.scss';
import FontAwesome from 'react-fontawesome';

export default class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  messageTime (messageTimeEpoch) {
    var messageDay = new Date(messageTimeEpoch),
        h = messageDay.getHours(),
        m = messageDay.getMinutes(),
        ampm = h < 12 ? 'AM': 'PM';
    return( h + ":" + m + " " +ampm);
  };

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
              <p className="notification-group">{newMessage.category}</p>
            </div>
            <p className="notification-item">
              {newMessage.message}
            </p>
          </div>
        </li>
      );
    });
 var self = this;
    var messages = this.props.oldNotifications.map(function (currentMessage) {
      return (
        <li key={currentMessage.id}>
          <div className={currentMessage.read ? 'leftDiv hideDiv' : 'leftDiv'}>
            <FontAwesome name="fa fa-circle"/>
          </div>
          <div className="rightDiv">
            <div className="header">
              <p className="notification-time">{self.messageTime(currentMessage.date)}</p>
              <p className="notification-group">{currentMessage.category}</p>
            </div>
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
