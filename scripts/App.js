import React, {Component} from 'react';
import NotificationCenter from './NotificationCenter';
import superagent from 'superagent';
import {uniqBy} from 'lodash';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNotifications: []
    };
    this.onNewNotification = this.onNewNotification.bind(this);
    this.setMessages = this.setMessages.bind(this);
    this.read = this.read.bind(this);
  }

  read() {

    let old = this.state.newNotifications.concat(this.state.oldNotifications);
    old.forEach((notification) => {
      notification.read = true;
    })
    uniqBy(old, 'id');
    this.setState({oldNotifications: old, newNotifications: []});
  }

  onNewNotification(data) {
    let newNotifications = this.state.newNotifications;
    newNotifications.unshift({
      id: data.id,
      message: data.message,
      group: data.group,
      category: data.category,
      read: false
    });

    uniqBy(newNotifications, 'id');
    this.setState({
      newNotifications: newNotifications
    });
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
    uniqBy(setMessages, 'id');

    this.setState({
      oldNotifications: setMessages
    })
  }

  componentDidMount() {
    var self = this;
    var socket = io.connect('http://localhost:3000');
    socket.on('connect', function (data) {
      socket.on('messages', function (data) {
        console.log(data);
        self.onNewNotification({
          id: data.MessageId,
          message: data.Body,
          group: data.MessageAttributes.group.StringValue,
          category: data.MessageAttributes.category.StringValue
        })
      });
    });
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
    return (
      <div>
        <NotificationCenter
          newNotifications={this.state.newNotifications} oldNotifications={this.state.oldNotifications} read={this.read}
        />
      </div>
    );
  }
}
