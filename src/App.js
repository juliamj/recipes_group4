import React from 'react';
import './App.css';
import { Client } from './Client';
import Recipes from './components/Recipes';

class App extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    Client.getEntries()  //call to contentful
      .then((response) => {
        console.log(response)  //response back
        this.setState({
          articles: response.items
        })
      })
      .catch(console.error)
  }
  render() {
    return (
      <div className="App">
        <div className='container'>
          <header class="m-4 mx-auto">

          <nav class="navbar navbar-expand-lg navbar-light bg-danger">
            <a class="navbar-brand text-uppercase text-warning" href="#RecipesBlogHome">Juicy Recipes <i class="fas fa-lemon"></i></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor03">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#Recipes">Recipes<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#About">About</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                <button class="btn btn-secondary my-2 my-sm-0 bg-warning" type="submit">Search</button>
              </form>
            </div>

          </nav>
          </header>
          <main><div className='wrapper'>
            <Recipes recipes={this.state.articles} />
          </div></main>
        </div>
      </div>
    );
  }
}
export default App;
