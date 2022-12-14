const CreateArticle = () => {

    // créer un formulaire avec un champ title et un champ content
    // lors du submit du formulaire, on envoie les données du formulaire au serveur avec 
    // une requête fetch de type POST sur l'URL http://localhost:5000/api/articles


    const handleSubmit = (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const content = event.target.content.value;

        fetch('http://localhost:5000/api/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content
            })
        });
        
    }

    return (
        <div>
            <h1>Page de création d'article</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Titre
                    <input type="text" name="title" />
                </label>
                <label>
                    Contenu
                    <input type="text" name="content" />
                </label>
                <button type="submit">Créer l'article</button>
            </form>

        </div>
    )
}

export default CreateArticle;