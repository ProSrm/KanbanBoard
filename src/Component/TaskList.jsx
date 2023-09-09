import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import "./css/TaskList.css";
import axios from "axios"
const TaskList = () => {
    const [ToDO, setToDO] = useState([]);
    //to fetch data . 
    useEffect(() => {
        axios.get("http://localhost:3001/getTasks")
            .then(result => setToDO(result.data))
            .catch(err => console.log(err))
        console.log(ToDO);
    }, [])
    //function to drag and drop functionality
    const dragStarted = (e) => {
        e.preventDefault();
        console.log("drag started");
    }
    //funciton to drag completion
    const drageComplete = (e) => {
        let taskid = e.dataTransfer.getData('taskid');
        console.log("You have Dropped an item");
    }
    return <div className="main">
        <div className="TOdo">
            <h5>Todo</h5>
            {/* rendering taskcard component */}
            {/* {
                ToDO.length === 0 ? <div>Add item here</div> :
                    ToDO.map(todo => (
                        <TaskCard id={1} task={todo} />
                    ))
            } */}
            <TaskCard id={1} />

        </div>
        <div onDragOver={(e) => dragStarted(e)} onDrop={(e) => drageComplete(e)} className="Doing">
            <h5>Doing</h5>

        </div>
        <div onDragOver={(e) => dragStarted(e)} onDrop={(e) => drageComplete(e)} className="Done">
            <h5>Done</h5>
        </div>
    </div>;
};

export default TaskList;
