import Image from "next/image";
import { number } from "zod";
import { RouterOutputs, trpc } from "../utils/trpc";
import { CreateTweet } from "./CreateTweet";

function Tweet({
    tweet
}: {
    tweet: RouterOutputs["tweet"]["timeline"]["tweets"],
    // [number];
}) {
    return <div>
        <div>
            {tweet.author.image &&
                <Image
                    src={tweet.author.image}
                    alt={`${tweet.author.name}
                profile picture`}
                    width={48}
                    height={48}
                    className="rounded-full"
                />
            }
        </div>
    </div>
}

export function Timeline() {
    const { data } = trpc.tweet.timeline.useQuery({
        limit: 2,
    })
    return (
        <div>
            <CreateTweet />
            {JSON.stringify(data)}
            {data?.tweets.map((tweet) => {
                return <Tweet key={tweet.id} tweet={tweet} />
            })}
        </div>
    )

}