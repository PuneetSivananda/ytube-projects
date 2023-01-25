import { useState } from "react";
import { appRouter } from "../server/api/root";

export function CreateTweet() {
    const [text, setText] = useState("")
    const [error, setError] = useState("")

    const { mutationAsync } = appRouter.tweet.create.useMutation()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea onChange={(e) => setText(e.target.value)} />
            <div>
                <button type="submit">
                    Tweet
                </button>
            </div>
        </form>

    )
}