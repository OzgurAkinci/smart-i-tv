import React from 'react';
import ReactTV from 'react-tv';
import {withFocusable, withNavigation} from 'react-tv-navigation';
import {Footer} from "./components/Footer/Footer";

const Poster = ({focused, setFocus, focusPath, src}) => {
    focused = (focused) ? 'focused' : 'unfocused'
    return (
        <div className={focused + ' poster col-md-1 br1'} onClick={() => {
            setFocus()
        }}>
            <img src={src}/>
        </div>
    )
}


const FocusablePoster = withFocusable(Poster)


export default class ChannelCategories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }


    render() {
        return (
            <div class={'container-fluid'}>
                <div className={'row'}>
                    <div className={'container-itv'}>
                        <div className={'col-md-12 text-center top-notification-area'}>Your mac
                            address: {this.state.macAddress}</div>

                        <div className='col-md-12 title text-center'>SMARTiX</div>
                        <div className='col-md-12 focus-info text-center'>You're focused
                            on: {this.props.currentFocusPath}</div>
                        <div className='col-md-12 posters'>
                            <FocusablePoster focusPath='focusable-poster-1'
                                             src={'https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Film_poster.jpg'}/>
                            <FocusablePoster focusPath='focusable-poster-2'
                                             src={'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg'}/>
                            <FocusablePoster focusPath='focusable-poster-3'
                                             src={'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg'}/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const AppWithNavigation = withNavigation(ChannelCategories)

ReactTV.render(<AppWithNavigation/>, document.querySelector('#root'));
