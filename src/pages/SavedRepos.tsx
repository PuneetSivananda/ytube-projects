import { Component, createSignal, For } from "solid-js";
import RepoCard, { Repo } from "../components/RepoCard";

const [savedRepos, setSavedRepos] = createSignal([] as Repo[])

const SavedRepos: Component = () => {
    return (
        <div>
            <h1>Your Saved Repos</h1>
            <For each={savedRepos()}>
                {(repo: Repo) => {
                    return <RepoCard
                        repo={repo}
                    />
                }}
            </For>
        </div>
    )
}
export { setSavedRepos, savedRepos }
export default SavedRepos