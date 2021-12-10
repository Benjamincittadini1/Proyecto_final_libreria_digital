import ItemList from "./ItemList";
// import libros from "./libros.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase/firebase";

// Galería de Libros

const ItemListContainer = ({}) => {
  const [item, setItems] = useState([]);
  // Filtro los productos por categoria
  const { categoryId } = useParams();

  useEffect(() => {
  const dataBase = firestore();
  let libros

  if (categoryId){
      libros = dataBase.collection("libros").where("category", "==", categoryId)
  } else{
      libros = dataBase.collection("libros")
  }

  const librosQuery = libros.get()

  librosQuery.then((queryDataBase) => {
      setItems(queryDataBase.docs.map(doc => ({...doc.data(), id: doc.id})))
  })
  .catch(() => {console.log("No se cargó el catálogo")})
  
},[categoryId])

    return (
      <>
        <div>
          <h2 className="sales">La librería</h2>
          <main className="productCatalog">
            <ItemList items={item} />
          </main>
        </div>

        <h4 className="coderHouse">
        </h4>
      </>
    );
  
};

export default ItemListContainer;
