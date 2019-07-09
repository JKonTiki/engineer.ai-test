import React from 'react';
import Item from './Item';

export default class ItemList extends React.Component {
    renderItems() {
        return this.props.items.map((item) => {
            return (
                <Item
                    key={item.id}
                    title={item.title}
                    estimation={item.estimation}
                />
            );
        });
    }

    render() {
        if (!this.props.items.length) {
            return null;
        }

        return (
            <div style={{ padding: '10px', margin: '5px', backgroundColor: '#eee' }}>
                {this.renderItems()}
            </div>
        );
    }
}