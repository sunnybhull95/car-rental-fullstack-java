import { useEffect } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import banner from "../global/imagesandvideo/contactUsBanner.jpg";
import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../../Redux/counter/counterSlice";

const Cart = () => {
  const { cartByModel } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  // Fetch and add car from API if param exists
  useEffect(() => {
    if (!cartByModel) return;

    axios
      .get(`http://localhost:8080/getCarByModel/${cartByModel}`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          dispatch(addToCart(res.data[0]));
        }
      })
      .catch((err) => console.error(err));
  }, [cartByModel, dispatch]);

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + (Number(item.price) || 0) * (item.qty || 0),
    0
  );

  const isCartEmpty = cart.length === 0 || cart.every((item) => item.qty === 0);

  return (
    <div className="bg-white">
      {/* Banner */}
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="bg-fixed flex flex-col justify-end w-full h-screen bg-cover bg-center text-white "
      >
        <div className="text-center w-full px-4 mx-auto">
          <h2 className="font-bold text-3xl lg:text-4xl">Cart</h2>
        </div>
      </div>

      {/* Cart Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-28 py-10">
        {isCartEmpty ? (
          <p className="text-center text-gray-500 text-lg">
            Your cart is currently empty.
          </p>
        ) : (
          <>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border mb-6">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="py-4 px-2"></th>
                    <th className="px-2"></th>
                    <th className="px-2">Product</th>
                    <th className="px-2">Price</th>
                    <th className="px-2">Quantity</th>
                    <th className="px-2">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart
                    .filter((item) => item.qty > 0)
                    .map((item) => (
                      <tr
                        key={item.id}
                        className="text-center border border-black/40 shadow-2xl shadow-black/40"
                      >
                        <td>
                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="text-black/10 text-lg hover:bg-red-500 hover:text-white rounded-full p-1"
                          >
                            <IoClose />
                          </button>
                        </td>
                        <td>
                          <img
                            src={item.imageUrl}
                            alt={item.make}
                            className="h-12 w-12 sm:h-15 sm:w-15 object-cover my-2 sm:my-4"
                          />
                        </td>
                        <td>
                          {item.make} {item.model}
                        </td>
                        <td>${item.price}</td>
                        <td>
                          <div className="flex items-center justify-center space-x-2">
                            <button
                              onClick={() => dispatch(decreaseQty(item.id))}
                              className="px-2 bg-gray-300 rounded"
                            >
                              -
                            </button>
                            <span>{item.qty}</span>
                            <button
                              onClick={() => dispatch(increaseQty(item.id))}
                              className="px-2 bg-gray-300 rounded"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>${(item.price * item.qty).toFixed(2)}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            {/* Cart Totals */}
            <div className="border border-black/20 rounded-sm mt-10 sm:mt-20 p-4 ml-auto bg-grey-50 max-w-full sm:max-w-md">
              <h3 className="text-2xl font-extrabold mb-4">Cart totals</h3>
              <div className="flex justify-between mb-2">
                <span className="font-bold">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-bold">Total</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="w-full flex justify-end">
                <NavLink
                  to="/booking"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Proceed to checkout
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
