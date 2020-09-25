import React from 'react';
import {Task} from './Task';

const tasks = [
  {_id:1, text:"Clean my room"},
  {_id:2, text:"Book a holiday"},
  {_id:3, text: "Apply for jobs"},
];


export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>

    <ul>
      {tasks.map(task => <Task key={task._id} task={task}/>)}
    </ul>
    
  </div>
);
