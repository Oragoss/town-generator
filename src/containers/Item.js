import React from 'react';
import ammunition from '../data/ammunition';

export default class Item extends React.Component {
    state = {
        items: ''
    }

    getData = (url) => {
        //TODO: put fetch here
        const items = url.map(elem => {
            if(elem.chance > (Math.random()/1)) {
                return (
                    <React.Fragment>
                        <div className="col-md-4 section">{elem.quantity}</div>
                        <div className="col-md-4 section">{elem.name}</div>
                        <div className="col-md-4 section">{elem.cost}</div>
                    </React.Fragment>
                );
            }
        });

        return items;
        // this.setState({
        //     items
        // });
    }

    renderItems = (title, items) => {
        // const {items} = this.state;

        return (
            <React.Fragment>
                <h1 className="text-center">{title}</h1>
                <hr />
                <div className="row section-list">
                    <div className="col-md-4">No.</div>
                    <div className="col-md-4">Name</div>
                    <div className="col-md-4">Price</div>
                </div>
                <div className="row section-list">
                    {items}
                </div>
            </React.Fragment>
        );
    }

    render() {
        const {items} = this.state;

        return (
            <React.Fragment>
                <h1 className="text-center">Ammunition</h1>
                <hr />
                <div className="row section-list">
                    <div className="col-md-4">No.</div>
                    <div className="col-md-4">Name</div>
                    <div className="col-md-4">Price</div>
                </div>
                <div className="row section-list">
                    {items}
                </div>
            </React.Fragment>
        );
    }
}