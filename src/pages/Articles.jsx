import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Articles = () => {

    // créé un espace mémoire pour stocker des données
    // pour accéder à la valeur de l'espace mémoire, j'utilise la variable articles
    // pour modifier la valeur de l'espace mémoire, j'utilise la fonction setArticles
    // si l'espace mémoire n'existe pas encore, ça le créé avec en valeur un tableau vide

    // si ça existe, ça récupère la valeur de l'espace mémoire
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        (async () => {
            // const response = await fetch('http://localhost:5000/api/articles');
            // const articles = await response.json();


            const articles = [
                {
                    id: 1,
                    title: 'Article 1',
                    content: 'Contenu de l\'article 1'
                },
                {
                    id: 2,
                    title: 'Article 2',
                    content: 'Contenu de l\'article 2'
                },
                {
                    id: 3,
                    title: 'Article 3',
                    content: 'Contenu de l\'article 3'
                },
            ]

            // fonction qui permet de mettre à jour la valeur stockée dans le state
            // quand la valeur du state est modifiée, ça déclenche un nouveau rendu du composant
            // c'est à dire, la fonction du composant est exécutée à nouveau
            setArticles(articles);
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
                                <Link to={"/article/show/" +article.id}>Lien vers l'article</Link>
                                <h2>{article.title}</h2>
                                <p>{article.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>

    );
}

export default Articles;