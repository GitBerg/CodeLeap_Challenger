import {PostCard} from "../components/postCard";
import { useEffect, useState } from "react";
import { createPost, deletePost, editPost, getPosts } from "../services/postsService";
import { Post } from "../types/post";
import CreatePostForm from "../components/CreatePostForm";

const HomePage = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {
        fetchInitialPosts();
    }, []);

    const fetchInitialPosts = async () => {
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

      const handleCreatePost = async (title: string, content: string) => {
        const username = localStorage.getItem("username") || "Anonymous";
        try {
          const newPost = await createPost(username, title, content);
          setPosts((prevPosts) => [newPost, ...prevPosts]);
          return true
        } catch (error) {
          console.error("Erro ao criar post:", error);
        }
      };
    
      const handleEditPost = async (id: number, title: string, content: string) => {
        try {
          await editPost(id, title, content);
          setPosts((prevPosts) =>
            prevPosts.map((post) =>
              post.id === id ? { ...post, title, content } : post
            )
          );
        } catch (error) {
          console.error("Erro ao editar post:", error);
        }
      };
    
      const handleDeletePost = async (id: number) => {
        try {
          await deletePost(id);
          setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        } catch (error) {
          console.error("Erro ao deletar post:", error);
        }
      };

    if (loading) return <p >Carregando posts...</p>;
    if (error) return <p >{error}</p>;

    return (
        <div className="home_container">
            <div className="home_content">
                <div className="home_header">
                    <h1>CodeLeap Network</h1>
                </div>
                <div className="home_body">
                    <CreatePostForm onPostCreated={handleCreatePost} />
                
                <ul className="home_post_list">
                    {posts.map((post) => (
                        <PostCard 
                        key={post.id} 
                        post={post} 
                        onEdit={handleEditPost}
                        onDelete={handleDeletePost} />
                    ))}
                </ul>
                </div>
            </div>
        </div>

    )
}

export default HomePage