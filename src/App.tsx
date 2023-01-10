import { useState } from 'react';
import './App.css';
import Card from './components/card';
import TaskCreator from './components/task-creator';

interface Task {
  id: number;
  title: string;
  content?: string; //unused
}

const App = () => { //[]
  const [tasks, setTasks] = useState</*type of State*/Task[]>(
    // Initial Value
    [{
      id: Math.round(Math.random() * 9999999999),
      title: "Initial Value",
      content: ""
    }, {
      id: Math.round(Math.random() * 9999999999),
      title: "Initial Value 1",
      content: ""
    }]);


  const createTask = (task: string) => {
    console.log('create Task', task);

    // OLD VERSION
    // tasks.push({
    //   id: Math.round(Math.random() * 9999999999),
    //   title: task
    // })
    // setTasks(tasks); // => NOT WORK, because the variable tasks is still old state in line 13
    // END OLD VERSION   
    
    // CORRECT 
    const newTasks = [...tasks]; // clone
    newTasks.push({
      id: Math.round(Math.random() * 9999999999),
      title: task
    })
    setTasks(newTasks);
    // END CORRECT
  
    // SHORT 
    // setTasks([{
    //   id: Math.round(Math.random() * 9999999999),
    //   title: task
    // },
    // ...tasks
    // ])
    // END SHORT
  }

  /*
  arr         = [1,2,3,4,5,6]
  ...arr      = 1,2,3,4,5,6
  90, ...arr  = 90, 1,2,3,4,5,6
  [...arr,90] = [1,2,3,4,5,6,90]
  */

  
  return (
    <div className="app">
      <TaskCreator onCreateTask={createTask} />
      <ul>
        {tasks.map(task => (
          <Card title={task.title} content={task.content} key={task.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
