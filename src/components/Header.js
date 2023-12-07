import Button from './Button'

const Header = ({title}) => {
  
  const onClick = () => { 
    console.log('Clicked');
  }
  title = "Task Tracker"
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}
// CSS in JS
// const headingStyle = {
//     color: 'black',
//     backgroundColor: 'green',
// }

export default Header