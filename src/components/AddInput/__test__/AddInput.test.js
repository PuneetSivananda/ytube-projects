import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn()


describe("Add Input Tests", () => {
    it('should render input element', () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });


    it('should be able to type in input', () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
        // trigger an event
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
        expect(inputElement.value).toBe("Go Grocery Shopping");
    });


    it('should have empty input when add button is clicked', () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
        const buttonElement = screen.getByRole("button", { name: /Add/i })
        // trigger an event
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
        fireEvent.click(buttonElement, {})
        expect(inputElement.value).toBe("");
    });

})
