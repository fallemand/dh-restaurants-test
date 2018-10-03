import React from 'react';
import Sort from '../../../app/components/Sort';

describe('Sort', () => {
  const props = {
    onChange: jest.fn(),
    field: '__VAL1__',
    order: true,
    fields: [
      { value: '__VAL1__', label: '__LAB1__' },
      { value: '__VAL2__', label: '__LAB2__', selected: true },
      { value: '__VAL1__', label: '__LAB1__', disabled: true },
    ],
  };

  it('render component', () => {
    const component = shallow(<Sort {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('render with className', () => {
    const component = shallow(<Sort className="__CLASSNAME__" {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('call onChange when click sort order button', () => {
    const component = shallow(<Sort {...props} />);
    component.find('.sort__order').simulate('click');
    expect(props.onChange).toHaveBeenCalled();
  });
});
