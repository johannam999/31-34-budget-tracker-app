import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Dashboard from '../component/dashboard/dashboard';


configureEnzyme({ adapter: new Adapter() });

describe('#Dashboard', () => {
  const testState = {
    categories: [
      {
        budget: '456',
        id: '0.123',
        name: 'coffee',
        timestamp: new Date(),
      }, {
        budget: '4556',
        id: '0.5623',
        name: 'lunch',
        timestamp: new Date(),
      },
    ],
    expenses: {
      0.123: [],
      0.5623: [],
    },
  };

  test('Testing dashboard interactions with the store', () => {
    const mockStore = configureStore([]);

    const mountedDashboard = mount(<Provider store={mockStore(testState)}>
    <Dashboard/></Provider>);
    expect(mountedDashboard.find('CategoryForm')).toBeTruthy();
    expect(mountedDashboard.find('CategoryItem')).toHaveLength(2);
  });
});
