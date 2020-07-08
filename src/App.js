import React from 'react';
import './App.css';
import { client } from './client';
import Recipes from './components/Recipes';

class App extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    client.getEntries()  //call to contentful
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
          <header>
            <div><span>React and Contentful</span></div>
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
