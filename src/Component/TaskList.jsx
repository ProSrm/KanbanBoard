import React from "react";
import TaskCard from "./TaskCard";
import "./css/TaskList.css";

const TaskList = () => {

    const dragStarted = (e) => {
        e.preventDefault();
        console.log("drag started");
    }

    const drageComplete = (e) => {
        let taskid = e.dataTransfer.getData('taskid');
        console.log("You have Dropped an item");
    }

    return <div className="main">
        <div className="TOdo">
            <h5>Todo</h5>
            <TaskCard id={1} />
        </div>
        <div onDragOver={(e) => dragStarted(e)} onDrop={(e) => drageComplete(e)} className="Doing">
            <h5>Doing</h5>

        </div>
        <div className="Done">
            <h5>Done</h5>

        </div>
    </div>;
};

export default TaskList;
