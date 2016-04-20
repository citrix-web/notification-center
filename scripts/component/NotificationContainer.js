import React, {Component} from 'react';
import MessageListContainer from './MessageListContainer';
import MessageListFooter from './MessageListFooter';

export default class NotificationContainer extends Component {
    render() {
        return (
            <div>
            <MessageListContainer />
            <MessageListFooter />
            </div>
    );
    }
};