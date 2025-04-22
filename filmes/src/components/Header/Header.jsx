import "./Header.css";
import Logo from "../../assets/img/logo.svg"

const Header = () => {
    return(
        <header>
            <div className="layout_grid">
        <img src={Logo} alt="Logo" />
        <nav className="nav_header">
            <a className="link_header" href="">Filmes</a>
            <a className="" href="">Genero</a>
        </nav>
        </div>
        </header>
    )
}

export default Header;

