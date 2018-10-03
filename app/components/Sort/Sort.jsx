import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';
import './_sort.scss';
import sortOrderImg from '../../assets/images/up-down.png';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleSortOrderChange = this.handleSortOrderChange.bind(this);
  }

  handleDropdownChange(query) {
    const { onChange, order } = this.props;
    onChange({ field: query, order });
  }

  handleSortOrderChange() {
    const { onChange, field, order } = this.props;
    onChange({ field, order: !order });
  }

  render() {
    const { className, fields, field } = this.props;
    return (
      <div className={classnames(className, 'sort')}>
        <Dropdown
          name="sort"
          title="Sort"
          className="sort__field"
          value={field}
          options={fields}
          onChange={this.handleDropdownChange}
        />
        <button
          className="sort__order"
          title="Change sort direction"
          type="button"
          onClick={this.handleSortOrderChange}
        >
          <img className="sort__order-img" src={sortOrderImg} alt="Up - Down" />
        </button>
      </div>
    );
  }
}

Sort.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  field: PropTypes.string,
  order: PropTypes.bool,
  fields: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

Sort.defaultProps = {
  className: null,
  order: false,
  field: '',
};

export default Sort;
