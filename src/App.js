import React from 'react';
import logo from './logo.svg';
import './App.css';
import CategoriesCocktail from './components/CategoriesCocktail'
import ListCocktails from './components/ListCocktails'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        <Route exact path="/" component={CategoriesCocktail} />
        <Route path="/cocktails/:categories" component={ListCocktails} />
      </main>
    </div>
  );
}

export default App;
