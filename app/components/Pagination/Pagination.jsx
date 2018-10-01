import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './pagination.scss';

const Pagination = ({ className, total, show }) => {
  const pages = Math.ceil(total / show);
  return (
    <div className={classnames(className, 'pagination')}>
      <a className="pagination__number" href="#/">&laquo;</a>
      {Array.from(Array(pages), (x, i) => i).map(
        pageNumber => <a className="pagination__number" href="/#">{pageNumber}</a>,
      )}
      <a className="pagination__number" href="#/">&raquo;</a>
    </div>
  );
}

Pagination.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number.isRequired,
  show: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  className: null,
};

module.exports = Pagination;
