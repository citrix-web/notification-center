import React, {Component} from 'react';
import '../sass/index.scss';
import FontAwesome from 'react-fontawesome';
import NotificationDropdown from '../scripts/NotificationDropdown';
import BellComponent from './component/BellComponent';
import superagent from 'superagent';

export default class NotificationCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.bellClass = "bell";
        this.unReadMessageNum = 1;
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.markRead = this.markRead.bind(this);
    }

    toggleDropdown() {
        this.setState({
            visible: !this.state.visible
        });

        if (this.state.visible) {
            this.bellClass = "bell";
        } else {
            this.bellClass = "bell selected";
            this.unReadMessageNum = 0;
        }

        if (this.props.newNotification && !this.props.newNotification.read) {
          this.markRead(this.props.newNotification);
        }
    }

    markRead(notif) {
      superagent.put('http://localhost:3000/api/user/12345/read')
        .send({ messageId: notif.id })
        .end((err,response) => {
          if (response.status >= 200 && response.status < 300) {
            console.log(response);
            //dispatch(sendSuccess(response));
          } else {
            const error = new Error(response.statusText);
            error.response = response;
            //dispatch(sendFailure(error));
            throw error;
          }
        })
    }

    render() {
        return (
            <div className="notification-center">
                <div className="topbar">
                    <img className="logotype" src="../images/logotype.svg" />
                    {this.state.visible || this.unReadMessageNum === 0 ? null :
                    <div className="bell-label">{this.unReadMessageNum}</div>}
                    <FontAwesome onClick={this.toggleDropdown} name="fa fa-bell" className={this.bellClass}/>
                    {this.state.visible ? <BellComponent newNotification={this.props.newNotification}/> : null}
                </div>
                <div className="main-content">
                  <h1>My meetings</h1>
                  <div className="card"></div>
                  <div className="card"></div>
                  <div className="card"></div>
                  <div className="card"></div>
                  <div className="card"></div>
                </div>
            </div>

        )
    }
};
