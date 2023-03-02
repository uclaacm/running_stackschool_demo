import axios from 'axios';
import { useState, useEffect } from 'react';
import UserPost from '../components/UserPost';
import FeedPost from '../components/FeedPost';
import '../styles/feed.css';
import ProfileButton from '../components/ProfileButton';

function FeedPage() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');
  const URL = 'http://localhost:8080';

  const getFeed = () => {
    axios
      .get(URL + '/feed')
      .then(response => {
        setPosts(response.data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    getFeed();
  }, []);

  function addPost() {
    if (message === '') {
      alert('message cannot be empty!');
      return;
    }

    axios
      .post(URL + '/feed/new', {
        content: message,
        user: 'testuser'
      })
      .then(response => {
        console.log(response);
        getFeed();
      })
      .catch(console.error);

    setMessage('');
  }

  return (
    <div className='App'>
      <div className='userPrompt'>
        <ProfileButton />
        <UserPost newPost={message} setNewPost={setMessage} addPost={addPost} />
      </div>

      {posts
        .map((post) => (
          <FeedPost
            key={post._id}
            content={post.content}
            user={post.user}
            id={post._id}
            timestamp={post.timestamp}
          />
        ))
        .reverse()}
    </div>
  );
}

export default FeedPage;
