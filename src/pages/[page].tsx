import { useRouter } from "next/router";
import { Timeline } from "../components/Timeline";

export default function UserPage() {
    const router = useRouter()
    const name = router.query.page as string
    return (
        <div>
            <Timeline
                where={{
                    author: {
                        name,
                    }
                }}
            />
        </div>
    )
}