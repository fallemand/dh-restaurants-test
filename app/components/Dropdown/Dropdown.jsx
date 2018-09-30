import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './dropdown.scss';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.props.onChange(value);
  }

  render() {
    const { className, name, title, options } = this.props;
    return (
      <select className={classnames(className, 'dropdown')} name={name} onChange={this.handleChange}>
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
  }
}
Dropdown.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  options: PropTypes.array.isRequired,
};

Dropdown.defaultProps = {
  className: null,
  title: null,
};

export default Dropdown;
