import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUser } from '../actions';

const SignUp = props => {
  const {
    createUser, closeSignUp, toggleForm, syncInfo,
  } = props;
  const [user, setUser] = useState({});

  const handleChange = evt => {
    setUser({ ...user, ...{ [evt.target.name]: evt.target.value } });
  };

  const handleSubmit = event => {
    event.preventDefault();
    syncInfo('User account creation async action in progress');
    createUser(user);
  };

  const closeForm = () => {
    closeSignUp('signup');
  };

  const toggleLogin = () => {
    toggleForm('login');
  };

  /* eslint-disable-next-line max-len */
  /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
  return (
    <div className="signup">
      <span id="closeSignup" onClick={closeForm}>&#10006;</span>
      <form onSubmit={handleSubmit}>
        <h4>Sign Up For An Account</h4>

        <label htmlFor="name">
          Name
          <input
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
          />
        </label>

        <br />

        <label htmlFor="email">
          Email
          <input
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <br />

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <br />

        <label htmlFor="password_confirmation">
          Password Confirmation
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={user.password_confirmation}
            onChange={handleChange}
          />
        </label>
        <br />

        <input type="submit" onClick={closeForm} />
        <p>
          Already have an account?
          <span onClick={toggleLogin}> Log In</span>
        </p>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  createUser: userInfo => dispatch(createUser(userInfo)),
});

/* eslint-disable react/forbid-prop-types */
SignUp.propTypes = {
  createUser: PropTypes.func.isRequired,
  closeSignUp: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  syncInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignUp);
