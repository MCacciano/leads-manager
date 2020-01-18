import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;

    if (error !== prevProps.error) {
      const { name, email, message } = error.msg;

      if (name) alert.error(`Name: ${name.join('')}`);
      if (email) alert.error(`Email: ${email.join('')}`);
      if (message) alert.error(`Message: ${message.join('')}`);
    }

    if (message !== prevProps.message) {
      if (message.deleteLead) alert.success(message.deleteLead);
    }
    if (message !== prevProps.message) {
      if (message.addLead) alert.success(message.addLead);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps, null)(withAlert()(Alerts));
