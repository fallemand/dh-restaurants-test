import React from 'react';
import Dropdown from '../../../app/components/Dropdown';

describe('Dropdown', () => {
  const props = {
    name: '__NAME__',
    title: '__TITLE__',
    onChange: jest.fn(),
    options: [
      { value: '__VAL1__', label: '__LAB1__' },
      { value: '__VAL2__', label: '__LAB2__', selected: true },
      { value: '__VAL1__', label: '__LAB1__', disabled: true },
    ],
  };

  it('render component', () => {
    const component = shallow(<Dropdown {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('expect onChange to be called on changes', () => {
    const component = shallow(<Dropdown {...props} />);
    const event = { target: { value: '__TEST__' } };
    component.instance().handleChange(event);
    expect(props.onChange).toHaveBeenCalledWith('__TEST__');
  });
});
