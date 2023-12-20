import React, { Component } from 'react';
import {withFocusable} from "react-tv-navigation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { faHome, faList, faPlay, faKey, faQuestion, faClose} from '@fortawesome/free-solid-svg-icons'

const FooterItem = ({focused, setFocus, focusPath, title, icon}) => {
    focused = (focused) ? 'focused' : 'unfocused'
    return (
        <div onClick={() => { setFocus() }} className={focused + ' col-md-2 br1 footer-item text-center'}>
            <FontAwesomeIcon size="2xl" icon={icon} />
            <p>{title}</p>
        </div>
    )
}
const FooterItemFC = withFocusable(FooterItem)

export class Footer extends Component {


    render() {
        return(
            <div className='footer'>
                <div className={'row'}>
                    <FooterItemFC onEnterPress={() => console.log('enter key was pressed')} focusPath='focusable-item-1' title={'Home'} icon={faHome} />
                    <FooterItemFC onEnterPress={() => console.log('enter key was pressed')} focusPath='focusable-item-2' title={'Channels'} icon={faList}/>
                    <FooterItemFC onEnterPress={() => console.log('enter key was pressed')} focusPath='focusable-item-3' title={'Movies'} icon={faPlay}/>
                    <FooterItemFC onEnterPress={() => console.log('enter key was pressed')} focusPath='focusable-item-4' title={'Configurations'} icon={faKey}/>
                    <FooterItemFC onEnterPress={() => console.log('enter key was pressed')} focusPath='focusable-item-5' title={'Help'} icon={faQuestion}/>
                    <FooterItemFC onEnterPress={() => console.log('enter key was pressed')} focusPath='focusable-item-6' title={'Exit'} icon={faClose}/>
                </div>
            </div>
        )
    }

}
