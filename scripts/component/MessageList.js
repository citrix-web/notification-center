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
        return [{"messageId":"10001", "messageTime": "3:10 PM", "group": "GoToMeeting", "read": true, "message": "GoToMeeting released a new feature called dialout."},
                {"messageId":"10002", "messageTime": "4:10 PM", "group": "Everyone", "read": true, "message": "Everyone released a new feature called dialout."},
                {"messageId":"10003", "messageTime": "5:10 PM", "group": "Instant Join", "read": false, "message": "Instant Join released a new feature called dialout."},
                {"messageId":"10004", "messageTime": "6:10 PM", "group": "Hack Week", "read": false, "message": "Hack Week released a new feature called dialout."},
                {"messageId":"10005", "messageTime": "7:10 PM", "group": "Everyone", "read": true, "message": "Everyone released a new feature called dialout."},
                {"messageId":"10006", "messageTime": "8:10 PM", "group": "Instant Join", "read": true, "message": "Instant Join released a new feature called dialout."},
                {"messageId":"10007", "messageTime": "9:10 PM", "group": "GoToMeeting", "read": true, "message": "GoToMeeting released a new feature called dialout."}
               ];
    };

    render() {
        var newMessage = (
            Object.keys(this.props.newNotification).length ?
                <li className={this.props.newNotification.category}>
                    <div className= {this.props.read ? 'leftDiv hideDiv' : 'leftDiv'}>
                        <FontAwesome name="fa fa-circle"/>
                    </div>
                    <div className="rightDiv">
                        <div className="header">
                            <p className="notification-time">Just Now</p>
                            <p className="notification-group">{this.props.newNotification.group}</p>
                        </div>
                        <p className="notification-item">
                            {this.props.newNotification.message}
                        </p>
                    </div>
                </li> :
            null
        );

        var messages = this.state.messages.map(function (currentMessage) {
            return (
                <li key={currentMessage.messageId}>
                    <div className= {currentMessage.read ? 'leftDiv hideDiv' : 'leftDiv'}>
                        <FontAwesome name="fa fa-circle"/>
                    </div>
                    <div className="rightDiv">
                        <div className="header">
                            <p className="notification-time">{currentMessage.messageTime}</p>
                            <p className="notification-group">{currentMessage.group}</p>
                        </div>
                        <p className="notification-item">
                            {currentMessage.message}
                        </p>
                    </div>
                </li>
            )
        });

        return (
            <ul>
                {newMessage}
                {messages}
            </ul>
        );
    }
};