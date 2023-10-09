import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";
import { getCartTotal } from "../../store/features";

const Navbar = () => {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div className='Navbar container mx-auto px-6 font-franklin bg-black text-gray-400 sticky top-0'>
      <div className='Logo'>
        <Link className='link logo-name font-bold' to='/'>
          DigiCafe 3.0
        </Link>
      </div>
      <div className='navbar-menu'>
        <Link to='/' className='link'>
          Home
        </Link>
        <Link to='admin' className='link'>
          Admin
        </Link>
        <Link to='cart' className='link'>
          <ShoppingCartOutlinedIcon />
          <span className='top-0 right-3 bg-gray-400 absolute rounded-full px-1 text-white  '>
            {totalQuantity}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
