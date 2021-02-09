import React from 'react';
// import style from './App.css';
import MyHeader from './MyHeader.js';
import MyIngredients from './MyIngredients.js';
import MyFooter from './MyFooter.js';
import MyImg from './MyImage.js';
import MyReceipe from './MyRecipe.js';

// import style from './App.css';



export default class App extends React.Component {
  render() {
    return (
      <div>
        <MyHeader />
        <MyImg />
        <MyReceipe />
        <MyIngredients />
        <MyFooter />
      </div>
    )
  }

}





