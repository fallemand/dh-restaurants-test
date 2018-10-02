import React from 'react';
import './_not-found.scss';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const NotFoundPage = ({ history }) => (
  <div className="not-found">
    <h1 className="not-found__title">404</h1>
    <h2 className="not-found__subtitle">We couldn&#x27;t find the page you&#x27;re looking for :(</h2>
    <button
      className="not-found__button"
      type="button"
      onClick={() => history.push('/restaurants')}
    >
      Go Home!
    </button>
  </div>
);

NotFoundPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(NotFoundPage);
