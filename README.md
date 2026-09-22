# 🛍️ Variedades - Productos con React y DummyJSON

Componente de React que obtiene y muestra una lista de productos utilizando la API pública de **DummyJSON**.

La aplicación realiza una petición HTTP mediante `fetch`, almacena los productos en el estado del componente y los presenta en una interfaz sencilla con imagen, nombre, descripción y precio.

## 📋 Características

- ⚛️ Componente funcional de React.
- 🔄 Uso de `useEffect` para realizar la petición a la API.
- 📦 Uso de `useState` para administrar los productos y el estado de carga.
- 🌐 Consumo de la API de DummyJSON.
- 🖼️ Visualización de la imagen de cada producto.
- 📝 Muestra nombre y descripción.
- 💰 Muestra el precio en dólares estadounidenses.
- ⏳ Mensaje de carga mientras se obtienen los productos.
- 🎨 Utiliza un archivo CSS externo para los estilos.

## 🚀 Tecnologías utilizadas

- **React**
- **JavaScript**
- **CSS**
- **Fetch API**
- **DummyJSON**

## 📁 Estructura del componente

```text
src/
├── components/
│   ├── Variedades.jsx
│   └── Variedades.css
└── ...
