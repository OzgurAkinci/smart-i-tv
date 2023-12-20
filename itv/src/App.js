import React from 'react';
import ReactTV from 'react-tv';
import {withNavigation} from 'react-tv-navigation';
import {Footer} from "./components/Footer/Footer";
import {Poster} from "./components/Poster/Poster"


class App extends React.Component {

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
                        <div className='col-md-12 posters'>
                            <Poster focusPath='focusable-poster-1' title={'Dunkirk_Film_poster'}
                                    src={'https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Film_poster.jpg'}/>
                            <Poster focusPath='focusable-poster-2' title={'Interstellar 1'}
                                    src={'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg'}/>
                            <Poster focusPath='focusable-poster-3' title={'Interstellar 2'}
                                    src={'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg'}/>
                        </div>

                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

const AppWithNavigation = withNavigation(App)

ReactTV.render(<AppWithNavigation/>, document.querySelector('#root'));
