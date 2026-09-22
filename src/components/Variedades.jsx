import React, { useEffect, useState } from 'react';
import './Variedades.css';

export const Variedades = () => {
    // Variable de estado o hook para guardar los productos
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    // Conectamos la API con useEffect usando la documentación oficial de DummyJSON
    useEffect(() => {
        async function obtenerProductos() {
            try {
                // Usamos el endpoint correcto con límite de 10 productos
                const response = await fetch('https://dummyjson.com/products?limit=10');
                const data = await response.json();
                
                // DummyJSON devuelve un objeto y la lista de productos está en data.products
                setProductos(data.products);
                setCargando(false);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
                setCargando(false);
            }
        }
        obtenerProductos();
    }, []);

    if (cargando) {
        return <div className="loading">Cargando productos de la tienda...</div>;
    }

    return (
        <div className="tienda-container">
            <h1>Productos de la tienda (DummyJSON)</h1>
            <ul className="product-list">
                {productos.map((producto) => {
                    return (
                        <li key={producto.id} className="product-item">
                            <div className="image-container">
                                {/* La imagen se extrae del array images que provee DummyJSON */}
                                <img src={producto.images[0]} alt={producto.title} width="150" height="150" />
                            </div>
                            <div className="product-details">
                                <strong>Nombre: </strong>
                                <span className="product-title">{producto.title}</span>
                                <br />
                                <strong>Descripción: </strong>
                                <p className="product-desc">{producto.description}</p>
                                <strong>Precio: </strong>
                                <span className="product-price">${producto.price} USD</span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Variedades;