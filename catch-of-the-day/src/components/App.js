import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            fishes: {},
            order: {}
        };

        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
    }

    addToOrder(key) {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;

        this.setState({ order });
    }

    addFish(fish) {
        const fishes = { ...this.state.fishes };
        const timeStamp = Date.now();

        fishes[`fish-${timeStamp}`] = fish;

        this.setState({ fishes: fishes });
    }

    loadSamples() {
        this.setState({ fishes: sampleFishes });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="I'm a new TagLine" />
                    <ul className="list-of-fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish
                                details={this.state.fishes[key]}
                                key={key}
                                index={key}
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>
                </div>
                <Order />
                <Inventory
                    addFish={this.addFish}
                    loadSamples={this.loadSamples}
                />
            </div>
        );
    }
}

export default App;
