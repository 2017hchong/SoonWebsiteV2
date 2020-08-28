import {NavLink} from "react-router-dom";
import './styles/NavBar.css';
import icon from '../images/icon.svg'
import React from "react";
import { slide as Menu } from 'react-burger-menu';

var styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        right: '36px',
        top: '36px'
    },
    bmBurgerBars: {
        background: '#495874'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenu: {
        background: '#FCFCFC',
        padding: '1.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
};
class NavBar extends React.Component {
    render = () => (
        <div id={"navBar"}>
            <div id={"normalNav"}>
                <div id={"logo"}><NavLink exact to='/'><img src={icon} alt={"icon"}></img></NavLink></div>
                <div className={"navElem"}>
                    <NavLink exact activeClassName="current" to='/events' className={"page"}>events</NavLink>
                    <NavLink exact activeClassName="current" to='/about' className={"page"}>about us</NavLink>
                    <NavLink exact activeClassName="current" to='/resources' className={"page"}>resources</NavLink>
                    <NavLink exact activeClassName="current" to='/getInvolved' className={"page getInvolvedLink"}>Get Involved</NavLink>
                </div>
            </div>
            <div id={"hamburger"}>
                <Menu right styles={styles}>
                    <div id={"logo"}><NavLink exact to='/'><img src={icon} alt={"icon"}></img></NavLink></div>
                    <div id={"space"}/>
                    <NavLink exact activeClassName="current" to='/events' className={"page"}>events</NavLink>
                    <NavLink exact activeClassName="current" to='/about' className={"page"}>about us</NavLink>
                    <NavLink exact activeClassName="current" to='/resources' className={"page"}>resources</NavLink>
                    <NavLink exact activeClassName="current" to='/getInvolved' className={"page getInvolvedLink"}>Get Involved</NavLink>
                </Menu>
            </div>
        </div>
    );
}

export default NavBar;