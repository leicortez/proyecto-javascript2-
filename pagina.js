

const lenceria = [
    { id: 1, nombre: 'Conjunto de Encaje', precio: 5000, categoria: 'Conjuntos', talla: 'M' },
    { id: 2, nombre: 'Bata de Seda', precio: 7000, categoria: 'Batas', talla: 'L' },
    { id: 3, nombre: 'Body de Encaje', precio: 4500, categoria: 'Bodies', talla: 'S' },
    { id: 4, nombre: 'Bralette', precio: 3000, categoria: 'Bras', talla: 'M' },
    { id: 5, nombre: 'Conjunto Deportivo', precio: 4000, categoria: 'Deportivo', talla: 'M' }
  ];
  

  const filtrarPorCategoria = (categoria) => {
    return lenceria.filter(producto => producto.categoria === categoria);
  };
  
  
  const calcularPrecioTotal = (categoria) => {
    const productosFiltrados = filtrarPorCategoria(categoria);
    return productosFiltrados.reduce((total, producto) => total + producto.precio, 0);
  };
  
  
  const obtenerNombresDeProductos = (categoria) => {
    const productosFiltrados = filtrarPorCategoria(categoria);
    return productosFiltrados.map(producto => producto.nombre);
  };
  
 
  const mostrarTodosLosProductos = () => {
    lenceria.forEach(producto => {
      console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}, Categoría: ${producto.categoria}, Talla: ${producto.talla}`);
    });
  };
  

  const categoria = 'Conjuntos';
  const productosEnCategoria = filtrarPorCategoria(categoria);
  const precioTotalEnCategoria = calcularPrecioTotal(categoria);
  const nombresDeProductosEnCategoria = obtenerNombresDeProductos(categoria);
  
 
  console.log(`Productos en la categoría "${categoria}":`, productosEnCategoria);
  console.log(`Precio total en la categoría "${categoria}": $${precioTotalEnCategoria}`);
  console.log(`Nombres de productos en la categoría "${categoria}":`, nombresDeProductosEnCategoria);
  

  mostrarTodosLosProductos();
  