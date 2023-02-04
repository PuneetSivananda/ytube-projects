import { Component } from "solid-js";
import { repos, setUserName } from "../App";
import RepoCard from "../components/RepoCard";

const SavedRepos: Component = () => {

    return (
        <div>
            <h1>SavedRepos Component</h1>
            <RepoCard repo={{
                id: "",
                html_url: "",
                name: "Sample",
                description: "Description",
                stargazers_count: "3",
                owner: {
                    login: "yes"
                }
            }} />
        </div>
    )
}

export default SavedRepos