
function agregarAlCarrito(productId) {
    // Aquí puedes implementar la lógica para agregar productos al carrito
    // Por ejemplo, puedes utilizar Local Storage para almacenar los productos seleccionados
    alert("Producto agregado al carrito. ¡Disfruta de tu helado!");
}

let carrito = []; // Array para almacenar los productos en el carrito

function agregarAlCarrito(productoIndex, precio) {
    carrito.push({ index: productoIndex, price: precio });
    mostrarCarrito();
}

function mostrarCarrito() {
    // Lógica para mostrar los productos en el carrito

    // Calcula el costo total
    const costoTotal = calcularCostoTotal();

    // Muestra el costo total en el HTML
    const totalPrecioElement = document.getElementById('total-precio');
    totalPrecioElement.textContent = `El costo total es de: $${costoTotal.toFixed(2)}`;
}

function calcularCostoTotal() {
    let total = 0;
    for (const item of carrito) {
        total += item.price;
    }
    return total;
}

// Función para agregar un producto al carrito al hacer clic en el botón "Agregar al Carrito"
function agregarAlCarritoDesdeBoton(productoIndex, precio) {
    agregarAlCarrito(productoIndex, precio);
    alert(`¡Producto agregado al carrito!\nCosto total actual: $${calcularCostoTotal().toFixed(2)}`);
}

// Ejemplos de uso:

// Puedes llamar a la función agregarAlCarritoDesdeBoton() desde el evento onclick de tus botones "Agregar al Carrito"

// Ejemplo para el helado de vainilla
// <button onclick="agregarAlCarritoDesdeBoton(1, 3.50)">Agregar al Carrito</button>

// Ejemplo para el helado de chocolate
// <button onclick="agregarAlCarritoDesdeBoton(2, 4.00)">Agregar al Carrito</button>

// Puedes agregar eventos similares para los otros productos.

