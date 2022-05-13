import MainPost from "./pages/MainPost";
import CreatePost from './pages/CreatePost';
import NotFound from './pages/NotFound';
import Post from "./pages/Post";
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <nav className="navbar">
          <Link to="/" className="links">Main Post</Link>
          <Link to="/createpost" className="links">Create Post</Link>
        </nav>
        <Routes>
          <Route path='/' element = {<MainPost></MainPost>}></Route>
          <Route path='/createpost' element = {<CreatePost></CreatePost>}></Route>
          <Route path="/post/:postId" element={<Post></Post>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
