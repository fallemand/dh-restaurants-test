import React from 'react';
import ErrorPage from '../../../app/pages/error/ErrorPage';

describe('ErrorPage', () => {
  const props = {
    history: { push: jest.fn() },
    match: { params: { id: 1 } },
  };

  global.window = { location: { reload: jest.fn() } };

  it('render component without props', () => {
    const component = shallow(<ErrorPage />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('render component with props', () => {
    const component = shallow(<ErrorPage title="__TITLE__" message="__MESSAGE__" buttonLabel="__BUTTON__" />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('Button should redirect to Restaurants List', () => {
    const component = shallow(<ErrorPage {...props} />);
    component.find('.error__button').simulate('click');
    expect(global.window.location.reload).toHaveBeenCalled();
  });
});
