import './App.css';
import CreateArticle from './pages/CreateArticle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Articles from './pages/Articles';
import ShowArticle from './pages/ShowArticle';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/show/:id" element={<ShowArticle/>} />        
          <Route path="/article/create" element={<CreateArticle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
