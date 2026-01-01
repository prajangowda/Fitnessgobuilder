import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart = [], setCart }) => {
  const navigate = useNavigate();

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // 🔹 Convert cost to number safely
  const getCostValue = (cost) => {
    if (cost === "Free Trial") return 0;
    return Number(cost.replace("₹", ""));
  };

  // 🔹 Total cost
  const totalCost = cart.reduce(
    (sum, item) => sum + getCostValue(item.cost),
    0
  );

  // 🔹 Buy handler (POST request)
  const handleBuy = async () => {
    try {
      const payload = {
        programs: cart.map(item => ({
          id: item.id,
          title: item.title,
          cost: getCostValue(item.cost) // 👈 always number
        })),
        totalCost: totalCost
      };

      const response = await fetch("http://localhost:8080/userbuy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Purchase failed");
      }

      await response.json();
      alert("Purchase successful! 🎉");
      setCart([]);

    } catch (error) {
      console.error("ERROR 👉", error);
      alert("Error while purchasing. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">
          Your cart is empty
        </p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-4 mb-8">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex justify-between items-center
                           bg-white p-5 rounded-xl shadow"
              >
                <div>
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Duration: {item.duration}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                 
                  <span className="font-bold text-gray-900">
                    ₹{getCostValue(item.cost)}
                  </span>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total & Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Total: ₹{totalCost}
            </h3>

            <div className="flex gap-4">
              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 rounded-lg font-semibold
                           text-white bg-linear-to-r
                           from-blue-600 to-indigo-600
                           hover:opacity-90"
              >
                Back to Programs
              </button>

              <button
                onClick={handleBuy}
                className="px-6 py-3 rounded-lg font-semibold
                           text-white bg-linear-to-r
                           from-green-600 to-emerald-600
                           hover:opacity-90"
              >
                Buy Now
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
