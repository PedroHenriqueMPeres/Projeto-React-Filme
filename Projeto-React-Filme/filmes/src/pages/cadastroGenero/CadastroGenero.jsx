import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";

const genero =() => {
    return(
        <>
        <Header/>
        <main>
            <Cadastro 
            tituloCadastro="Cadastro de Genero" 
            visibilidade="none"
            placeholder="Genero"
            />
            <Lista 
            
            tituloLista = "Lista de Genero"
            visivel = "none"
            
            />
        </main>
        <Footer/>
        </>
    )
}
export default genero;