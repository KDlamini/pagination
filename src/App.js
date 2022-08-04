import { useEffect, useState } from 'react';
import './App.css';
import * as api from './api/api';

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
        <h1 className="my-3">Simple posts</h1>
      </header>

      <section>
        <h2>Posts</h2>
      </section>
    </main>
  );
}

export default App;
