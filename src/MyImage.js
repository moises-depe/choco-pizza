import React from 'react';
import ChocoPizza from './assets/choco-pizza.png';

export default class MyImg extends React.Component {
    render() {
        return (
            <div>
                <h1>Chocolate Pizza</h1>
                <h6>Posted on February 8, 2021</h6>
                <img alt='choco pizza' src={ChocoPizza}></img>
            </div>
        )


    }

}