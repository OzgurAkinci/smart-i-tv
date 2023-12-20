import React, {Component} from 'react';
import {withFocusable} from "react-tv-navigation";

const PosterElement = ({focused, setFocus, focusPath, src, title}) => {
    focused = (focused) ? 'focused' : 'unfocused'
    return (
        <div className={focused + ' poster col-md-1 br1'} onClick={() => {
            setFocus()
        }}>
            <img src={src} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
const PosterElementFC = withFocusable(PosterElement);


export class Poster extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            focused: this.props.focused,
            setFocus: this.props.setFocus,
            focusPath: this.props.focusPath,
            src: this.props.src,
            title: this.props.title
        }
    }

    render() {
        return (<PosterElementFC focusPath={this.state.focusPath} src={this.state.src} title={this.state.title}/>);
    }
}
