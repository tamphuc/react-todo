import { ChangeEvent, MouseEvent } from 'react';
import './card.css';

const TaskCreator = (props: { onCreateTask: (task: string) => void }) => {
 
    let abc = '';

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
      abc = e.target.value;
    }

    const onClickAddBtn = (e: MouseEvent) => {
        console.log('click add btn', abc)
        props.onCreateTask(abc)
    }

    return (
        <div>
            <input onChange={onInputChange} placeholder="Enter task name..."/>
            <button onClick={onClickAddBtn}>
                Add
            </button>
        </div>
    )
}

export default TaskCreator;