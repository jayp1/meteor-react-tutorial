import React from 'react';
import { Task } from './Task';
import { TasksCollection } from '../api/TasksCollection';
import { useTracker } from 'meteor/react-meteor-data';
import {TaskForm} from '../ui/TaskForm';

export const App = () => {

  const tasks = useTracker(() => TasksCollection.find({}, {sort: {createdAt: -1} }).fetch());

  return (
    <div >
      <h1>Welcome to Meteor!</h1>

      <TaskForm/>

      <ul>
        {tasks.map(task => <Task key={task._id} task={task} />)}
      </ul>

    </div >

  );

};
