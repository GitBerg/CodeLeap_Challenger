import { useState } from "react";

interface ModalEditPostProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, content: string) => void;
}

export default function ModalEditPost({
  isOpen,
  onClose,
  onSave,
}: ModalEditPostProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(title, content);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Post</h2>
        <form onSubmit={handleSubmit} className="form-group">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
            placeholder="Hello World"
          />
          <textarea
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="textarea-field"
            placeholder="Content here"
          />
          <div className="modal-buttons">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className={`btn-confirm-edit ${title === '' || content === '' ? 'disabled' : ''}`}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}