import React from 'react';
import { connect } from 'react-redux';

import { fetchCocktails } from '../../redux/actions';
import './cocktailApp.css';

class CocktailApp extends React.Component {

    // state = {
    //     activeLetter: '',
    // }

    handleClick = (e) => {
       const activeLetter = e.target.textContent;
      const ka =  this.props.fetchCocktails(activeLetter);
      console.log(ka);
      
    }

    render() {
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

        const buttons = alphabet.map((el, i) => (
            <div onClick={this.handleClick} className="letter-btns" key={i}>{el}</div>
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
}


const mapStateToProps = (state) => {
    return {
      cocktails: state.cocktail.list,
      isLoaded: state.cocktail.isListLoaded,
    };
  }

  const actions = { fetchCocktails };

  export default connect(null, actions)(CocktailApp);