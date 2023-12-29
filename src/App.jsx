import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import { CarritoProvider } from './context/CarritoContext';
import Carrito from "./views/Carrito";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pizza/:id" element={<Pizza />} />
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  )
}

export default App
