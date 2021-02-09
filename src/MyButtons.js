import React from 'react';
import facebook from './assets/fb-icon.png'
import instagram from './assets/insta-icon.png'
import twitter from './assets/twit-icon.png'
import google from './assets/gp-icon.png'

export default class MyButtons extends React.Component {
    render() {
        return (
            <div className="icons">
                <img alt="facebook" src={facebook} />
                <img alt="twitter" src={twitter} />
                <img alt="instagram" src={instagram} />
                <img alt="google" src={google} />
            </div>
        )
    }
}
