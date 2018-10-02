import React from 'react';
import NotFoundPage from '../../../app/pages/not-found/NotFoundPage';

jest.mock('react-router-dom', () => ({ withRouter: Component => Component }));

describe('NotFoundPage', () => {
  const props = {
    history: { push: jest.fn() },
    match: { params: { id: 1 } },
  };

  it('render component', () => {
    const component = shallow(<NotFoundPage {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
