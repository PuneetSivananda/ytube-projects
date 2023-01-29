import { useState } from "react";
import { trpc } from "../utils/trpc";
import { object, string } from "zod"

export const tweetSchema = object({
  text: string({
    required_error: "Tweet text is required"
  })
    .min(10)
    .max(280)
})

export function CreateTweet() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const utils = trpc.useContext();

  const { mutateAsync } = trpc.tweet.create.useMutation({
    onSuccess: () => {
      setText("");
      utils.tweet.timeline.invalidate(); // invalidate cache and app refetches
    },
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      await tweetSchema.parse(
        { text }
      )
    } catch (e: any) {
      setError(e.message)
      return;
    }

    mutateAsync({ text });
  }

  return (
    <>
      {error && JSON.stringify(error)}
      <form onSubmit={handleSubmit} className="w-full flex flex-col border-2 rounded-md p-4 mb-4">
        <textarea
          className="shadow p-4 w-full"
          onChange={(e) => setText(e.target.value)} />
        <div className="mt-4 flex justify-end">
          <button
            className="bg-primary text-white rounded-md px-4 py-2"
            type="submit">
            Tweet
          </button>
        </div>
      </form>
    </>
  );
}
