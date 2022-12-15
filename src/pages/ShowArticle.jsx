import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  const fakeArticleFromApi = {
    id: 1,
    title: "Article 1",
    content: "Contenu de l'article 1",
  };

  setArticle(fakeArticleFromApi);

  //   useEffect(() => {
  //     (async () => {
  //       const response = await fetch("http://localhost:5000/api/articles/" + id);
  //       const article = await response.json();
  //       setArticle(article);
  //     })();
  //   }, [id]);

  return (
    <article>
      <h1>{article.title}</h1>
    </article>
  );
};

export default ShowArticle;
