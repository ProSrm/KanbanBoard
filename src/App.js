
import './App.css';
import TaskList from './Component/TaskList';


function App() {

  const addTask = () => {

    console.log("task added");

  }

  return (
    <div className="App">
      <div className="App-header">
        <h4>Add your Tasks here</h4>
        <input type="text" placeholder='Enter your Title here' />
        <input type="text" placeholder='Enter your Description here' />
        <button onClick={addTask}>Add task </button>
      </div>
      <TaskList />
    </div>
  );
}

export default App;
