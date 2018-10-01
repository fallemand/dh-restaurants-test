import React from 'react';
import Dropdown from '../../../app/components/Dropdown';

describe('Dropdown', () => {
  it('render component', () => {
    const props = {
      name: '__NAME__',
      title: '__TITLE__',
      onChange: () => {},
      options: [
        { value: '__VAL1__', label: '__LAB1__' },
        { value: '__VAL2__', label: '__LAB2__', selected: true },
        { value: '__VAL1__', label: '__LAB1__', disabled: true },
      ],
    };
    const component = shallow(<Dropdown {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
