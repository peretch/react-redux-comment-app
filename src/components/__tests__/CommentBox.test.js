import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;

// This is for avoid error with redux

// mount render the component and all his shildren.
// mount let us modify the component after mounting it.
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

// mount uses allways the same DOM, after each use, we should call unmount to cleanup the DOM.
afterEach(() => {
  wrapped.unmount();
});

it('Shows a textarea and button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

// Describe defines a new scope where we can use beforeEach and afterEach again (and others test functionalities)
describe('the text area', () => {
  let textInput;

  // Becouse we need to write a text in the textarea for both test cases
  // We want to add in this scope this behaviour once, in the beforeEach function
  beforeEach(() => {
    textInput = 'New comment';
    wrapped.find('textarea').simulate('change', {
      target: {
        value: textInput,
      },
    });
    wrapped.update();
  });

  // After defined beforeEach, I can asume now that in "it" cases in this scope, textarea will start with an input. of value textInput
  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual(textInput);
  });

  it('Textarea is cleaned after submit', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
