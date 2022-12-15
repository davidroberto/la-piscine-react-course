import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const handleDelete = async (id) => {
    await fetch("http://localhost:5000/api/articles/" + id, {
      method: "DELETE",
    });

    // permet de sortir de la liste l'article qui a été supprimé
    setArticles(articles.filter((article) => article.id !== id));
  };

  useEffect(() => {
    (async () => {
      // const response = await fetch('http://localhost:5000/api/articles');
      // const articles = await response.json();

      const fakeArticlesFromApi = [
        {
          id: 1,
          title: "Article 1",
          content: "Contenu de l'article 1",
        },
        {
          id: 2,
          title: "Article 2",
          content: "Contenu de l'article 2",
        },
        {
          id: 3,
          title: "Article 3",
          content: "Contenu de l'article 3",
        },
      ];
      setArticles(fakeArticlesFromApi);
    })();
  }, []);

  return (
    <>
      <Header />

      <div>
        <h1>Articles</h1>
        <div>
          {articles.map((article) => {
            return (
              <div key={article.id}>
                <Link to={"/article/show/" + article.id}>Lien vers l'article</Link>
                <button onClick={() => handleDelete(article.id)}>Supprimer</button>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Articles;
