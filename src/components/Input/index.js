import React, { useState } from 'react';

import TaskList from '../TaskList';

import { Container } from './style';

import plus from '../../assets/img/icons/plus-lg.svg';

export default function AddTask() {
  const [task, setTask] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task) {
      setItems((prevItems) => {
        const updatedItems = [...prevItems, { id: Date.now(), text: task, done: false }];
        setTask('');
        return updatedItems;
      });
    }
  };
  const onTaskDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const onTaskDone = (id) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, done: !item.done }
      : item)));
  };

  return (
    <>
      <Container>
        <input type="text" className="input-task" onChange={handleInputChange} value={task} />
        <button type="button" className="plus-button" onClick={handleAddTask}>
          <img src={plus} alt="plus" />
        </button>
        <div />
      </Container>

      <div>
        <TaskList items={items} onTaskDone={onTaskDone} onTaskDelete={onTaskDelete} />
      </div>
    </>
  );
}
