import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ErrorPage from '../error/ErrorPage';

const NotFoundPage = ({ history }) => (
  <ErrorPage
    title="404"
    message="We couldn't find the page you're looking for :("
    buttonLabel="Go Home!"
    onClick={() => history.push('/restaurants')}
  />
);

NotFoundPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(NotFoundPage);
