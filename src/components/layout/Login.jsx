import React from 'react'
import './Login.css'
import Imagem1 from '../img/image.svg'
import GoogleIcon from '../img/google_g_icon.svg'

function Login() {
  return (
    <div className="Home">
      <div className="Image">
        <img src={Imagem1} alt="Imagem da equipe" />
      </div>
      <div className="LoginHome">
        <div className="LoginTitle">
          <p>Bem vindo de volta</p>
          <h1>Faça login na sua conta</h1>
        </div>
        <div className="LoginInputs">
          <p>E-mail</p>
          <form action="">
            <input type="email" placeholder="example@gmail.com" />
          </form>
          <p>Senha</p>
          <form action="">
            <input type="password" placeholder="*********" />
          </form>
        </div>
        <div className="LoginRememberForgot">
          <div className="LoginRemember">
            <form action="">
              <input type="checkbox" /> <span>Lembre de mim</span>
              <a href="_blank">
                Esqueceu sua senha?
              </a>
            </form>
          </div>
        </div>
        <div className="LoginDefault">
          <form action="">
            <input type="submit" value="Entrar" />
          </form>
        </div>
        <div className="LoginGoogle">
          <div className="LoginGoogleImage">
            <img src={GoogleIcon} alt="Ícone do Google" />
          </div>
          <form action="">
            <input type="submit" value="Ou faça login com o Google" />
          </form>
        </div>
        <div className="RegisterAccount">
          <p>Não tem uma conta? <a href="_blank">Cadastre-se</a></p>
        </div>
      </div>
    </div>
  )
}
export default Login