import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const id = params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const guide = await res.json();

    if (res.ok) {
        return {
            props: {
                guide
            }
        };
    }
    else {
        throw redirect(301, '/guides');
    }
}