import { Post } from "../types/post"
import { getTimeSincePost } from "../utils/timeUtils";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";



export const PostCard = ({ post }: { post: Post }) => {

    const username = localStorage.getItem("username") || "Anonymous";

    return (
        <div className="post_card">
            <div className="post_card_header">
                <h2>{post.title}</h2>
                <div className={`post_card_header_dots ${username === post.username ? '' : 'hidden'}`}>
                    <span><MdDeleteForever /></span>
                    <span><FaRegEdit /></span>
                </div>
            </div>
            <div className="post_card_body">
                <div className="post_card_body_info">
                    <p className="post_card_body_info_author">@{post.username}</p>
                    <p>{getTimeSincePost(post.created_datetime)}</p>
                </div>
                <div className="post_card_body_content">
                    {post.content}
                </div>
            </div>
        </div>
    )
}

