import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BillingDetails = () => {
  const cartItems = useSelector((state) => state.cart.items) || [];
  const totalAmount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cartItems]
  );

  // Generate random order number and current date
  const orderNumber = useMemo(() => Math.floor(Math.random() * 1000000), []);
  const orderDate = useMemo(() => new Date().toLocaleDateString(), []);
  const paymentMethod = "Paid";

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Banner */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="mx-auto h-12 w-12 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl mb-3">
          ✓
        </div>
        <h2 className="text-2xl font-semibold">
          Thank you. Your order has been received.
        </h2>
      </div>

      {/* Order Summary */}
      <div className="flex justify-evenly gap-5 mt-5">
        {[
          { label: "Order Number", value: orderNumber },
          { label: "Date", value: orderDate },
          { label: "Total", value: `$${totalAmount.toFixed(2)}` },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 w-full rounded-lg p-4 text-center"
          >
            <h4 className="text-sm font-medium text-gray-500">{item.label}</h4>
            <p className="text-lg font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Order Details */}
      <div className="bg-white border rounded-xl shadow p-6 mt-6">
        <h3 className="text-xl font-semibold mb-4">Order Details</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b ">
              <th className="py-2">Product</th>
              <th className="py-2">Quantity</th>
              <th className="py-2 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <tr key={index} className="border-b last:border-none">
                  <td className="py-2">
                    {item.make} {item.model}
                  </td>
                  <td className="py-2">{item.qty}</td>
                  <td className="py-2 text-right">
                    ${(item.price * item.qty).toFixed(2)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-4 text-center text-gray-500">
                  No items in your order.
                </td>
              </tr>
            )}

            <tr className="font-semibold">
              <td className="py-2">Total</td>
              <td colSpan="2" className="py-2 text-right">
                ${totalAmount.toFixed(2)}
              </td>
            </tr>
            <tr className="font-semibold">
              <td className="py-2">Payment </td>
              <td colSpan="2" className="py-2 text-right">
                {paymentMethod}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end mt-6">
        <Link
          to="/"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BillingDetails;
