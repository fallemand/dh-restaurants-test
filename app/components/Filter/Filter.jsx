import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';
import './_filter.scss';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onFilter, field, value } = this.props;
    onFilter({
      field,
      value,
    });
  }

  handleDropdownChange(query) {
    const { onChange, value } = this.props;
    onChange({ field: query, value });
  }

  handleQueryChange(event) {
    const { value } = event.target;
    const { onChange, field } = this.props;
    onChange({ field, value });
  }

  render() {
    const { className, fields, field, value } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className={classnames(className, 'filter')}>
        <Dropdown
          name="filter"
          title="Filter"
          className="filter__field"
          value={field}
          options={fields}
          onChange={this.handleDropdownChange}
        />
        <input
          className="filter__value"
          placeholder="Filter Value"
          type="text"
          value={value}
          disabled={!field}
          onChange={this.handleQueryChange}
        />
      </form>
    );
  }
}

Filter.propTypes = {
  className: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  field: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  fields: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

Filter.defaultProps = {
  className: null,
  value: '',
  field: '',
};

export default Filter;
