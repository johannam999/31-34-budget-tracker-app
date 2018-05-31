import React from 'react';
import autoBind from './../../utils/main';
import PropTypes from 'prop-types'; // this added

const defaultState = {
  name:'',
  budget:'',
};
class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
    autoBind.call(this, CategoryForm);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  // static getDerivedStateFromProps(nextProps) {
  //   if (nextProps.category) {
  //     return nextProps.category;
  //   }
  //   return defaultState;
  // }
  render(){
    const buttonText = this.props.category ? 'Update' : 'Create';
    return(
      <form
      onSubmit={this.handleSubmit}
      className='category-form'>
      <input
      type='text'
      name='name'
      placeholder='name'
      value={this.state.category}
      onChange={this.handleChange}
      />
       <input
      type='number'
      name='budget'
      placeholder='budget'
      value={this.state.budget}
      onChange={this.handleChange}
      />
      <button type='submit'>{buttonText} Category</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
};
export default CategoryForm;
