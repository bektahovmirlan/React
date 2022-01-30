import logo from './logo.svg';
import './App.css';

function todoList () {
  let tasks = ['Buy lemonade', 'Make toasts',
                 'Repair car', 'Play games', 'Pet a cat'];
 
     return (
         <ol>
            {tasks.map((task) => (
                <li>{task}</li>
            ))}
          </ol>
    );
}

export default todoList;
