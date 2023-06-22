import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, collection, documentId, query, writeBatch, addDoc, getDocs, where } from "firebase/firestore";
import { db } from "../../../main";
import CheckoutForm from "../CheckoutForm/CheckoutForm";


const Checkout = () => {

    const [ordenId, setOrdenId] = useState('')

    const { carrito, total, limpiar } = useContext(CartContext);

    const generarOrden = async ({ nombre, celular, email }) => {

        try {
            const orden = {

                comprador: {
                    nombre, celular, email
                },
                item: carrito,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const sinStock = []

            const ids = carrito.map(prod => prod.id)

            const productsRef = collection(db, 'items')

            const productosFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productosFirestore

            docs.forEach(doc => {

                const dataDoc = doc.data()

                const stockDb = dataDoc.stock

                const productosAgregados = carrito.find(prod => prod.id === doc.id)

                const prodCantidad = productosAgregados?.cantidad

                if (stockDb >= prodCantidad) {
                    batch.update(doc.ref, { stock: stockDb - prodCantidad })
                } else {
                    sinStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (sinStock === 0) {
                await batch.commit()

                const ordenRef = collection(db, 'orders')

                const ordenAgregada = await addDoc(ordenRef, objOrder)

                setOrdenId(ordenAgregada.id)
                limpiar()
            } else {
                console.error("sin stock")
            }
        } catch (error) {
            console.log(error)
        }
    }
    if (ordenId) {
        return <h1>El id de tu compra es: {ordenId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={generarOrden} />
        </div>
    )
};

export default Checkout;