import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped;
// This will be executed before each test it()
beforeEach(() => {
  // Shallow render just the given component and none of its children
  // 'wrapped' could be called perfectly 'component', is just to respect standar usage.
  wrapped = shallow(<App />);
});

// it is a global function
// it(<description of the test>, <function containing our test logic>)
it('Shows a comment box', () => {
  // expect(wrapped.find(CommentBox).length === 1).toBeTruthy();
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('Shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});

// it('Shows a comment box', () => {
//   // JSDOM Simulates how a browser behaves
//   // 'document' runs on JSDOM library, to create a fake div (only exists on memory)
//   const div = document.createElement('div');

//   // Here we will render App component to ensure that not crash.
//   // JSDOM will render the jsx retuned by App compoent into the prevous defined div
//   ReactDOM.render(<App />, div);

//   // Here we need to create the logic to look inside the div, and check our test requirements.
//   // expect(<value inspected>).<matcher statement (how we inspect)>(<value expected>)
//   expect(div.innerHTML).toContain('Comment Box');

//   // On this point the div is unmounted from JSDOM.
//   // Its important to clean the JSDOM in order to be careful about performance.
//   ReactDOM.unmountComponentAtNode(div);
// });
