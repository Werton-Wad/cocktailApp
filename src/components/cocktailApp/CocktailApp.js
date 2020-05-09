import React from 'react';
import { connect } from 'react-redux';

import { fetchCocktails } from '../../redux/actions';
import './cocktailApp.css';
import DrinksList from './List';
class CocktailApp extends React.Component {

    state = {
        isLoad: false,
    }

    handleClick = (e) => {
        const activeLetter = e.target.textContent;
       this.props.fetchCocktails(activeLetter);
        this.setState(
            {  
                isLoad: true,
            }
        );
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
                {this.state.isLoad ?
                <DrinksList drinks={this.props.cocktails}/>
            :
            ''}
                
           
                
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

  export default connect(mapStateToProps , actions)(CocktailApp);