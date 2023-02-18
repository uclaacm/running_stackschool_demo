import axios from 'axios';
import { useState, useEffect } from 'react';
import UserPost from './components/UserPost';
import FeedPost from './components/FeedPost';

function App() {
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
<<<<<<< HEAD
    <div>
      <div>
        <input
          type='text'
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder='message here!!!'
        />
        <button onClick={() => addPost()}> Post </button>
      </div>
      
=======
    <div className='App'>
      <UserPost newPost={message} setNewPost={setMessage} addPost={addPost} />
>>>>>>> b03d596f97834fcb0c7977a0f20f8148f5f9a65a
      {posts.map((post, i) => (
        <div key={i}>
          <FeedPost
            key={post._id}
            content={post.content}
            user={post.user}
            likes={post.num_likes}
            timestamp={post.timestamp}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
