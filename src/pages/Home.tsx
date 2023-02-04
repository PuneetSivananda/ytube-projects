import { Component, createEffect } from "solid-js";
import { repos, userName, setUserName } from "../App";

const Home: Component = () => {

    const refetchWithUsername = (e: Event) => {
        e.preventDefault()
        const userNameInput = document.getElementById("usernameInput") as HTMLInputElement
        setUserName(userNameInput.value)
    }

    return (
        <div>
            <form class="mb-3" onSubmit={(e) => {
                refetchWithUsername(e)
            }}>
                <input type="text" class="p-1 items-center" id="usernameInput" required />
                <button class="btn-dark px-3 w-auto">Fetch</button>
            </form>
            <h3>
                Github Repos for {userName()}
            </h3>
            
            <p>{JSON.stringify(repos())}</p>
        </div>
    )
}

export default Home