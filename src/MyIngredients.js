import React from 'react';
import { ingredients } from './ingredients.js';


class ReceipeComponent extends React.Component {
    render() {
        return <div>
            <input type='checkbox'></input>

            <span>{this.props.ReceipeProp.amount}{this.props.ReceipeProp.ingredientName}</span>

        </div>
    }
}

export default class MyIngredients extends React.Component {
    render() {

        const ingredientsList =

            ingredients.map(

                singleIngredient =>

                    <ReceipeComponent ReceipeProp={

                        singleIngredient

                    } />)
        return (
            <>
                {ingredientsList}
            </>
        );
    }
}