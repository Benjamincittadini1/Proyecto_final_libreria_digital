
import { NavLink } from "react-router-dom";

// Hago la grilla que va a mostar la lista de productos con sus respectivas referencias. Uso el valor de prop libros, para poder traer dentro de cada etiqueta el valor que yo quiero.

const Item = ({libros}) => {


    return (
        <>
        <div className="productCatalogItems">
           <header>
               <img src={libros.pictureurl} alt="Portada libro" width="128" height="170"/>
           </header>
           <h3 className="title">{libros.title}</h3>
           <h5 className="price">${libros.price}</h5>
           <NavLink to={`/item/${libros.id}`} className="itemMore">Detalles</NavLink>
        </div>
        </>
    )
    
}

export default Item;