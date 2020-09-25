import React from 'react';

export const Task = ({ task, onCheckBoxClick , onDeleteClick }) => {
  return (
    <li className="task">
      <input
        type="checkbox"
        checked={!!task.isChecked}
        onClick={() => onCheckBoxClick(task)}
        readOnly
      />
      <span>{task.text}</span>
      <button onClick={ () => onDeleteClick(task) }>&times;</button>
    </li>
  );
};