import { Component } from "solid-js";

export type Repo = {
    id: string;
    html_url: string
    name: string
    description: string
    stargazers_count: string
    owner: {
        login: string
    }
}

interface Props {
    repo: Repo
}

const RepoCard: Component<Props> = ({ repo }) => {
    return (
        // # Conatiner
        <div class="max-w-md rounded overflow-hidden shadow-lg mb-3">
            {/* #Card */}
            <div class="px-6 py-2 bg-gray-200">
                {/* #CardHeader */}
                <div class="text-sm mb-2">&#11088; Stars: {repo.stargazers_count}  </div>
            </div>
            {/* #Card Content */}
            <div class="px-6">
                <a href={repo.html_url} class="text-blue-700" target="_blank" rel="noreferrer">
                    <strong>{repo.owner.login}</strong>/{repo.name}
                </a>
                <p class="text-gray-700 text-base">
                    {repo.description}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Save</span>
            </div>
        </div>
    )
}

export default RepoCard