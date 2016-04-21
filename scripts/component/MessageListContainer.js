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
        <MessageList newNotification={this.props.newNotification} />
      </div>
    );
  }
};