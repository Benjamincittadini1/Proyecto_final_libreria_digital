
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { storeContext } from "../context/cartContext";
import { NavLink } from "react-router-dom";

const ItemDetail = ({books}) => {

  const {addItem} = useContext(storeContext);
  const [show, setShow] = useState(false);

  const getDataCounter = (dataCounter) => {
      addItem(books, dataCounter);
      setShow(!show);
  }

    return (
        <div className="productCatalogItems">
          <section className="asaid"> 
            <img src={books.pictureurl} alt="Portada" width="180"/>
            <h3>{books.title}</h3>
            <h4>{books.author}</h4>
            <h5>${books.price}</h5>
            <p>{books.description}</p>
            <ItemCount stock={books.stock} initial={0} onAdd={getDataCounter}/>
            <NavLink to={`/Cart`}>
                {show ? <button className="finishShop">Iniciar compra</button> : null}
            </NavLink>
          </section>
        </div>
    )
}

export default ItemDetail;
