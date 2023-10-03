import mobilePerfil from "./mobilePerfil.module.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

/*Galy una red social en donde puedes compartir y descargar fotos.
 (esta en beta falta actualizarlos para desktop)*/
function VistaLobby() {
  return (
    <div className={mobilePerfil.lobby}>
      <div className={mobilePerfil.image}></div>
      <div className={mobilePerfil.log_vista}>
        <div className={mobilePerfil.first}>
          <h1 className={mobilePerfil.nombre}>Galy</h1>
          <p className={mobilePerfil.texto}>
            Galy es el lugar idoneo para inspirarte. Aqui podras descubrir
            nuevas ideas - publicar momentos - descargar tus posts favoritos
          </p>
        </div>
        <div className={mobilePerfil.second}>
          <Link to="login">
            <div className={mobilePerfil.iniciar}>INICIAR SESION</div>
          </Link>
          <div className={mobilePerfil.linea}>
            <span></span>
            <span>O</span>
            <span></span>
          </div>
          <Link to="sign">
            <div className={mobilePerfil.registro}>CREAR CUENTA</div>
          </Link>
          <p className={mobilePerfil.creador}>created by Jayme Ln</p>
        </div>
      </div>
    </div>
  );
}

//crea su cuenta
function SignUp() {
  return (
    <div className={mobilePerfil.sign}>
      <div className={mobilePerfil.arriba}>
        <div className={mobilePerfil.image}></div>
      </div>
      <div className={mobilePerfil.abajo}>
        <div className={mobilePerfil.root}>
        </div>
        <h1 className={mobilePerfil.titulo}>Galy</h1>
        <div className={mobilePerfil.inputs}>
          <div>
            <input type="text" placeholder="usuario" />
          </div>
          <div>
            <input type="text" placeholder="contraseña" />
          </div>
          <div>
            <input type="text" placeholder="repite tu contraseña" />
          </div>
          <div className={mobilePerfil.send}>
            <span>Crear cuenta</span>
            <svg
              class="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path
                d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                fill="var(--container-color)"
              >
              </path>
              <path
                d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                fill="var(--container-color)"
              >
              </path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

//inicia sesion
function Login() {
  return (
    <div className={`${mobilePerfil.sign}`}>
      <div className={`${mobilePerfil.arriba}`}>
        <div class={`${mobilePerfil.image}`}></div>
      </div>
      <div className={`${mobilePerfil.abajo}`}>
        <h1 className={`${mobilePerfil.titulo}`}>galy</h1>
        <div className={`${mobilePerfil.inputs}`}>
          <div>
            <input type="text" placeholder="usuario"/>
          </div>
          <div>
            <input type="password" placeholder="introduce tu contraseña"/>
          </div>
          <div className={`${mobilePerfil.send}`}>
            <span>Iniciar sesion</span>
            <svg
              class="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path
                d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                fill="var(--container-color)"
              >
              </path>
              <path
                d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                fill="var(--container-color)"
              >
              </path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SinLoguear() {
  return (
    <div className={mobilePerfil.sin_log}>
      {
        /*
      <div className={mobilePerfil.image}></div>
  <div className={mobilePerfil.log_vista}></div>*/
      }
      {/*vista de iniciar sesion - login - crearCuenta*/}
      <Routes>
        <Route path="/" element={<VistaLobby></VistaLobby>}></Route>
        <Route path="sign" element={<SignUp></SignUp>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

function Logueado() {
  //aqui esta funcion va a mostrarse si el usuario ya esta logueado
  //para eso se use el token
  return;
}

function Perfil({ footer }) {
  //footer es el jsx del footer- no mover
  const [token, setToken] = useState(false);
  return (
    <div className={mobilePerfil.perfilVentana}>
      <div className={mobilePerfil.vista}>
        {token ? <Logueado></Logueado> : <SinLoguear></SinLoguear>}
      </div>

      <div className={mobilePerfil.footer_perfil}>
        {footer}
      </div>
    </div>
  );
}


export default Perfil;
