import React, { createContext, useState } from "react";

export const CartContext = createContext({
    carrito: []
});

export const Proveedor = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const obtenerTotal = () => {
        let total = 0;
        carrito.forEach((e) => (total += e.cantidad * e.precio));
        return total;
    };

    const agregarProducto = (prod, cantidad) => {
        if (!productoAgregado(prod.id)) {
            setCarrito((prev) => [...prev, { ...prod, cantidad }]);
            setCantidadTotal((prevCantidad) => prevCantidad + cantidad);
            setTotal((prevTotal) => prevTotal + prod.precio * cantidad);
        } else {
            console.error("El producto ya fue agregado");
        }
    };

    const eliminarProducto = (prodId) => {
        const productoEliminado = carrito.find((prod) => prod.id === prodId);
        if (productoEliminado) {
            const cantidadEliminada = productoEliminado.cantidad;
            setCarrito((prev) => prev.filter((prod) => prod.id !== prodId));
        }
    };

    const limpiar = () => {
        setCarrito([]);
    };

    const enElCarrito = (prodId) => {
        return carrito.some((prod) => prod.id === prodId);
    };

    const productoAgregado = (id) => {
        return carrito.some((el) => el.id === id);
    };

    return (
        <CartContext.Provider
            value={{
                carrito,
                agregarProducto,
                eliminarProducto,
                limpiar,
                enElCarrito,
                productoAgregado,
                obtenerTotal
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

