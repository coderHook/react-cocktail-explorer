import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

export default class ListCocktails extends Component {
  state = {
    cocktails: null
  }
  componentDidMount(){
    request
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${this.props.match.params.categories}`)
      .then(response => {
        console.log(response.body.drinks[0])
        this.updateCocktails(response.body.drinks)
      })
      .catch(console.error)
  }

  updateCocktails(cocktails){
    const arrCocktails = []

    cocktails.map(cocktail => arrCocktails.push(cocktail))

    console.log('arrCocktails', arrCocktails);

    this.setState({
      cocktails: arrCocktails
    })
  }

  render() {
    return (
      <div>
        <h1>I am a cocktail list of this category</h1>
        { this.props.match.params.categories }
        <br></br>
        <br></br>
        <Link to="/">Go back to the Index</Link>
        <br></br>
        <ul>
        {!this.state.cocktails ? <p>Loading Cocktails...</p>: this.state.cocktails.map(cocktail => 
        <li key={cocktail.idDrink}>
          <img src={cocktail.strDrinkThumb} />
          {cocktail.strDrink} 
          </li>)} 
        </ul>
        
      </div>
    )
  }
}
