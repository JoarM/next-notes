import Link from "next/link";
import PocketBase from 'pocketbase';
import styles from "./Notes.module.css"
import CreateNote from "./CreateNote";
import { useRouter } from "next/router";

export const dynamic = "auto",
dynamicParams = true,
revalidate = 0,
fetchCache = "auto",
runtime = "nodejs",
preferredRegion = "auto"

async function getNotes() {
    const db = new PocketBase("http://127.0.0.1:8090");
    const data = await db.collection("notes").getFullList({
        sort: "-created",
    });

    return data as any[];
}

export default async function NotesPage() {
    const notes = await getNotes();

    return(
        <>
            <h1>Notes</h1>
            <div>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />
                })}
            </div>

            <CreateNote/>
        </>
    );
}

function Note({ note }: any) {
    const { id, title, content, created } = note || {};

    return (
        <Link href={`/notes/${id}`} className={styles.note}>
            <h2>{title}</h2>
            <h5>{content}</h5>
            <p>{created}</p>
        </Link>
    );
}