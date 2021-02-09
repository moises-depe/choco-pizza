import React from 'react';
import Vanessa from './assets/van-pic.png'

export default class MyFooter extends React.Component {
    render() {
        return (

            <div className="foot">
                <img alt="vanessa" src={Vanessa} />
                <h4>Vanessa Stevenson</h4>
                <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
            </div>
        )
    }

}