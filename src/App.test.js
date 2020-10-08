import React from 'react';
import ReactDOM from 'react-dom';
import ArhDesignApp from './App';



test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ArhDesignApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
