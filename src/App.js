import React from 'react';
import Context from './Context';
import './App.css';
import CommonItemsContainer from './containers/CommonItemsContainer';

class App extends React.Component {
  state = {

  }

  componentDidMount() {
    this.generateItems();
  }

  generateCommonItems = () => {
    //TODO: get the items list and break them up
  }

  render() {
    return (
      <Context.Provider value={{
        state: this.state,
        actions: null
      }}>
        <div className="container">
          <h2>Welcome to Town Generator!</h2>
          <CommonItemsContainer />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
