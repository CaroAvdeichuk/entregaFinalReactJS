
import { Link } from 'react-router-dom'

export const Item = ({ item }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={item.img} className="card-img-top" alt={`Imagen de ${item.name}`} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Color: {item.colour}</p>
                <p className="card-text">Precio: ${item.price}</p>
                <p className="card-text">Stock: {item.stock}</p>
                <Link className='nav-link' to={`/product/${item.id}`}><button className="btn btn-dark">Ver Producto</button></Link>
            </div>
        </div>

    )
}

