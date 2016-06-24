import React from 'react';
import { logo } from '../assets/img'

export class App extends React.Component {
    render() {
        return (
            <a target="_blank" href="http://yoursite.com">
                <img src={logo} alt="Your logo" height="17"/>
                <span>
                    <span>›› </span>Developed by <strong>your name</strong>
                </span>
            </a>
        )
    }
}