import { useDispatch, useSelector } from "react-redux";
import ItemList from './ItemList';
import { clearCart } from "../utils/cartSlice";
import { Link } from 'react-router-dom'
import cartImg from '../../public/assets/empty-cart.webp'

const Cart = () => {

    const cartItems = useSelector((store)=> store.cart.items);
    const totalPrice = cartItems.reduce((total, item) => total + (item?.card?.info?.price / 100), 0);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return (
    <div className="text-center p-4 w-[763px] m-auto">
      
        <h1 className="font-bold text-2xl">Cart</h1>
        {/* <div className="w-6/12 m-auto"> */}
            {cartItems.length === 0 ? 
            <div className='mx-auto pt-5 mb-10 w-72'>
            <div className='flex items-center justify-center flex-col mt-20'>
              <img src={cartImg} alt="empty-cart" className='w-72 h-56' />
              <h2 className='mt-2 text-xl text-gray-600 font-bold'>Your cart is empty</h2>
              <p className='mt-1 text-gray-500 text-sm'>You can go to home page to view more restaurants</p>
              <Link to="/" className=' text-black font-bold p-2 mt-4 rounded-md bg-yellow-500'>SEE RESTAURANTS NEAR YOU</Link>
            </div>
          </div>
            :
            <div className="w-full"><ItemList items={cartItems} />
            <div className="flex justify-between mt-2 p-4 font-bold text-white text-xl bg-[#60B246]"> <span>Total Price:</span>
            <span className="">₹ {totalPrice}</span> </div><br />
            <button className="px-10 py-3 bg-[#60B246] mx-2 font-bold text-white">Place Order</button>
            <button className="px-10 py-3 bg-[#EF4444] font-bold text-white"
            onClick={handleClearCart}>Clear All</button>
            </div>}
        {/* </div> */}
    </div>)
}

export default Cart;