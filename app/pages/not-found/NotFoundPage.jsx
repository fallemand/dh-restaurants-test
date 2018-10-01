import React from 'react';
import './_not-found.scss';
import { withRouter } from 'react-router-dom';

const NotFoundPage = ({ history }) => (
  <div className="not-found">
    <h1 className="not-found__title">404</h1>
    <h2 className="not-found__subtitle">We couldn't find the page you're looking for :(</h2>
    <button
      className="not-found__button"
      type="button"
      onClick={() => history.push('/restaurants')}
    >
      Go Home!
    </button>
  </div>
);

export default withRouter(NotFoundPage);
