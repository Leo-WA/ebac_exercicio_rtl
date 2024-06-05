import React, { useState } from 'react';

interface Comment {
  id: number;
  text: string;
}

const PostComments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');

  const handleAddComment = () => {
    const newComment = {
      id: comments.length + 1,
      text: commentText,
    };
    setComments([...comments, newComment]);
    setCommentText('');
  };

  return (
    <div>
      <input
        data-testid="comment-input"
        type="text"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button data-testid="add-comment-button" onClick={handleAddComment}>
        Add Comment
      </button>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} data-testid="comment-item">
            {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostComments;
