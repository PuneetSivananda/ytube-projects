import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed as prop', () => {
    render(<Header title={"My Header"} />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});

it('should render same text passed as role having heading', () => {
    render(<Header title={"My Header"} />);
    const headingElement = screen.getByRole("heading", { name: "My Header" })
    expect(headingElement).toBeInTheDocument();
});


it('should render same id for getting the data', () => {
    render(<Header title={"My Header"} />);
    const headingElement = screen.getByTestId("header-1")
    expect(headingElement).toBeInTheDocument();
});

// FIND-BY

it('should render same text using find by', async () => {
    render(<Header title={"My Header"} />);
    const headingElement = await screen.findByText(/my header/i)
    expect(headingElement).toBeInTheDocument();
});


// QUERY-BY

it('should render same text using find by', () => {
    render(<Header title={"My Header"} />);
    const headingElement = screen.queryByText(/some other header/i)
    expect(headingElement).not.toBeInTheDocument();
});


// GETALL-BY

it('should render same text using find by', () => {
    render(<Header title={"My Header"} />);
    const headingElements = screen.getAllByRole("heading")
    expect(headingElements.length).toBe(1);
});


