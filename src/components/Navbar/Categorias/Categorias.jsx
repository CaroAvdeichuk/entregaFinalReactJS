import { Link } from "react-router-dom";
import { memo } from "react";

export const Categorias = memo(() => {
    return (

        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">   
                        <Link className="nav-link active" to={"/"}>Home
                            <span className="visually-hidden">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/category/1"}>Jeans</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/category/2"}>Sweaters</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/category/3"}>Remeras</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" to={"category/4"}>Accesorios</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
})