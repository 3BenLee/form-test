import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../visual-components/input';
import Button from '../../visual-components/button';
import { submitFormData } from '../../Actions/actions';
// import PropTypes from 'prop-types';

class StepOne extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // };

  handleSubmit = e => {
    e.preventDefault();
    // console.log('handleSubmit', e.targer.value);
    this.props.submit(e.target.value);
  };

  handleChange = e => {
    console.log('handler', e.target.value, e.target.name);
  };

  render() {
    // ToDo: Make a helper function to generate these inputs
    const stepOneNameInputs = Object.keys(this.props.stepOne.name).map((val, index) => {
      const nameLabel = val === 'first' ? 'First Name' : 'Last Name';
      return (
        <div key={index}>
          <h3>{nameLabel}</h3>
          <Input name={val} onChange={this.handleChange} />
        </div>
      );
    });

    const stepOneAddressInputs = Object.keys(this.props.stepOne.address).map((val, index) => {
      const addressLabel = val === 'addressOne' ? 'Address 1' : 'Address 2';
      return (
        <div key={index}>
          <h3>{addressLabel}</h3>
          <Input name={val} onChange={this.handleChange} />
        </div>
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>This is my form</h3>
          {stepOneNameInputs}
          {stepOneAddressInputs}
          <Button text='Submit' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { stepOne } = state;
  console.log('state', state);

  console.log(stepOne);
  return state;
};

const mapDispatchToProps = dispatch => {
  console.log('mdtp', submitFormData);
  return {
    submit: data => dispatch(submitFormData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
