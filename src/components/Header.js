// import { LOGO_URL } from "../utils/constants";
// import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import LOGO from "../../public/assets/logo.png";

const Header = () => {
  // const [btnNameReact, setBtnNameReact] = useState("Login");

  // const onlineStatus = useOnlineStatus();

  // const {loggedInUser} = useContext(UserContext);

  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between h-24 header shadow-lg bg-yellow-300">
      <div className="logo-container">
        <Link to={"/"}>
          <img src={LOGO} alt="App Logo" className="h-full logo rounded-3xl" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex md:p-4 md:m-4 header-btn">
          {/* <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li> */}
          <li className="md:px-4 px-2 p-2 font-bold hover:bg-yellow-500 rounded-lg">
            {" "}
            <Link to="/">HOME</Link>
          </li>
          <li className="md:px-4 px-2 p-2 font-bold hover:bg-yellow-500 rounded-lg">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="md:px-4 px-2 p-2 font-bold hover:bg-yellow-500 rounded-lg">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="md:px-4 px-2 p-2 hover:bg-yellow-500 rounded-lg font-bold md:text-xl cart-btn">
            <Link to="/cart">CART - {cartItems.length}</Link>
          </li>
          {/* <button 
            onClick={()=>{
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }} 
            className="login">
              {btnNameReact}
            </button> */}
          {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
