import React from 'react';
import './drink.css';
function Drink(props) {
  console.log(props.drink);

  let { drink } = props;

  let drinkItem;

  if (drink !== null) {
    drinkItem = (
      <div className='drink-item'>
        <div className='item-header'>
          <div className='item-img'>
            <img src={drink.strDrinkThumb} alt='' />
          </div>
          <div className='item-intro'>
            <div className='item-name'>
              <h1>{drink.strDrink}</h1>
            </div>
          
          </div>
        </div>
      <div className="item-content">
        <div className='alco  item-gap'>
              
                <h2>Alcoholic</h2>
                <p>
                {drink.strAlcoholic}   </p> 
             
              
               
             
            </div>
            <div className="catego item-gap">
               <h2>Category</h2> <p>{drink.strCategory}</p>
            </div>
        <div className='item-glass item-gap'>
          <span>
            <h2>Glass</h2>
          </span>
          <span>{drink.strGlass}</span>
        </div>

        <div className='item-ingredients item-gap'>
          <h2>Ingredients</h2>
          <p>{drink.strIngredient1}</p>
          <p>{drink.strIngredient2}</p>
          <p>{drink.strIngredient3}</p>
          <p>{drink.strIngredient4}</p>
          <p>{drink.strIngredient5}</p>
          <p>{drink.strIngredient6}</p>
          <p>{drink.strIngredient7}</p>
          <p>{drink.strIngredient8}</p>
          <p>{drink.strIngredient9}</p>
          <p>{drink.strIngredient10}</p>
          <p>{drink.strIngredient11}</p>
          <p>{drink.strIngredient12}</p>
          <p>{drink.strIngredient13}</p>
          <p>{drink.strIngredient14}</p>
          <p>{drink.strIngredient15}</p>
        </div>

        <div className='item-measure item-gap '>
          <h2>Measure</h2>
          <p>{drink.strMeasure1}</p>
          <p>{drink.strMeasure2}</p>
          <p>{drink.strMeasure3}</p>
          <p>{drink.strMeasure4}</p>
          <p>{drink.strMeasure5}</p>
          <p>{drink.strMeasure6}</p>
          <p>{drink.strMeasure7}</p>
          <p>{drink.strMeasure8}</p>
          <p>{drink.strMeasure9}</p>
          <p>{drink.strMeasure10}</p>
          <p>{drink.strMeasure11}</p>
          <p>{drink.strMeasure12}</p>
          <p>{drink.strMeasure13}</p>
          <p>{drink.strMeasure14}</p>
          <p>{drink.strMeasure15}</p>
        </div>
        <div className=' item-instruction'>
          <h2>Instructions</h2>
          <p>{drink.strInstructions}</p>
        </div>
        </div>
      </div>
    );
  }
  return <div className='drink'>{drinkItem}</div>;
}

export default Drink;
