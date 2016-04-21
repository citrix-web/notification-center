import React, {Component} from 'react';
import MessageList from './MessageList';
import '../../sass/index.scss';

export default class MessageListContainer extends Component {
    render() {
        return (
            <div>
                <MessageList />
            </div>
    );
    }
};