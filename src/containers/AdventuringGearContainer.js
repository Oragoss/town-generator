import React from 'react';
import adventuringGear from '../data/adventuringGear';

export default class AdventuringGearContainer extends React.Component {
    state = {
        items: ''
    }

    componentDidMount() {
        const items = adventuringGear.map(elem => {
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

        this.setState({
            items
        });
    }

    render() {
        const {items} = this.state;

        return (
            <React.Fragment>
                <h1 className="text-center">Adventuring Gear</h1>
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