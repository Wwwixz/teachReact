import { Link} from "react-router-dom";

function Header() {
    return (
        <header className="flex justify-between items-center px-8 py-4">
            <h1>TeachReact</h1>
            <nav className="flex gap-4">
                <Link to="/">Главная</Link>
                <Link to="/catalog">Каталог</Link>
                <Link to="/about">О нас</Link>
            </nav>
        </header>
    )
}

export default Header;