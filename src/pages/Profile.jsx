import { useUser } from "../context/UserContext.jsx";

export function Profile() {
  const { user } = useUser();
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
              placeholder="Ingresar correo electrónico"
              disabled
              key={user.id}
              value={user.email}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Cerrar sesión
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
