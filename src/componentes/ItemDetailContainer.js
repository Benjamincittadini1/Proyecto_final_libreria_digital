import ItemDetail from "./ItemDetail";
// import libros from "./libros.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase/firebase";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [saga, setSaga] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    const dataBase = firestore();
    const getItem = dataBase.collection("libros").doc(productId);

    getItem.get()
      .then((queryDataBase) => {
        setSaga({ id: queryDataBase.id, ...queryDataBase.data() });
        setLoading(false);})
      .catch(() => {
        console.log("No se cargó correctamente");});
  }, [productId]);

  return (
    <section className="asaid">
        <h2>Libro</h2>
        <div className="productCatalog">
            {loading ? "Cargando catálogo..." : <ItemDetail key={saga.id} books={saga}/>}
        </div>
    </section>
  );
};

export default ItemDetailContainer;
