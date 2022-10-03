import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter as Router } from 'react-router-dom';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <Router>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </Router>)
}


describe("Todo Footer", () => {
    it('should render the correct amount of imcomplete tasks', () => {
        render(
            <MockTodoFooter
                numberOfIncompleteTasks={5}
            />
        );
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
    });

    it('should render "task" when the number of incomplete tasks is 1', () => {
        render(
            <MockTodoFooter
                numberOfIncompleteTasks={1}
            />
        );
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
    });


})

it('should render to be truthy', () => {
    render(
        <MockTodoFooter
            numberOfIncompleteTasks={1}
        />
    );
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeTruthy()
});

it('should be visible', () => {
    render(
        <MockTodoFooter
            numberOfIncompleteTasks={1}
        />
    );
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeVisible()
});


it('should have the text content', () => {
    render(
        <MockTodoFooter
            numberOfIncompleteTasks={2}
        />
    );
    const paragraphElement = screen.getByRole("paragraph");
    expect(paragraphElement).toHaveTextContent("2 tasks left")
});


it('should have the text content asserted', () => {
    render(
        <MockTodoFooter
            numberOfIncompleteTasks={1}
        />
    );
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement.textContent).toBe("1 task left")
});