import React, { Component } from 'react';
import Header from '../header/Header';
import axios from 'axios';
import Drinks from '../drinks/Drinks';
import Footer from '../footer/Footer';
import Drink from '../drink/Drink';
export class Main extends Component {
  state = {
    inputSearchText: '',
    drinks: [],
    displayDrinksPage: false,
    displayDrinkDetail: false,
    drink: null
  };

  onSearch = e => {
    this.setState(
      {
        inputSearchText: e.target.value
      },
      () => {
        console.log(this.state.inputSearchText);
        if (this.state.inputSearchText !== '') {
          axios
            .get(
              `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${
                this.state.inputSearchText
              }`
            )
            .then(res =>
              this.setState({
                drinks: res.data.drinks,
                displayDrinksPage: true,
                displayDrinkDetail: false
              })
            )
            .catch(err => console.log(err));
        } else {
          return;
        }
      }
    );
  };

  drinkClicked = id => {
    this.setState(
      {
        displayDrinksPage: false,
        displayDrinkDetail: true
      },
      () => {
        axios
          .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then(res => this.setState({ drink: res.data.drinks[0] }))
          .catch(err => console.log(err));
      }
    );
  };

  render() {
    let drinksPage;
    let drinkDetailPage;
    if (this.state.drinks && this.state.displayDrinksPage) {
      drinksPage = (
        <Drinks drinkClicked={this.drinkClicked} drinks={this.state.drinks} />
      );
    }
    if (this.state.displayDrinkDetail) {
      drinkDetailPage = <Drink drink={this.state.drink} />;
    }
    return (
      <div>
        <Header
          inputSearchText={this.state.inputSearchText}
          onSearch={this.onSearch}
        />
        {drinksPage}
        {drinkDetailPage}
        <Footer />
      </div>
    );
  }
}

export default Main;
