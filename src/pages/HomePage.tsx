import {PostCard} from "../components/postCard";
import { useEffect, useState } from "react";
import { createPost, deletePost, editPost, getPosts } from "../services/postsService";
import { Post } from "../types/post";
import CreatePostForm from "../components/CreatePostForm";
import toast from "react-hot-toast";
import PostSkeleton from "../components/PostSkeleton";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';



const HomePage = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchInitialPosts();
    }, []);

    const fetchInitialPosts = async () => {
        setLoading(true);
        try {
          const postsData = await getPosts();
          setPosts(postsData);
        } catch (err) {
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
          toast.success("Post edited successfully!", {
            duration: 3000,
                    position: "top-right", 
                    style: {
                        backgroundColor: "#4BB543",
                        color: "#fff",
                        borderRadius: "8px",
                    },
          });
        } catch (error) {
          console.error("Erro ao editar post:", error);
        }
      };
    
      const handleDeletePost = async (id: number) => {
        try {
          await deletePost(id);
          setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
          toast.success("Post deleted successfully!", {
            duration: 3000,
                    position: "top-right", 
                    style: {
                        backgroundColor: "#4BB543",
                        color: "#fff",
                        borderRadius: "8px",
                    },
          });
        } catch (error) {
          console.error("Erro ao deletar post:", error);
        }
      };

      if (loading) {
        return (
          <div className="home-loading">
        
            <Skeleton width="40%" height={30} />
      
            <div className="form-skeleton">
              <Skeleton width="60%" height={20} style={{ marginBottom: '16px' }} />
              <Skeleton width="100%" height={40} style={{ marginBottom: '8px' }} />
              <Skeleton width="100%" height={100} style={{ marginBottom: '16px' }} />
              <Skeleton width="120px" height={40} />
            </div>
      
            
            <div className="posts-skeleton">
              {[...Array(3)].map((_, index) => (
                <PostSkeleton key={index} />
              ))}
            </div>
          </div>
        );
      }

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