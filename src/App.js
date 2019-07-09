import React from 'react';
import ItemList from './components/ItemList';
import AddForm from './components/AddForm';

export default class App extends React.Component {
  state = {
    items: [],
    counter: 0,
  }

  addItem = (item) => {
    const completeItem = { ...item, id: this.state.counter };

    const items = this.state.items.concat(completeItem);

    this.setState({ items, counter: this.state.counter + 1 });
  }

  render() {
    return (
      <React.Fragment>
          <h2>Todo List</h2>
          <AddForm onSubmit={this.addItem} />
          <ItemList items={this.state.items} />
      </React.Fragment>
    );
  }
}