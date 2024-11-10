import { useState } from "react";

export function Login() {
  const [inputsValue, setInputsValue] = useState({
    email: "",
    password: "",
  });

  const handelInputsValue = (event) =>
    setInputsValue({ ...inputsValue, [event.target.name]: event.target.value });

  const handleFormLogin = () => {
    if (inputsValue.email.length === 0 && inputsValue.password.length === 0) {
      alert("Ingresar correo electrónico y contraseña");
      return;
    }
    if (inputsValue.email.length === 0) {
      alert("Ingresar correo electrónico");
      return;
    }
    if (inputsValue.password.length === 0) {
      alert("Ingresar contraseña");
      return;
    }
    if (inputsValue.password.length < 6) {
      alert("Contraseña debe ser mayor a 6 caracteres");
      return;
    }
    alert("Inició sesión exitosamente");
  };

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
              onClick={handleFormLogin}
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
