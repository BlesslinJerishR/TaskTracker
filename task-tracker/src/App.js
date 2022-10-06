import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState(
    [
{
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
},
{
    id: 2,
    text: 'Buy Milk',
    day: 'March 10th at 3:30pm',
    reminder: true,
},
{
    id: 3,
    text: 'Get Grocerys',
    day: 'April 1th at 5:30pm',
    reminder: false,
},

])

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))
}

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? ( <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder}/>) : ("No Tasks Found")}
    </div>
  );
}


export default App;
