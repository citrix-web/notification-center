import React, {Component} from 'react';
import MessageListContainer from './MessageListContainer';
import MessageListFooter from './MessageListFooter';
import '../../sass/index.scss';
import FontAwesome from 'react-fontawesome';

export default class NotificationContainer extends Component {
    render() {
        return (
            <div className="notification-dropdown">
            <div className="arrow-up"></div>
            <MessageListContainer />
            <MessageListFooter />
            </div>
    );
    }
};