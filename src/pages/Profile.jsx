import { useUser } from "../context/UserContext.jsx";
import { useEffect } from "react";

export function Profile() {
  const { logout, getUser, user } = useUser();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="form-register pt-3 pb-3">
        <h1 className="col-6">Perfil</h1>
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
              disabled
              key={user.id}
              value={user.email}
            />
          </div>
          <div className="col-12">
            <button className="btn btn-primary" onClick={() => logout()}>
              Cerrar sesión
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
