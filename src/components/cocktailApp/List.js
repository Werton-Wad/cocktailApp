import React from 'react';

const DrinksList = ( { drinks }) => {
    
    const drinksList = drinks.map(el => (
        <li key={el.idDrink} style={{paddingBottom: '5px'}}>
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