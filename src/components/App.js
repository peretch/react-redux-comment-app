import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

import '../css/tailwind.output.css';

const App = () => (
  <div className="min-h-screen max-h-full lg:px-16 sm:px-10 py-10 bg-gray-100">
    <CommentBox />
    <CommentList />
  </div>
);

export default App;
