import React, {Component} from 'react';
import NotificationContainer from './NotificationContainer';

export default class BellComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NotificationContainer newNotifications={this.props.newNotifications}/>
      </div>
    );
  }
};