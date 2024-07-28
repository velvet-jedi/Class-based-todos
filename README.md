# [Class component TODO](https://nrfnjy-5173.csb.app/)

The goal of this assignment is to do the following:

1.  Implement a delete button for each task. The delete button should remove that specific task from the state array, thus deleting the task itself! Styling isn't a priority at this moment, but the button tag should be styled by default.

ANS: Using filter in a handleDelete function triggered onclick
        Since every task needs a delete button incorporate it in the map with 2nd argument for index which is used by the handleDelete.
------------------------------------------------------------------------------

2.  Implement a new class component, `Count` that displays the count of the number of todos, at any given time.

ANS: A class is still a component in react, the Count component needs access to the todos array, render the length of the todos state variable, so ClassInput passess todos as a prop and Count compnent descrtuctures it

------------------------------------------------------------------------------

3.  Implement an edit button for each task. It should replace the todo with an input field, and change the button itself to 'Resubmit', so the edits can be saved. This is a comparatively harder task, kudos for when you finish it!
