import "./App.css";
import CreateArticle from "./pages/CreateArticle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";
import ShowArticle from "./pages/ShowArticle";
import Home from "./pages/Home";
import UpdateArticle from "./pages/UpdateArticle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/show/:id" element={<ShowArticle />} />
          <Route path="/article/create" element={<CreateArticle />} />
          <Route path="/article/update/:id" element={<UpdateArticle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
