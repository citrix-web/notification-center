import React, {Component} from 'react';
import '../sass/index.scss';
import FontAwesome from 'react-fontawesome';
import NotificationDropdown from '../scripts/NotificationDropdown';

export default class SassPlayground extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        return (
            <div className="notification-center">
                <FontAwesome onClick={this.toggleDropdown} name="fa fa-bell"/>
                {this.state.visible ? <NotificationDropdown/> : null}
            </div>
        )
    }
};