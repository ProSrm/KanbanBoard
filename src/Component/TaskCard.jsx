import React from "react";
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';

import "./css/TaskCard.css"

const TaskCard = (props) => {
    const dragStarting = (e, id) => {
        e.dataTransfer.setData('taskid', id)
        console.log("drag starting ");
    }


    return <div draggable onDragStart={(e) => dragStarting(e, props.tid)} className="card">
        <h6>first task</h6>
        <h6>Description</h6>
        <div className="icons">
            <AiOutlineEdit />&nbsp;
            <RiDeleteBin5Line />
        </div>
    </div>;
};

export default TaskCard;
