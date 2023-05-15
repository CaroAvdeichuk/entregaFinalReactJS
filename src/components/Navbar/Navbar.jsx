import { Categorias } from "./Categorias/Categorias.jsx";
import { CartWidget } from "../CartWidget/CartWidget.jsx";
import { BotonDarkMode } from "./BotonDarkMode/BotonDarkMode";
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Categorias />
            <CartWidget cantCarrito={0} />
            <BotonDarkMode />
        </nav>
    );
}