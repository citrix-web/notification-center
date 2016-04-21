import React, {Component} from 'react';
import '../../sass/index.scss';
import FontAwesome from 'react-fontawesome';

export default class MessageList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.messages = this.loadMessages();
    }

    loadMessages() {
        // << to be replaced by the actual redux call >>
        return [{"messageTime": "3:10 PM", "recieverGroup": "GoToMeeting", "category": "positive", "message": "GoToMeeting released a new feature called dialout."},
                {"messageTime": "4:10 PM", "recieverGroup": "Everyone", "category": "info", "message": "Everyone released a new feature called dialout."},
                {"messageTime": "5:10 PM", "recieverGroup": "Instant Join", "category": "warning", "message": "Instant Join released a new feature called dialout."},
                {"messageTime": "6:10 PM", "recieverGroup": "Hack Week", "category": "promo", "message": "Hack Week released a new feature called dialout."},
                {"messageTime": "4:10 PM", "recieverGroup": "Everyone", "category": "info", "message": "Everyone released a new feature called dialout."},
                {"messageTime": "5:10 PM", "recieverGroup": "Instant Join", "category": "warning", "message": "Instant Join released a new feature called dialout."},
                {"messageTime": "3:10 PM", "recieverGroup": "GoToMeeting", "category": "positive", "message": "GoToMeeting released a new feature called dialout."}
               ];
      };

    render() {
        var messages = this.state.messages.map(function (currentMessage) {
            return (
                <li className={currentMessage.category}>
                    <div className="header">
                        <p className="notification-time">{currentMessage.messageTime}</p>
                        <p className="notification-group">{currentMessage.recieverGroup}</p>
                    </div>
                    <p className="notification-item">
                        {currentMessage.message}
                    </p>
                </li>
            )
        });

        return React.createElement(
            'ul',
            {},
            messages
        );
    }
};