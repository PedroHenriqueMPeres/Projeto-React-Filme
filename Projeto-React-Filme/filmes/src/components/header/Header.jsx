import "./Header.css";
import Logo from "../../assets/img/logo.svg"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <div className="layout_grid cabecalho">
            <Link to="/">
               <img src={Logo} alt="logo da filmoteca" />
            </Link>
            <nav className="nav_header">
                <Link to="/Filme" className="link_header" >Filmes</Link>
                <Link to="/Genero" className="link_header" >Gênero</Link>
            </nav> 
            
            </div>
            {/* mo rolê pra esse negocio vei, seloko*/}
        </header>
    )
}
export default Header;