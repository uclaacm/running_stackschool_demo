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
        <div className='feedPost'>
            <h4>{user}</h4>

            <div className='content'>
                <div className='text'>
                    <p>{content}</p>
                </div>
            </div>

            <div className='dateContainer'>
                <p className='date'>{date}</p>
                <p className='date'>{time}</p>
            </div>
        </div>
    )
}

export default FeedPost;