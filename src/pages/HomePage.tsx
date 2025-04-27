import {PostCard} from "../components/postCard";
import { useEffect, useState } from "react";
import { getPosts } from "../services/postsService";
import { Post } from "../types/post";
import CreatePostForm from "../components/CreatePostForm";

const HomePage = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    const fetchPosts = async () => {
        setLoading(true);
        try {
            const postsData = await getPosts();
            setPosts(postsData);
        } catch (err) {
            setError("Erro ao carregar posts.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    if (loading) return <p className="text-center mt-10">Carregando posts...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

    return (
        <div className="home_container">
            <div className="home_content">
                <div className="home_header">
                    <h1>CodeLeap Network</h1>
                </div>
                <div className="home_body">
                    <CreatePostForm onPostCreated={fetchPosts} />
                
                <ul className="home_post_list">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </ul>
                </div>
            </div>
        </div>

    )
}

export default HomePage