import { useState } from "react";
import { useUser } from "../context/UserContext.jsx";

export function Login() {
  const { postLogin } = useUser();
  const [inputsValue, setInputsValue] = useState({
    email: "",
    password: "",
  });

  const handelInputsValue = (event) =>
    setInputsValue({ ...inputsValue, [event.target.name]: event.target.value });

  return (
    <>
      <div className="form-register pt-3 pb-3">
        <h1 className="col-6">Inicio Sesión</h1>
        <form className="row g-3 col-6">
          <div className="col-12">
            <label htmlFor="inputEmail" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="email"
              placeholder="Ingresar correo electrónico"
              onChange={handelInputsValue}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              name="password"
              placeholder="Ingresar contraseña"
              onChange={handelInputsValue}
            />
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(event) => postLogin(event, inputsValue)}
              disabled={inputsValue.email === "" || inputsValue.password === ""}
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
