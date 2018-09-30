import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';
import './filter.scss';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.state = {
      field: '',
      value: '',
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { field, value } = this.state;
    const { onFilter } = this.props;
    onFilter({
      field,
      value,
    });
  }

  handleDropdownChange(value) {
    this.setState({
      field: value,
    });
  }

  handleQueryChange(event) {
    const { value } = event.target;
    this.setState({
      value,
    });
  }

  render() {
    const { className, fields } = this.props;
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={classnames(className, 'filter')}>
        <Dropdown
          name="filter"
          title="Filter"
          className="filter__field"
          options={fields}
          onChange={this.handleDropdownChange}
        />
        <input
          className="filter__value"
          placeholder="Filter Value"
          type="text"
          value={value}
          onChange={this.handleQueryChange}
        />
      </form>
    );
  }
}

Filter.propTypes = {
  className: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

Filter.defaultProps = {
  className: null,
};

export default Filter;
