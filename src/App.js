import React from 'react';
import Collapsible from 'react-collapsible';
import './App.css';
import ArmorContainer from './containers/ArmorContainer';
import AdventuringGearContainer from './containers/AdventuringGearContainer';

class App extends React.Component {
  state = {

  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="container-fluid">
        {/* <nav className="site-header sticky-top py-1" style={{backgroundColor: "white"}}>
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            <a className="py-2" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
            </a>
            <a className="py-2 d-none d-md-inline-block" href="/">Tour</a>
            <a className="py-2 d-none d-md-inline-block" href="/">Product</a>
            <a className="py-2 d-none d-md-inline-block" href="/">Features</a>
            <a className="py-2 d-none d-md-inline-block" href="/">Enterprise</a>
            <a className="py-2 d-none d-md-inline-block" href="/">Support</a>
            <a className="py-2 d-none d-md-inline-block" href="/">Pricing</a>
            <a className="py-2 d-none d-md-inline-block" href="/">Cart</a>
          </div>
        </nav> */}
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" style={{boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.15)"}}>
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">Welcome to Town Generator!</h1>
            <p className="lead font-weight-normal">A tool to give your shopkeep a random set of items.</p>
            <a className="btn btn-outline-secondary" href="/">More Coming Soon!</a>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        <div className="container">
          <div className="row">
            <div id="armor" className="col-md-5">
              {/* <Collapsible open={true} trigger="Armor" className="text-center"> */}
                <ArmorContainer />
              {/* </Collapsible> */}
            </div>
            <div className="col-md-2"></div>
            <div id="adventure" className="col-md-5">
              {/* <Collapsible open={true} trigger="Adventuring Gear"> */}
                <AdventuringGearContainer />
              {/* </Collapsible> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
