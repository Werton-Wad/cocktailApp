import React from 'react';

import './cocktailApp.css';
const CocktailApp = () => {

    const alphabet = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ];

    const buttons = alphabet.map((el,i) => (
        <div className="letter-btns" key={i}>{el}</div>
    ))

    return (
        <div className="wrapper">

        <div>
           <p>Нажмите на кнопку чтобы выбрать коктейл!</p>
          {buttons} 
        </div>

        </div>
    );
}

export default CocktailApp;