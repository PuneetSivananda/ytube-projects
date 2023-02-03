import { Component } from "solid-js";
import { repos, setUserName } from "../App";

const Home: Component = () => {
    const refetchWithUsername = (e: Event) => {
        e.preventDefault()
        const userNameInput = document.getElementById("usernameInput ") as HTMLInputElement
        setUserName(userNameInput.value)
    }
    return (
        <div>
            <form class="mb-3" onSubmit={(e) => {
                refetchWithUsername(e)
            }}>
                <input type="text" class="p-1 items-center" id="usernameInput" required />
            </form>
            <h1>Home Component</h1>
            <p>{JSON.stringify(repos())}</p>
        </div>
    )
}

export default Home