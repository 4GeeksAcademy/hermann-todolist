import React, {useState} from 'react';

export const TaskList = () => {
    const [task, setTask] = useState('');
    const [list, setList] = useState([]);

    const handleAddTask = () => {
        if(task.trim () !== ''){
            setList([...list, task]);
            setTask('');
        }
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            handleAddTask();
        }
    }

    return (
        <div className="container">
            <h1 className="title">todos</h1>
            <input type='text' placeholder="What's need to be done?" value={task} onChange={(e) => setTask(e.target.value)} onKeyPress={handleKeyPress}/>
            <ul>
                
            </ul>
            <p className="taskCount">{list.length} items left</p>
        </div>
    );
}