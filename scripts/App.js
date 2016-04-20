import React, {Component} from 'react';
import SassPlayground from './SassPlayground';
import BellComponent from './component/BellComponent';


export default class App extends Component {
    render() {
        return (
            <div>
                <SassPlayground/>
                <BellComponent />
            </div>
        );
    }
}
