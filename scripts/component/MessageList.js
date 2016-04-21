import React, {Component} from 'react';
import '../../sass/index.scss';
import FontAwesome from 'react-fontawesome';
import superagent from 'superagent';

export default class MessageList extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.messages = this.loadMessages();
  }

  loadMessages() {
    superagent.get('http://localhost:3000/api/user/44444/read')
      .end((err, response) => {
        if (response.status >= 200 && response.status < 300) {
          console.log('All previous messages', response);
        } else {
          const error = new Error(response.statusText);
          console.log('Error getting messages', error);
          error.response = response;
          throw error;
        }
      });

    // << to be replaced by the actual redux call >>
    return [{
      "messageTime": "3:10 PM",
      "recieverGroup": "GoToMeeting",
      "category": "positive",
      "message": "GoToMeeting released a new feature called dialout."
    },
      {
        "messageTime": "4:10 PM",
        "recieverGroup": "Everyone",
        "category": "info",
        "message": "Everyone released a new feature called dialout."
      },
      {
        "messageTime": "5:10 PM",
        "recieverGroup": "Instant Join",
        "category": "warning",
        "message": "Instant Join released a new feature called dialout."
      },
      {
        "messageTime": "6:10 PM",
        "recieverGroup": "Hack Week",
        "category": "promo",
        "message": "Hack Week released a new feature called dialout."
      },
      {
        "messageTime": "4:10 PM",
        "recieverGroup": "Everyone",
        "category": "info",
        "message": "Everyone released a new feature called dialout."
      },
      {
        "messageTime": "5:10 PM",
        "recieverGroup": "Instant Join",
        "category": "warning",
        "message": "Instant Join released a new feature called dialout."
      },
      {
        "messageTime": "3:10 PM",
        "recieverGroup": "GoToMeeting",
        "category": "positive",
        "message": "GoToMeeting released a new feature called dialout."
      }
    ];
  };


  render() {
    var newMessage = (
      Object.keys(this.props.newNotification).length ?
        <li className={this.props.newNotification.category}>
          <div className="header">
            <p className="notification-time">Just Now</p>
            <p className="notification-group">{this.props.newNotification.group}</p>
          </div>
          <p className="notification-item">
            {this.props.newNotification.message}
          </p>
        </li> :
        null
    );

    var messages = this.state.messages.map(function (currentMessage) {
      return (
        <li className={currentMessage.category}>
          <div className="header">
            <p className="notification-time">{currentMessage.messageTime}</p>
            <p className="notification-group">{currentMessage.recieverGroup}</p>
          </div>
          <p className="notification-item">
            {currentMessage.message}
          </p>
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
