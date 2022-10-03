import { render, screen, fireEvent } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter as Router } from 'react-router-dom';

const MockFollowersList = ({ }) => {
    return (
        <Router>
            <FollowersList />
        </Router>)
}


describe("FollowersList Component", () => {

    beforeEach(() => {
        console.log("Running before each test")
    })

    beforeAll(() => {
        console.log("Running Once ")
    })

    it('should render follower item', async () => {
        render(
            <MockFollowersList />
        );
        const followerDivElement = await screen.findByTestId("follower-item-0")
        expect(followerDivElement).toBeInTheDocument()
    });


    it('should render multiple follower items', async () => {
        render(
            <MockFollowersList />
        );
        const followerDivElements = await screen.findAllByTestId(/follower-item/)
        expect(followerDivElements.length).toBe(1)
    });

    afterEach(() => {
        console.log("Running After each test")
    })

    afterAll(() => {
        console.log("Ran Once After all tests")
    })
})
