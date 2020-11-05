import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const CommentBox = () => {
  const [comment, setComment] = useState('');

  const submitSubmit = (e) => {
    e.preventDefault();

    actions.saveComment(e.target.value);

    setComment('');
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={submitSubmit} className="w-full xl:w-1/2">
        <p className="text-gray-900 text-xl">Enter a comment</p>
        <textarea
          className="shadow-2xl bg-white p-2 w-full outline-none"
          placeholder="Write a comment here"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <button
            className="mt-2 py-1 px-2 bg-blue-800 text-white rounded-lg w-full"
            type="submit"
          >
            Submit comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, actions)(CommentBox);
