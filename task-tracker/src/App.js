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
    remainder: true,
},
{
    id: 2,
    text: 'Buy Milk',
    day: 'March 10th at 3:30pm',
    remainder: true,
},
{
    id: 3,
    text: 'Get Grocerys',
    day: 'April 1th at 5:30pm',
    remainder: false,
},

])

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}


export default App;
