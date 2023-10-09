import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AdminPage from "./pages/AdminPage/AdminPage";
import CartPage from "./pages/CartPage/CartPage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='App '>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/admin' element={<AdminPage />}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
