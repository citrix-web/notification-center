import React, {Component} from 'react';
import '../../sass/index.scss';
import FontAwesome from 'react-fontawesome';
import superagent from 'superagent';

export default class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldNotifications: []
    };

    this.setMessages = this.setMessages.bind(this);
  }

  setMessages(messages) {
    var setMessages = messages.map(function (msg) {
      var date = new Date(parseInt(msg.Attributes.SentTimestamp));
      return {
        id: msg.MessageId,
        message: msg.Body,
        group: msg.MessageAttributes ? msg.MessageAttributes.group.StringValue : '',
        category: msg.MessageAttributes ? msg.MessageAttributes.category.StringValue : '',
        date: date,
        read: true
      }
    });
    this.setState({
      oldNotifications: setMessages
    })
  }

  componentWillMount() {
    superagent.get('http://localhost:3000/api/messages?limit=6')
      .end((err, response) => {
        if (response.status >= 200 && response.status < 300) {
          console.log('All previous messages', response);
          this.setMessages(response.body.Items);
        } else {
          const error = new Error(response.statusText);
          console.log('Error getting messages', error);
          error.response = response;
          throw error;
        }
      });
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

    var messages = this.state.oldNotifications.map(function (currentMessage) {
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