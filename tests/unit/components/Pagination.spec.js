import React from 'react';
import Pagination from '../../../app/components/Pagination';

describe('Pagination', () => {
  const props = {
    total: 50,
    show: 5,
    onChange: jest.fn(),
    active: 1,
    className: '__CLASSNAME__',
  };

  it('render component', () => {
    const component = shallow(<Pagination {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('count amount of pages generated', () => {
    const component = shallow(<Pagination {...props} />);
    const buttons = component.find('.pagination__number');
    expect(buttons).toHaveLength((props.total / props.show) + 2);
  });

  it('click on another page should call onChange with page number', () => {
    const component = shallow(<Pagination {...props} />);
    // Active page is 1, so next number is 2.
    const pageTwoNumber = component.find('.pagination__number--active + .pagination__number');
    pageTwoNumber.simulate('click');
    expect(props.onChange).toHaveBeenCalledWith(2);
  });
});
