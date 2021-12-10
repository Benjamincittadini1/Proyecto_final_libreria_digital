import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { storeContext } from "../context/cartContext";
import firebase from "firebase/app"
import "firebase/firestore"
import { firestore } from "../firebase/firebase";
import FormBuyer from "../form/FormBuyer";

const Cart = () => {
    const {products, removeItem, totalProductsPrice, clearCart} = useContext(storeContext);
    const [showForm, setShowForm] = useState(false)
    const [orderId, setOrderId] = useState("")
    const [confirmation, setConfirmation] = useState(false)

    const shopFinalize = () =>{
        setShowForm(true)
    }

    const createOrder = (buyer) =>{
        const db = firestore()
        const orders = db.collection("order")

        const newOrder = {
            buyer,
            products,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalProductsPrice()
        }
        
        orders.add(newOrder).then(({id}) => {
                setOrderId(id)
                setConfirmation(true)
                
            }
        ).catch(() => {console.log("No se pudo generar la nueva orden")})     
    }

    if(products.length === 0 && orderId === ""){
        return (
                <div>
                    <h3 className="textCart">No hay productos agregados al Carrito</h3>
                    <NavLink to="/" exact className="keypadCart">
                        <button className="finishShop">Ir al catálogo</button>
                    </NavLink>
                </div>
        )
    } else if(orderId && confirmation){
        return(
            <div className="orderConfirmation">
                <h2 className="textCart">¡Muchas gracias por su compra!</h2>
                <div className="textOrder">
                    <h3>Su Orden N° <span className="orderId">{orderId}</span> ha sido confirmada.</h3>
                    <NavLink to="/" exact>
                        <button className="finishShop" onClick={() => clearCart()}>Realizar otra compra?</button>
                    </NavLink>
                </div>
            </div>
        )
    }

        return (
            <div>
                <h3 className="textCart">Carrito de Compras</h3>
                <div className="containerCart">
                    {products.map(books => (
                        <div key={books.id} className="containerProduct">
                            <img src={books.pictureurl} alt="Foto del producto" width="80"/>
                            <h4>{books.title}</h4>
                            <h4>${books.price}</h4>
                            <h4>Cantidad: {books.dataCounter}</h4>
                            <h4>SubTotal: $ {books.price * books.dataCounter}</h4>
                            <button className="btnRemove" onClick={() => removeItem(books.id)}>X</button>
                        </div>
                    ))}
                </div>
                    <h3 className="textCartFinish">Total de la compra: $ {totalProductsPrice()}</h3>
                <div className="keypadCart">
                <button className="finishShop" onClick={shopFinalize}>Finalizar Compra</button>
                    <NavLink to="/" exact>
                        <button className="buttonCart">Agregar Libros</button>
                    </NavLink>
                    <button className="btnEmpty" onClick={() => clearCart()}>Limpiar Carrito</button>
                </div>
                {showForm ? <FormBuyer createOrder={createOrder}/> : null}
            </div>
        )
    }

export default Cart
