import { useState } from "react";
import toast from "react-hot-toast";

interface CreatePostFormProps {
    onPostCreated: (title: string, content: string) => Promise<true | undefined>;
}

export default function CreatePostForm({ onPostCreated }: CreatePostFormProps) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !content) return;

        try {
            const result = await onPostCreated(title, content);
            if (result) {
                toast.success("Post created successfully!", {
                    duration: 3000,
                    position: "top-right", 
                    style: {
                        backgroundColor: "#4BB543",
                        color: "#fff",
                        borderRadius: "8px",
                    },
                });
            }
            setTitle("");
            setContent("");
        } catch (error) {
            console.error("Erro ao criar post:", error);
        } 
    };

    return (
        <form className="home_form fade-in" onSubmit={handleSubmit}>
            <h2>
                What’s on your mind?
            </h2>
            <div className="home_post_form">
                <div className="home_post_form_title">
                    <label htmlFor="title">Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Hello world" id="title" />
                </div>
                <div className="home_post_form_content">
                    <label htmlFor="content">Content</label>
                    <textarea  onChange={(e) => setContent(e.target.value)} value={content} placeholder="Content here" id="content" />
                </div>
            </div>
            <button type="submit" className={`home_post_btn ${title === '' || content === '' ? 'disabled' : ''}`}>
                Create
            </button>
        </form>
    );
}