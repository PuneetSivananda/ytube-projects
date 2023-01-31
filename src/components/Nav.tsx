import { NavLink } from "@solidjs/router";
import { Component } from "solid-js";

const Nav: Component = () => {
    return (
        <nav class="mt-5 mb-3">
            <NavLink href="/" class="btn btn-blue mr-2" end activeClass="btn-success">
                Home
            </NavLink>
            <NavLink href="/savedrepos" class="btn btn-blue mr-2" activeClass="btn-success">
                Saved Repos ~ 5
            </NavLink>
        </nav >
    )
}

export default Nav