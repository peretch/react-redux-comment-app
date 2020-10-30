# react-redux-comment-app
This app is designed to keep practicing with React, Redux, Jest and Enzyme.

---
## Testing plan
Here we have what we should test in our app. In order to take the decision of what to test, we could think in this way:
1. Look at each individual part of your application
2. Imagine telling a friend what is the purpose of each piece of code.
3. Write a test to verify each poart does what you expect

### Components tests
#### App Component
- Shows the comment textbox inside of it
- Shows the comment list inside of it
#### CommentBox Component
- Shows a text area and a button
- Users can enter input and submit it
- Text area is clean after input is submited
#### CommentList Component
- Shows one **_\<li>_** element for each comment
- Text from each comment is visible

### Redux tests
#### CommentsReducer
- Propery hands actions with type 'SAVE_COMMENT'
- Don't throw an application error if reducer gets an unknown action
#### SaveComment Action
- Has a type of 'SAVE_COMMENT'
- Produces an action that has a payload of the new comment's text

---