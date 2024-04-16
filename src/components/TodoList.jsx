import React, { useState } from 'react';
import { Input, Button, List } from 'antd';
//import 'antd/dist/antd.css'; // Importa los estilos CSS de Ant Design

export function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>To-Do List</h2>
      <Input
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ marginBottom: 10 }}
      />
      <Button type="primary" onClick={handleAddTask} style={{ marginBottom: 10 }}>
        Add Task
      </Button>

      <Input
        placeholder="Search tasks"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: 10 }}
      />

      <List
        bordered
        dataSource={filteredTasks}
        renderItem={(task, index) => (
          <List.Item
            actions={[
              <Button type="link" onClick={() => handleDeleteTask(index)}>
                Delete
              </Button>,
            ]}
          >
            {task}
          </List.Item>
        )}
      />
    </div>
  );
}

