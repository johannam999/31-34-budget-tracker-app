import React from 'react';
import PropTypes from 'prop-types';
import autoBind from './../../utils/main';

const emptyState = { 
  name: '',
  price: '',
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expense || emptyState;
    autoBind.call(this, ExpenseForm);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const categoryId = this.props.category ? this.props.category.id : this.props.expense.categoryId;
    
    this.props.onComplete({
      ...this.state,
      categoryId,
    });
    this.setState(emptyState);
  // reset state to default
  }

  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update Expense' : 'Create expense';
    return (
      <form
      className='expense-form' onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='name'
          placeholder="expense"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input 
        type='number'
        name='price'
        placeholder="price"
        value={this.state.price}
        onChange={this.handleChange}
        />
        <button type="submit"> {buttonText} </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  expense: PropTypes.object,
  category: PropTypes.object,
};
