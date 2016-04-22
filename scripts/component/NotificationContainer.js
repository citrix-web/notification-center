import React, {Component} from 'react';
import MessageListContainer from './MessageListContainer';
import MessageListFooter from './MessageListFooter';
import '../../sass/index.scss';
import FontAwesome from 'react-fontawesome';

export default class NotificationContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="notification-dropdown">
        <div className="arrow-up"></div>
        <MessageListContainer newNotifications={this.props.newNotifications} oldNotifications={this.props.oldNotifications} read={this.props.read}/>
        <MessageListFooter />
      </div>
    );
  }
};
