import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addLead } from '../../actions/leads';

export class Form extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  onChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const newLead = { name, email, message };
    this.props.addLead(newLead);
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className='card card-body mt-4 mb-4'>
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Name</label>
            <input
              className='form-control'
              type='text'
              name='name'
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              className='form-control'
              type='email'
              name='email'
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className='form-group'>
            <label>Message</label>
            <textarea
              className='form-control'
              type='text'
              name='message'
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addLead: lead => dispatch(addLead(lead))
});

export default connect(null, mapDispatchToProps)(Form);
