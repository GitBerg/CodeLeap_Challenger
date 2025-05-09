import { Post } from "../types/post"
import { getTimeSincePost } from "../utils/timeUtils";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import ModalEditPost from "./ModalEditPost";
import { useState } from "react";


interface PostCardProps {
    post: Post;
    onEdit: (id: number, title: string, content: string) => void;
    onDelete: (id: number) => void;
}
export const PostCard = ({ post, onEdit, onDelete }: PostCardProps) => {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [fadeClass, setFadeClass] = useState("fade-in");

    const username = localStorage.getItem("username") || "Anonymous";

    const handleDeleteConfirm = () => {
        setFadeClass("fade-out");
        setShowDeleteModal(false);
        setTimeout(() => {
            onDelete(post.id);
        }, 300);

    };

    const handleEditConfirm = (title: string, content: string) => {
        onEdit(post.id, title, content);
        setShowEditModal(false);
    };

    return (
        <>
        <div className={`post_card ${fadeClass}`}>
            <div className="post_card_header">
                <h2>{post.title}</h2>
                <div className={`post_card_header_dots ${username === post.username ? '' : 'hidden'}`}>
                    <span onClick={() => setShowDeleteModal(true)}><MdDeleteForever /></span>
                    <span onClick={() => setShowEditModal(true)}><FaRegEdit /></span>
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

            <ConfirmDeleteModal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDeleteConfirm}
            />

            <ModalEditPost
                isOpen={showEditModal}
                onClose={() => setShowEditModal(false)}
                onSave={handleEditConfirm}
                initialTitle={post.title}
                initialContent={post.content}

            />
       </>
    )
}

