import { useParams } from 'react-router-dom';

const ShowArticle = () => {

    const { id } = useParams();

    const article = {
        id: 1,
        title: 'Article 1',
        content: 'Contenu de l\'article 1'
    };

    // const articleFromApiResponse = await fetch('http://localhost:5000/api/articles/' + id);
    // const articleFromApi = await articleFromApiResponse.json(); 

    return (
        <article>
            <h1>{article.title}</h1>
        </article>
    )
}

export default ShowArticle;
