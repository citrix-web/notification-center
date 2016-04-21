import React, {Component} from 'react';
import NotificationCenter from './NotificationCenter';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNotification: {}
    };
    this.onNewNotification = this.onNewNotification.bind(this);
  }

  onNewNotification(data) {
    this.setState({
      newNotification: {
        message: data.message,
        group: data.group,
        category: data.category,
        read: false
      }
    })
  }

  componentDidMount() {
    var self = this;
    var socket = io.connect('http://localhost:3000');
    socket.on('connect', function (data) {
      socket.on('messages', function (data) {
        console.log(data);
        self.onNewNotification({
          message: data[0].Body,
          group: data[0].MessageAttributes.group.StringValue,
          category: data[0].MessageAttributes.category.StringValue
        })
      });
    });
  }

  render() {
    return (
      <div>
        <NotificationCenter
          newNotification={this.state.newNotification}
        />
      </div>
    );
  }
}
