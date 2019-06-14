import React from 'react';
import './drinks.css';

function Drinks(props) {
  return (
    <div className='drinksPage'>
      {props.drinks.map(drink => (
        <div
          key={drink.idDrink}
          className='drinkBox'
          onClick={() => props.drinkClicked(drink.idDrink)}
        >
          <div className='content'>
            <div className='drink-img'>
              <img src={drink.strDrinkThumb} alt='' />
            </div>
            <div className='drink-name'>
              <p>{drink.strDrink}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Drinks;
