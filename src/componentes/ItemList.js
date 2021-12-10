import Item from './Item'

// Voy a mapear cada objeto del array para que me traiga cada producto con su nombre de id y declaro que el valor del prop libros es item, para que en Item.js traiga valor por valor en la etiqueta que yo quiera.

const ItemList = ({items}) =>{
   
    return (
        <>
        {items.map(item =>
            <Item key={item.id} libros={item}/>)}
        </>

    )
}

export default ItemList;