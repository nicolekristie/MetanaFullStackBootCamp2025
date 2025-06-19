import { useState } from 'react'
import Todo from './Component/Todo'

function App() {


//   const id = todos?.id ?? 'default-id'; // If todo is undefined, id will be 'default-id'
//   const title = todos?.title ?? ''; // If todo.title is undefined, title will be ''
//   const completed = todos?.completed ?? false; // If todo.completed is undefined, completed will be false

  
  const todos = [
    { id: 1, title: 'wash dishes', completed: false },
    { id: 2, title: 'make dinner', completed: true},
  ];

  return (
  
      <div className="App">
         { todos.map((todo)=> {
          return (<Todo todo={todos} />)
          })
         }
      </div>
 
  )
}



export default App
