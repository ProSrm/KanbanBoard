import React from "react";
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';

import "./css/TaskCard.css"

const TaskCard = () => {
    return <div className="card">
        <h6>first task</h6>
        <h6>Description</h6>
        <div className="icons">
            <AiOutlineEdit />&nbsp;
            <RiDeleteBin5Line />
        </div>




    </div>;
};

export default TaskCard;
