import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Projet piscine</h1>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/article/create">Créer un article</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
