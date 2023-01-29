import dayjs from "dayjs";
import Image from "next/image";
import { number } from "zod";
import { RouterOutputs, trpc } from "../utils/trpc";
import { CreateTweet } from "./CreateTweet";
import relativeTime from "dayjs/plugin/relativeTime"
import updateLocal from "dayjs/plugin/updateLocale"
import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai"
import { InfiniteData, QueryClient, useQueryClient } from "@tanstack/react-query";

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

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const scrolled = (winScroll / height) * 100
        setScrollPos(scrolled)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return scrollPos
}

const updateCache = ({
    client,
    variables,
    data,
    action,
}: {
    client: QueryClient
    variables: {
        tweetId: string
    }
    data: {
        userId: string
    }
    action: "like" | "unlike"
}) => {

    client.setQueryData(
        [
            [
                "tweet",
                "timeline"
            ],
            {
                "input": {
                    "limit": 10
                },
                "type": "infinite"
            }
        ],
        (oldData: any) => {
            console.log({ oldData })
            const newData = oldData as InfiniteData<RouterOutputs["tweet"]["timeline"]>
            const value = action === "like" ? 1 : -1
            const newTweets = newData.pages.map((page) => {
                return {
                    tweets: page.tweets.map((tweet) => {
                        if (tweet.id === variables.tweetId) {
                            return {
                                ...tweet,
                                likes: action === "like" ? [data.userId] : [],
                                _count: {
                                    likes: tweet._count.likes + value
                                }
                            }
                        }
                        return tweet
                    })
                }
            })
            return {
                ...newData,
                pages: newTweets
            }
        })
}

function Tweet({
    tweet,
    client
}: {
    tweet: RouterOutputs["tweet"]["timeline"]["tweets"],
    client: QueryClient
}) {

    const likeMutation = trpc.tweet.like.useMutation({
        onSuccess: (data, variables) => {
            updateCache({
                client,
                data,
                variables,
                action: 'like'
            })
        }
    }).mutateAsync
    const unLikeMutation = trpc.tweet.unlike.useMutation({
        onSuccess: (data, variables) => {
            updateCache({
                client,
                data,
                variables,
                action: 'unlike'
            })
        }
    }).mutateAsync

    const hasLiked = tweet.likes.length > 0

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
        <div className="flex mt-4 p-2 items-center">
            <AiFillHeart
                color={hasLiked ? "red" : "gray"}
                size="1.5rem"
                onClick={() => {
                    if (hasLiked) {
                        unLikeMutation({
                            tweetId: tweet.id,
                        })
                        return
                    }
                    likeMutation({
                        tweetId: tweet.id,
                    })
                }}
            />
            <span className="text-sm text-gray-500">{tweet._count.likes}</span>
        </div>
    </div>
}

export function Timeline() {
    const client = useQueryClient()
    const scrollPosition = useScrollPosition()

    const { data, hasNextPage, fetchNextPage, isFetching } = trpc.tweet.timeline.useInfiniteQuery({
        limit: 10,
    }, {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
    })

    const tweets = data?.pages.flatMap((page) => page.tweets) ?? []

    useEffect(() => {
        if (scrollPosition > 90 && hasNextPage && !isFetching) {
            fetchNextPage()
        }
    }, [scrollPosition, hasNextPage, isFetching, fetchNextPage])

    console.log("tweets", tweets)

    return (
        <div>
            <CreateTweet />
            <div className="border-l-2 border-r-2 border-t-2 border-gray-500">
                {tweets.map((tweet) => {
                    return <Tweet
                        key={tweet.id}
                        tweet={tweet}
                        client={client}
                    />
                })}

                {!hasNextPage && <p>No More Tweets Found...</p>}
            </div>
        </div>
    )

}