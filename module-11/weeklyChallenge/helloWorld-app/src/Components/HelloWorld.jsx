import React, {useState} from 'react';

function HelloWorld() {
      const [count, setCount] = useState(0)
    
      return (
        <div className="hello">
          <header className="hello-header">
            <h1>Hello, World!</h1>
            <p>
              This is a simple React application.
            </p>
            <button onClick={() => setCount(count + 1)}>
              Count is: {count}
            </button>
          </header>
        </div>
      )
}

export default HelloWorld;