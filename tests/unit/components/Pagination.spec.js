import React from 'react';
import Pagination from '../../../app/components/Pagination';

describe('Pagination', () => {
  const props = {
    total: 50,
    show: 5,
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
});
