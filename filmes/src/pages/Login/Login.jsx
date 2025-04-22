import Logo from "../../assets/img/logo.svg"
import "./Login.css"
import Botao from "../../components/botao/Botao"
    
const Login = () => {
    return(
        <main className = "main_login">
            <div className = "banner"></div>
            <section className = "section_login">
                <img src={Logo} alt="Logo do Filmoteca"x />
                <form action="" className="form_login">
                    
                    <h1>Login</h1>

                     <div className="divisor">
                        <div>
                            <label htmlFor="">Email:</label><br />
                            <input type="email" name="email" placeholder="Digite seu e-mail" /><br />   
                        </div>
                        <br />
                        <div>
                            <label htmlFor="">Senha:</label><br />
                            <input type="password" name="senha" placeholder="Digite sua senha"/>
                        </div>
                    </div> 
                    <Botao/>
                </form>
            </section>
        </main>
    )
}

export default Login;