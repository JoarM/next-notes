"use client";

import { useState } from "react";

export default function CreateNote() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const create = async (e: any) => {
        e.preventDefault();

        await fetch("http://127.0.0.1:8090/api/collections/notes/records",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                content,
            }),
        });

        setTitle("");
        setContent("");

        window.location.reload();
    }

    return (
        <form onSubmit={create}>
            <h3>Create new note</h3>
            <input type="text" 
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <textarea placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">
                Create note
            </button>
        </form>
    );
}