
import { useState } from 'react';
import './App.css';
import TaskList from './Component/TaskList';
import axios from 'axios'


function App() {

  //storing values 
  const [Task, setTasks] = useState();
  const [Description, setDescription] = useState();

  const addTask = () => {
    axios.post("http://localhost:3001/addTask", { Task: Task, Desc: Description })
      .then(result => console.log(result))
      .catch(err => console.log(err));
    console.log("task added");

  }

  return (
    <div className="App">
      <div className="App-header">
        <h4>Add your Tasks here</h4>
        <input type="text" placeholder='Enter your Title here' onChange={(e) => setTasks(e.target.value)} />
        <input type="text" placeholder='Enter your Description here' onChange={(e) => setDescription(e.target.value)} />
        <button onClick={addTask}>Add task </button>
      </div>
      <TaskList />
    </div>
  );
}

export default App;
