import { Component, For } from "solid-js";
import { repos, userName, setUserName } from "../App";
import RepoCard, { Repo } from "../components/RepoCard";

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
                <div class="flex space-x-4">
                    <input type="text" class="p-1 items-center border-2 border-black-500" id="usernameInput" required />
                    <button class="btn btn-dark px-3 w-auto">Fetch</button>
                </div>
            </form>
            <h3>
                Github Repos for {userName()}
            </h3>

            <For each={repos()}>
                {(repo: Repo) => {
                    return <RepoCard
                        repo={repo}
                    />
                }}
            </For>
        </div>
    )
}

export default Home