import React from 'react';
import Context from '../Context';

export default class CommonItemsContainer extends React.Component {
    state = {
        items: ''
    }

    renderItems = () => {
      return  <Context.Consumer>
            {(context) => {
                return (
                    <React.Fragment>
                        {context.commonItems}
                    </React.Fragment>
                );
            }}
        </Context.Consumer>
    }

    render() {
        const {items} = this.state;
        return (
            {items}
        );
    }
}