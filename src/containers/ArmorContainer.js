import React from 'react';
import {armorItemsList} from '../data/armorItemsList';

export default class ArmorContainer extends React.Component {
    state = {
        items: ''
    }

    componentDidMount() {
        const items = armorItemsList.map(elem => {
            if(elem.chance > (Math.random()/1)) {
                return (
                    <tr>
                        <th scope="row">{elem.quantity}</th>
                        <td>{elem.name}</td>
                        <td>{elem.cost}gp</td>
                    </tr>
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
                <table class="table table-striped table-dark">
                    <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}