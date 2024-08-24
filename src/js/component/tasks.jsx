import React, {useState, useEffect} from 'react';

export const TaskList = () => {
    const [task, setTask] = useState('');
    const [list, setList] = useState([]);
    const [count, setCounter] = useState(0);

    const handleAddTask = () => {
        if(task.trim () !== ''){
            setList([...list, task]);
            setTask('');
        }
    }

    return (
        <div className="container">
            <h1 className="title">todos</h1>
            <input type='text' placeholder="What's need to be done?" value={task}/>
            <ul>

            </ul>
            <p className="taskCount">`${count} items left`</p>
        </div>
    );
}