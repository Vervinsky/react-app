import React from 'react';

class Fish extends React.Component {
    render() {
        const { details, index } = this.props;

        const isAvailable = details.status === 'available';
        const buttonText = isAvailable ? '+ Add to order' : 'Sold out!!!';
        return (
            <li className="menu-fish">
                <img src={details.image} alt={details.name} />
                <h3 className="fish-name">
                    {details.name}
                    <span className="price">{details.price}</span>
                </h3>
                <p>{details.desc}</p>
                <button
                    disabled={!isAvailable}
                    type="button"
                    onClick={e => {
                        this.props.addToOrder(index);
                    }}
                >
                    {buttonText}
                </button>
            </li>
        );
    }
}

export default Fish;
