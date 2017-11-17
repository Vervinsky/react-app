import React from 'react';

import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    goToStrore(e) {
        e.preventDefault();
        const storeId = this.storeInput.value;
        this.context.router.transitionTo(`/store/${storeId}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={e => this.goToStrore(e)}>
                <h2>Please enter a store</h2>
                <input
                    required
                    type="text"
                    placeholder="Store Name"
                    defaultValue={getFunName()}
                    ref={input => {
                        return (this.storeInput = input);
                    }}
                />
                <button type="submit">Visit store -></button>
            </form>
        );
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
};

export default StorePicker;
