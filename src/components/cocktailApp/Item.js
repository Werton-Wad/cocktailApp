import React from 'react';

const DrinkItem = (props) => {
const { strDrink, strDrinkThumb, strInstructions} = props.drink; //strMeasure1 - strMeasure15 -- количесто ингрид. 
                                                                // strIngredient1 - strIngredient15 -- их названия

    return (
        <div>
            <div className="wrapper__image">
                <img className="drink__image" src={strDrinkThumb} />
            </div>
            <div>
                <h3>{strDrink}</h3>
                <p>{strInstructions}</p>
            </div>
        </div>
    )
}

export default DrinkItem;