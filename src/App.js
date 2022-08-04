import { useEffect, useState } from 'react';
import Posts from './components/Posts';
import * as api from './api/api';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
     const data = await api.getPosts();
      setPosts(data);
    }

    if (posts.length === 0) fetchAllPosts();
  });

  return (
    <main className="App">
      <header className="App-header">
        <h1 className="my-3">Simple Blog</h1>
      </header>

      <section>
        <h2>Posts</h2>
        {
          posts.map(post => (
            <Posts key={post.id} post={post} />
          ))
        }
      </section>
    </main>
  );
}

export default App;
