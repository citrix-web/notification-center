import React, {Component} from 'react';
import '../sass/index.scss';
import FontAwesome from 'react-fontawesome';


export default class NotificationDropdown extends Component {
    render() {
        return (
            <div className="notification-dropdown clearfix">
                <div className="arrow-up"></div>
                <ul>
                    <li className="positive">
                        <div className="header">
                            <p className="notification-time">03:12 PM</p>
                            <p className="notification-group">GoToMeeting</p>
                        </div>
                        <p className="notification-item">
                            <FontAwesome className="positive" name="fa fa-star"/> <span />
                            GoToMeeting released a new feature called dialout.
                        </p>
                    </li>

                    <li className="info">
                        <div className="header">
                            <p className="notification-time">04:55 PM</p>
                            <p className="notification-group">Everyone</p>
                        </div>
                        <p className="notification-item">
                            <FontAwesome className="info" name="fa fa-info-circle"/> <span />
                            Dialout can let the users get the call back without input tedious PINs.
                        </p>
                    </li>

                    <li className="warning">
                        <div className="header">
                            <p className="notification-time">06:00 AM</p>
                            <p className="notification-group">Instant Join</p>
                        </div>
                        <p className="notification-item">
                            <FontAwesome className="warning" name="fa fa-exclamation-triangle"/> <span />
                            Be careful, your file will be deleted in an hour.
                        </p>
                    </li>

                    <li className="promo">
                        <div className="header">
                            <p className="notification-time">03:00 PM</p>
                            <p className="notification-group">Hackweek</p>
                        </div>
                        <p className="notification-item">
                            <FontAwesome className="promo" name="fa fa-usd"/> <span />
                            Ninad Thepade got a promotion.
                        </p>
                    </li>

                    <li className="positive">
                        <div className="header">
                            <p className="notification-time">03:45 PM</p>
                            <p className="notification-group">Everyone</p>
                        </div>
                        <p className="notification-item">
                            <FontAwesome className="positive" name="fa fa-star"/> <span />
                            GoToMeeting released a new feature called dialout.
                        </p>
                    </li>

                    <li className="info">
                        <div className="header">
                            <p className="notification-time">03:23 AM</p>
                            <p className="notification-group">Everyone</p>
                        </div>
                        <p className="notification-item">
                            <FontAwesome className="info" name="fa fa-info-circle"/> <span />
                            Dialout can let the users get the call back without input tedious PINs.
                        </p>
                    </li>

                    <li className="warning">
                        <div className="header">
                            <p className="notification-time">09:00 AM</p>
                            <p className="notification-group">GoToMeeting</p>
                        </div>
                        <p className="notification-item">
                            <FontAwesome className="warning" name="fa fa-exclamation-triangle"/> <span />
                            Be careful, your file will be deleted in an hour.
                        </p>
                    </li>

                    <li className="promo">
                        <div className="header">
                            <p className="notification-time">11:00 PM</p>
                            <p className="notification-group">Everyone</p>
                        </div>
                        <p className="notification-item">
                            <FontAwesome className="promo" name="fa fa-usd"/> <span />
                            Ninad Thepade got a promotion.
                        </p>
                    </li>
                </ul>
                <button>See All</button>
            </div>
        )
    }
};