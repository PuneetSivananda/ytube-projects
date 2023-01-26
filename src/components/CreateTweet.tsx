import { useState } from "react";
import { trpc } from "../utils/trpc";
import { object, string } from "zod"

export const tweetSchema = object({
  text: string({
    required_error: "Tweet text is required"
  })
    .min(10)
    .max(200)
})

export function CreateTweet() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const utils = trpc.useContext();

  const { mutateAsync } = trpc.tweet.create.useMutation({
    onSuccess: () => {
      setText("");
      // utils.tweet.timeline.invalidate();
    },
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await tweetSchema.parse(
        { text }
      )
    } catch (e) {
      setError(e.message)
      return;
    }

    mutateAsync({ text });
  }

  return (
    <>
      {error && JSON.stringify(error)}
      <form onSubmit={handleSubmit}>
        <textarea onChange={(e) => setText(e.target.value)} />
        <div>
          <button type="submit">
            Tweet
          </button>
        </div>
      </form>
    </>
  );
}
