import { useEffect, useState } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import * as api from './api/api';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchAllPosts = async () => {
     const data = await api.getPosts();
      setPosts(data);
    }

    if (posts.length === 0) fetchAllPosts();
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <main className="App">
      <header className="App-header">
        <h1 className="my-3">Simple Blog</h1>
      </header>

      <section>
        <h2>Posts</h2>
        {
          currentPosts.map(post => (
            <Posts key={post.id} post={post} />
          ))
        }

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          posts={posts}
          postsPerPage={postsPerPage}
        />
      </section>
    </main>
  );
}

export default App;
