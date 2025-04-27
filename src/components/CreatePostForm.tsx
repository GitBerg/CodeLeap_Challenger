import { useState } from "react";
import { createPost } from "../services/postsService"; // função de criar post

interface CreatePostFormProps {
    onPostCreated: () => void; // função para recarregar a lista de posts
}

export default function CreatePostForm({ onPostCreated }: CreatePostFormProps) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const username = localStorage.getItem("username") || "Anonymous";

        if (!title || !content) return;

        setLoading(true);
        try {
            await createPost(username, title, content);
            setTitle("");
            setContent("");
            onPostCreated();
        } catch (error) {
            console.error("Erro ao criar post:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="home_form" onSubmit={handleSubmit}>
            <h2>
                What’s on your mind?
            </h2>
            <div className="home_post_form">
                <div className="home_post_form_title">
                    <label htmlFor="title">Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Hello world" id="title" />
                </div>
                <div className="home_post_form_content">
                    <label htmlFor="content">Content</label>
                    <textarea onChange={(e) => setContent(e.target.value)} placeholder="Content here" id="content" />
                </div>
            </div>
            <button type="submit" className={`home_post_btn ${title === '' || content === '' ? 'disabled' : ''}`}>
                Create
            </button>
        </form>
    );
}