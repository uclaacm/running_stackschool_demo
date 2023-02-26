import React from "react";

function FeedPost({
    user,
    content,
    timestamp
}) {
    return (
        <div className="feedPost">
            <h3>{user}</h3>

            <div className="content">
                <div className="text">
                    {content}
                </div>
            </div>

            <div className="dateContainer">
                {timestamp}
            </div>
        </div>
    );
}

export default FeedPost;