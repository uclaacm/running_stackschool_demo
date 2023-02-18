import React from 'react';

function FeedPost ({
    user,
    timestamp,
    content,
    likes,
}) {
    const numericalTime = new Date(timestamp);
    const date = numericalTime.toLocaleDateString("en-US", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
    })
    const time = numericalTime.toLocaleTimeString("en-US")

    return (
        <div className="feedPost">
            <h4>{user}</h4>
            <div className="content">
                <p>{content}</p>
            </div>
            <p>{likes}</p>
            <div className="date">
                <p>{date}</p>
                <p>{time}</p>
            </div>
        </div>
    )
}

export default FeedPost;