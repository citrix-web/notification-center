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
            this.props.read();
        } else {
            this.bellClass = "bell selected";
        }

        if (this.props.newNotifications && this.state.visible) {
          var self = this;
          this.props.newNotifications.map(function(notif) {
            if(!notif.read) {
              self.markRead(notif);
            }
          });
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
        let bellClasses = (this.props.newNotifications && this.props.newNotifications.length) ?
          this.bellClass + ' new-message' : this.bellClass;

        return (
            <div className="notification-center">
                <div className="topbar gotoassist">
                    <img className="logotype" src="../images/logotype.svg" />
                    {!this.state.visible && this.props.newNotifications.length ?
                    <div className="bell-label new-message">{this.props.newNotifications.length}</div> :
                    null}
                    <FontAwesome onClick={this.toggleDropdown} name="fa fa-bell" className={bellClasses}/>
                    {this.state.visible ? <BellComponent newNotifications={this.props.newNotifications}
                    oldNotifications={this.props.oldNotifications} read={this.props.read}/> : null}
                </div>
                <div className="main-content">
                  <h1 className="gotoassist">My meetings</h1>
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
