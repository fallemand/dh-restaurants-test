import React from 'react';
import PropTypes from 'prop-types';
import './_error.scss';

const ErrorPage = ({ title, message }) => (
  <div className="error">
    <h1 className="error__title">{title}</h1>
    <h2 className="error__subtitle">{message}</h2>
    <button
      className="error__button"
      type="button"
      onClick={() => window.location.reload()}
    >
      Retry!
    </button>
  </div>
);

ErrorPage.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};

ErrorPage.defaultProps = {
  title: 'Error :(',
  message: 'An error ocurred! Please try again later.',
};

export default ErrorPage;
