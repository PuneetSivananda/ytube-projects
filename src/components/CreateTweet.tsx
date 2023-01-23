import { useState } from "react";

export function CreateTweet() {
    const [text, setText] = useState("")

    return (
        <form>
            <textarea onChange={() => {
                
            }} />
        </form>

    )
}