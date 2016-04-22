import React, {Component} from 'react';
import MessageList from './MessageList';
import '../../sass/index.scss';

export default class MessageListContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <MessageList newNotifications={this.props.newNotifications} oldNotifications={this.props.oldNotifications} read={this.props.read}/>
      </div>
    );
  }
};
