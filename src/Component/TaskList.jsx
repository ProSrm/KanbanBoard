import React from "react";
import TaskCard from "./TaskCard";
import "./css/TaskList.css";

const TaskList = () => {
    return <div className="main">
        <div className="TOdo">
            <h5>Todo</h5>
            <TaskCard />
        </div>
        <div className="Doing">
            <h5>Doing</h5>

        </div>
        <div className="Done">
            <h5>Done</h5>

        </div>
    </div>;
};

export default TaskList;
