import './App.css';
import NavBar from './components/containers/NavBar/NavBar';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/containers/Cart/Cart';
import { Proveedor } from './components/context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './components/containers/Checkout/Checkout';

function App() {
  return (
    <>

      <BrowserRouter>
        <Proveedor>

          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<Cart/>}></Route>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<h2>404 NOT FOUND</h2>} />
          </Routes>

        </Proveedor>
      </BrowserRouter>

    </>
  );
}

export default App;