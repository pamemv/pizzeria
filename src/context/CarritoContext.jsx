import React, { createContext, useState, useContext } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carritoPizzas, setCarritoPizzas] = useState([]);
  const [total, setTotal] = useState(0);

  const agregarAlCarrito = (pizza) => {
    const existente = carritoPizzas.find(p => p.id === pizza.id);

    if (existente) {
      setCarritoPizzas(
        carritoPizzas.map(p =>
          p.id === pizza.id ? { ...existente, cantidad: existente.cantidad + 1 } : p
        )
      );
    } else {
      setCarritoPizzas([...carritoPizzas, { ...pizza, cantidad: 1 }]);
    }

    setTotal(total + pizza.price);
  };

  const eliminarDelCarrito = (id, precio) => {
    const carritoActualizado = carritoPizzas.filter(pizza => pizza.id !== id);
    setCarritoPizzas(carritoActualizado);
    setTotal(total - precio);
  };

  const aumentarCantidad = (id) => {
    const pizzaAumentar = carritoPizzas.find(pizza => pizza.id === id);
    setCarritoPizzas(
      carritoPizzas.map(pizza =>
        pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
      )
    );
    setTotal(total + pizzaAumentar.price);
  };

  const disminuirCantidad = (id) => {
    const pizzaDisminuir = carritoPizzas.find(pizza => pizza.id === id);

    if (pizzaDisminuir.cantidad > 1) {
      setCarritoPizzas(
        carritoPizzas.map(pizza =>
          pizza.id === id ? { ...pizza, cantidad: pizza.cantidad - 1 } : pizza
        )
      );
      setTotal(total - pizzaDisminuir.price);
    }
  };

  return (
    <CarritoContext.Provider
      value={{
        carritoPizzas,
        total,
        agregarAlCarrito,
        eliminarDelCarrito,
        disminuirCantidad,
        aumentarCantidad
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarritoContext = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCart debe ser utilizado dentro de un CartProvider');
  }
  return context;
};
