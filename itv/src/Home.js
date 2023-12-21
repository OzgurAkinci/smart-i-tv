import React, { Component } from 'react';
import {Footer} from "./components/Footer/Footer";
import {Poster} from "./components/Poster/Poster"


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            macAddress: '0.0.0.0'
        };
    }

    render() {
        return (
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'container-itv'}>
                        <div className={'col-md-12 top-notification-area text-right pt-2 text-muted'}>
                            You're focused on: {this.props.currentFocusPath},
                            Your mac address: {this.state.macAddress}
                        </div>
                        <div className='col-md-12 title text-center text-muted'>SMART-i TV</div>
                        <div className='col-md-12'>

                        </div>

                        <Footer {...this.props} currentFocusPath={this.props.currentFocusPath}/>
                    </div>
                </div>
            </div>
        );
    }
}
