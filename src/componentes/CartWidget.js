import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { storeContext } from "../context/cartContext";


const ShoppingCart = () => {

    const {cartWidgetCount} = useContext(storeContext);
    
    // console.log(cartWidgetCount())

    return(
        <NavLink to={`/cart`}>
            <span className="material-icons">shopping_cart</span>
            {cartWidgetCount() === 0 ? null : <span>{cartWidgetCount()}</span>}
        </NavLink>
    )
}

export default ShoppingCart;