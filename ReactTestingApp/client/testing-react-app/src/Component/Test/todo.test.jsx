
import { render, screen, cleanup } from '@testing-library/react';
import Todo from'../Todo';
import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';


//clean-up the render>to make sure every test will run from the same point

afterEach(()=> {
    cleanup();
});

test('should render non-completed todo component' , () => {
    const todo = { id: 1, title: 'wash dishes', completed: false, };
    render(<Todo todo={todo}/>);
    const todoElement = screen.queryByTestId('todo-1');
    console.log(`the toelem: ${todoElement}`);
    expect(todoElement).toBeInTheDocument();
    // expect(todoElement).toHaveTextContent('wash dishes');
    // expect(todoElement).not.toContainHTML('<strike>');
});


// test('should render completed todo component' , () => {
//     const todo = { id: 2, title: 'make dinner', completed: true, };
//     render(<Todo todo={todo}/>);
//     const todoElement = screen.getByTestId('todo-2');
//     expect(todoElement).toBeInTheDocument();
//     expect(todoElement).toHaveTextContent('make dinner');
//     expect(todoElement).toContainHTML('<strike>');
// });

//can use a snapshot to verify that the tests hasn't changed since the last run.

test('matches snapshot', ()=>{
      const todo = { id: 1, title: 'wash dishes', completed: false, };
      const tree = renderer.create(<Todo todo={todo}/>).toJSON();
      console.log(tree);
      expect(tree).toMatchSnapshot();
});