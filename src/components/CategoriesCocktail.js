import React, { Component } from 'react'
import request from 'superagent'
import { Link } from 'react-router-dom'

export default class CategoriesCocktail extends Component {
  state = {
    cocktailCategories: null
  }

  componentDidMount(){
    request
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(response => {
          console.log(Object.values(response.body))
          this.updateCategories(Object.values(response.body)[0])
      })
      .catch(console.error);
  }

  updateCategories(categories){
    const strCategories = []
    console.log('Update CAtegories', categories[0]['strCategory'])

    categories.map(categ => strCategories.push(categ['strCategory']))

    console.log('STR CATEGORIES', strCategories)

    this.setState({
      cocktailCategories: strCategories
    })
  }

  render() {
    return (
      <div>
        <h1>I am Categories Cocktail Component</h1>
        <ul>
        { !this.state.cocktailCategories ? <p>Loading...</p> : this.state.cocktailCategories.map(cat => {
          return (
                <li key={cat}>
                  <Link to={ `/cocktails/${cat}` }>{cat}</Link>
                </li>
                )
            })
        }
        </ul>
      </div>
    )
  }
}
