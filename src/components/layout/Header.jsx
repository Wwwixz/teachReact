import { Link} from "react-router-dom";
import { useState } from "react";

function Header() {
    const [search, setSearch] = useState("");
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-[#F4F4EF] text-[#171914]">
            <h1 className="text-3xl font-bold">nova.</h1>
            <nav className="flex gap-4 font-medium">
                <Link to="/" className="hover:opacity-60">Главная</Link>
                <Link to="/catalog" className="hover:opacity-60">Каталог</Link>
                <Link to="/about" className="hover:opacity-60">О нас</Link>
            </nav>
            <input 
                type="text" 
                placeholder="Поиск товаров..." 
                className="bg-white rounded-lg px-4 py-2 border" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
                <button onClick={ () => setSearch("")}>Очистить</button>
            )}
            <p>{search}</p>
        </header>
    )
}

export default Header;