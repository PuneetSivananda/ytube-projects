import dayjs from "dayjs";
import Image from "next/image";
import { number } from "zod";
import { RouterOutputs, trpc } from "../utils/trpc";
import { CreateTweet } from "./CreateTweet";
import relativeTime from "dayjs/plugin/relativeTime"
import updateLocal from "dayjs/plugin/updateLocale"
import { useIsFetching } from "@tanstack/react-query";
import { useEffect, useState } from "react";

dayjs.extend(relativeTime)
dayjs.extend(updateLocal)

dayjs.updateLocale("en", {
    relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: 'a few seconds',
        m: "1m",
        mm: "%dm",
        h: "1h",
        hh: "%dh",
        d: "1d",
        dd: "%dh",
        M: "1M",
        MM: "%dM",
        y: "1y",
        yy: "%dy"
    }
})

// Custom Hook to call more api on scrolling page down

const useScrollPosition = () => {
    const [scrollPos, setScrollPos] = useState(0)
    const handleScroll = () => {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        winScroll = document.body.scrollTop || document.documentElement.scrollTop
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
}

function Tweet({
    tweet
}: {
    tweet: RouterOutputs["tweet"]["timeline"]["tweets"],
    [number];
}) {
    return <div className="mb-4 border-b-2 border-gray-500">
        <div className="flex p-2">
            {tweet.author.image && (
                <Image
                    src={tweet.author.image}
                    alt={`${tweet.author.name}
                profile picture`}
                    width={48}
                    height={48}
                    className="rounded-full"
                />
            )}
            <div className="ml-2">
                <div className="flex items-center">
                    <p className="font-bold">{tweet.author.name}</p>
                    <p className="text-sm text-gray-400"> - {dayjs(tweet.createdAt).fromNow()}</p>
                </div>
                <div>
                    {tweet.text}
                </div>
            </div>
        </div>
    </div>
}

export function Timeline() {
    const { data, hasNextPage, fetchNextPage, isFetching } = trpc.tweet.timeline.useInfiniteQuery({
        limit: 10,
    }, {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
    })
    console.log("data", data)

    const tweets = data?.pages.flatMap((page) => page.tweets) ?? []

    return (
        <div>
            <CreateTweet />
            NextCursor:{data?.pages[0].nextCursor}
            <div className="border-l-2 border-r-2 border-t-2 border-gray-500">
                {tweets.map((tweet) => {
                    return <Tweet
                        key={tweet.id}
                        tweet={tweet} />
                })}
                <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetching}>
                    Load Next
                </button>
            </div>
        </div>
    )

}