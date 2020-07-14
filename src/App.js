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
        <div className='container m-4'>
          <header>

          <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <span className="navbar-brand text-uppercase text-warning">How Not To Cook <i className="fas fa-lemon"></i></span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#Recipes">Recipes<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#About">About</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-secondary my-2 my-sm-0 bg-warning" type="submit">Search</button>
              </form>
            </div>

          </nav>
          </header>
          <main><div className='wrapper'>
            <Recipes recipes={this.state.articles} />
          </div></main>
        </div>
        {/* FOOTER */}
        {/* <footer class="m-4"> */}
        <div className="container m-4">
        <ul className="nav navbar navbar-expand-lg navbar-light bg-danger">
          <li className="nav-item">
            <span className="nav-link" href="#">Impressum</span>
          </li>
          <li className="nav-item">
            <span className="nav-link" href="#">Copyright 2020</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://github.com/juliamj/recipes_group4"><i className="fab fa-github-square text-warning"></i></a>
          </li>
        </ul>
        </div>

        {/* </footer> */}

      </div>
    );
  }
}
export default App;
