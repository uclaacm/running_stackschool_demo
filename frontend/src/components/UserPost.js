import React from "react";

function UserPost({ newPost, setNewPost, addPost }) {
    return (
        <div className="message">
            <input
                type='text'
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder='message here!!!'
                className="messageInput"
            />
            <div className='button' onClick={() => { addPost(); }}>
                Post
            </div>
        </div>

    );
}

export default UserPost;