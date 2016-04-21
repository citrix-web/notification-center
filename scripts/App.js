import React, {Component} from 'react';
import NotificationCenter from './NotificationCenter';

export default class App extends Component {
  componentDidMount() {
    var socket = io.connect('http://localhost:3000');
    socket.on('connect', function(data) {
      socket.on('messages', function(data) {
        console.log(data);
      });
    });
  }

  render() {
    return (
      <div>
        <NotificationCenter/>
      </div>
    );
  }
}
