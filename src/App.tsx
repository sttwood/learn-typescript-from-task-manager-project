import React, { useState } from 'react';
import './App.css';
import { Todo } from './models/model'

// Components
import InputField from './components/InputField';
import TodoList from './components/TodoList';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  }

  return (
    <div className='App'>
      <h1 className='heading'>Task Management</h1>

      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
