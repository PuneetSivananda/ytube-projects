import { Cancel, Room } from "@material-ui/icons";
import React, { useState, useRef } from "react";
import "./register.css"

export default function Register({ setShowRegister }) {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const newUser = {
            username: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        try {
            const res = await fetch("/users/register", {
                method: "POST",
                body: JSON.stringify(newUser)
            }).then(resp => resp.json())
            console.log(res)
            setSuccess(true)

        } catch (e) {
            setError(true)
            console.log(e)
        }
    }

    return (
        <div className="registerContainer">
            <div className="logo">
                <Room />
                lamaPin
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" ref={nameRef} />
                <input type="email" placeholder="email" ref={emailRef} />
                <input type="password" placeholder="password" ref={passwordRef} />
                <button className="registerButton">Register</button>
                {success &&
                    <span className="success">Successful, you can login</span>}
                {error && <span className="fail">Somthing Went Wrong!</span>}

            </form>
            <Cancel className="registerCancel" onClick={() => setShowRegister(false)} />
        </div>
    )
}