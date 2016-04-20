import React, {Component} from 'react';

export default class MessageListFooter extends Component {
    constructor(props) {
        super(props);
        this.onSeeAllClick = this.onSeeAllClick.bind(this);
    }
    onSeeAllClick () {
        window.open('www.google.com');
    }
    render () {
        return (
            <div>
            <a onClick={this.onSeeAllClick}>
                See All
            </a>
            </div>
        );
    }
};