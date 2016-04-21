import React, {Component} from 'react';
import '../sass/index.scss';
import FontAwesome from 'react-fontawesome';
import NotificationDropdown from '../scripts/NotificationDropdown';
import BellComponent from './component/BellComponent';

export default class SassPlayground extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.bellClass = "bell";
        this.unReadMessageNum = 1;
        this.toggleDropdown = this.toggleDropdown.bind(this);
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
    }

    render() {
        return (
            <div className="notification-center">
                <div className="topbar">
                    <img className="logotype" src="../images/logotype.svg" />
                    {this.state.visible || this.unReadMessageNum === 0 ? null :
                    <div className="bell-label">{this.unReadMessageNum}</div>}
                    <FontAwesome onClick={this.toggleDropdown} name="fa fa-bell" className={this.bellClass}/>
                    {this.state.visible ? <BellComponent/> : null}
                </div>
            </div>
        )
    }
};
