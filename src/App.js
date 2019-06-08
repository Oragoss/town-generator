import React from 'react';
import Collapsible from 'react-collapsible';
import './App.css';
import ArmorContainer from './containers/ArmorContainer';

class App extends React.Component {
  state = {

  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">Fixed navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#armor">Armor <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#adventure">Adventure</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>

          <h1 style={{marginTop: "10%"}} className="text-center">Welcome to Town Generator!</h1>
          <div id="armor">
            <Collapsible open={true} trigger="Armor Table">
              <ArmorContainer />
            </Collapsible>
          </div>
          <div id="adventure">
            <Collapsible open={true} trigger="Adventuring Gear Table">
              <ArmorContainer />
            </Collapsible>
          </div>
      </div>
      // <Context.Provider value={{
      //   state: this.state,
      //   actions: null
      // }}>
      //   <div className="container">
      //     <h2>Welcome to Town Generator!</h2>
      //     {page}
      //   </div>
      // </Context.Provider>
    );
  }
}

export default App;
