import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter as Router } from 'react-router-dom';

const MockTodo = ({ }) => {
    return (
        <Router>
            <Todo />
        </Router>)
}


const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
    const buttonElement = screen.getByRole("button", { name: /add/i })
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } })
        fireEvent.click(buttonElement)
    });
}

describe("Todo Component", () => {
    it('should render the correct amount of imcomplete tasks', () => {
        render(
            <MockTodo />
        );
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
        const buttonElement = screen.getByRole("button", { name: /add/i })
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
        fireEvent.click(buttonElement)
        const divElement = screen.getByText(/Go Grocery Shopping/i)
        expect(divElement).toBeInTheDocument()
    });


    it('should render the 3 elements in the screen', () => {
        render(
            <MockTodo />
        );
        addTask(["Go Grocery Shopping", "Pet My Dog", "Wash my hands"])
        const divElement = screen.getAllByTestId("task-container")
        expect(divElement.length).toBe(3)
    });

})
