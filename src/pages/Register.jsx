import { useState } from "react";

export function Register() {
  const [inputsValue, setInputsValue] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handelInputsValue = (event) =>
    setInputsValue({ ...inputsValue, [event.target.name]: event.target.value });

  const handleFormRegister = () => {
    if (
      inputsValue.email.length === 0 &&
      inputsValue.password.length === 0 &&
      inputsValue.passwordConfirm.length === 0
    ) {
      alert(
        "Ingresar correo electrónico, contraseña y confirmación de contraseña",
      );
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
    if (inputsValue.passwordConfirm.length === 0) {
      alert("Ingresar confirmación de contraseña");
      return;
    }
    if (inputsValue.passwordConfirm.length < 6) {
      alert("Confirmación de contraseña debe ser mayor a 6 caracteres");
      return;
    }
    if (inputsValue.password !== inputsValue.passwordConfirm) {
      alert("Contraseña y confirmación no coinciden");
      return;
    }
    alert("Registrado exitosamente");
  };

  return (
    <>
      <div className="form-register pt-3 pb-3">
        <h1 className="col-6">Registro</h1>
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
          <div className="col-6">
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
          <div className="col-6">
            <label htmlFor="inputPasswordConfirm" className="form-label">
              Confirmar contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPasswordConfirm"
              name="passwordConfirm"
              placeholder="Ingresar confirmación de contraseña"
              onChange={handelInputsValue}
            />
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleFormRegister}
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
