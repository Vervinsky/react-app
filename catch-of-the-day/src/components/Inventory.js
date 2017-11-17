import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    render() {
        return (
            <header>
                <h2>Inventory</h2>
                <AddFishForm addFish={this.props.addFish} />
            </header>
        );
    }
}

export default Inventory;
