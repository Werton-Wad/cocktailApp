import React from 'react';

const DrinksList = ( props ) => {
    const { drinks, handleClickCocktail } = props;
    const drinksList = drinks.map(el => (
        <li key={el.idDrink} data={el.idDrink} onClick={(e) => handleClickCocktail(e)} style={{paddingBottom: '5px'}}>
            {el.idDrink} |
            {el.strDrink}
        </li>
    ));
    return(
       <ul className="drinks__wrapper">
           {drinksList}
       </ul>
    )
}

export default DrinksList;