import React from 'react';
import { connect } from 'react-redux';


import { fetchCocktails } from '../../redux/actions';
import './cocktailApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DrinksList from './List';
import LiveSeacrh from './LiveSearch';
class CocktailApp extends React.Component {

    state = {
        isLoad: false,
        search: '',
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

    handleChange = (e) => {
    //   const finedCocktail = this.props.cocktails.find(el => el.strDrink.toLowerCase().includes(e.target.value));
        this.setState({ search: e.target.value});
    }

    getDrinks = () => {
        let copyDrinks = [...this.props.cocktails];
        if (this.state.search !== '') {
            copyDrinks = copyDrinks.filter(item => item.strDrink.toLowerCase().includes(this.state.search.toLowerCase()));
        }
        return copyDrinks;
    }
    

    render() {
        console.log(this.state.search);
        const currentDrinks = this.getDrinks();
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
                <>
                <LiveSeacrh handleChange={this.handleChange}/>
                <DrinksList drinks={currentDrinks}/>
                </>
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