import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <div className="row m-3 gap-2 section-not-found">
        <Link className="btn btn-danger btn-lg w-25" to="/">
          Volver al Home 🍕
        </Link>
        <img
          src="https://dinahosting.com/blog/upload/2020/07/eror-404.jpg"
          alt="imagen 404 not found"
        />
      </div>
    </>
  );
}
