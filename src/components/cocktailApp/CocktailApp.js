import React from 'react';
import { connect } from 'react-redux';


import { fetchCocktails, fetchCocktail } from '../../redux/actions';
import './cocktailApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DrinksList from './List';
import LiveSeacrh from './LiveSearch';
import DrinkItem from './Item';
class CocktailApp extends React.Component {

    state = {
        isLoad: false,
        search: '',
        isLoadItem: false,
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
        this.setState({ search: e.target.value});
    }

    getDrinks = () => {
        let copyDrinks = [...this.props.cocktails];
        if (this.state.search !== '') {
            copyDrinks = copyDrinks.filter(item => item.strDrink.toLowerCase().includes(this.state.search.toLowerCase()));
        }
        return copyDrinks;
    }
    handleClickCocktail = (e) => {
        this.props.fetchCocktail(e.target.getAttribute('data'));
        // console.log(e.target.textContent);
        this.setState({ isLoadItem: true });
        
    }

    render() {
        console.log(this.props.item);
        
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
                <div className="main__content">
                  <DrinksList drinks={currentDrinks} handleClickCocktail={this.handleClickCocktail}/>
                  {this.state.isLoadItem && <DrinkItem drink={this.props.cocktail}/>} 
                   
                </div>
                
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
      cocktail: state.cocktail.item,
    };
  }

  const actions = { fetchCocktails, fetchCocktail };

  export default connect(mapStateToProps , actions)(CocktailApp);