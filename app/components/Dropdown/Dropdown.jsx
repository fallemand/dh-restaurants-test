import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './dropdown.scss';

const Dropdown = ({ className, name, title, options }) => (
  <select className={classnames(className, 'dropdown')} name={name}>
    {title && <option value="" disabled selected>{title}</option>}
    {
      options.map(option => (
        <option
          value={option.value}
          disabled={option.disabled}
          selected={option.selected}
        >
          {option.label}
        </option>
      ))
    }
  </select>
);

Dropdown.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  options: PropTypes.array.isRequired,
};

Dropdown.defaultProps = {
  className: null,
  title: null,
};

export default Dropdown;
