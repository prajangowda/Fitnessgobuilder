import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { WeeklyPlan } from "./components/WeeklyPlan";
import AboutGym from "./components/AboutGym";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

export default function App() {

  // 🛒 Cart state
  const [cart, setCart] = useState([]);

  // 🏋️ Workout programs (SOURCE OF TRUTH)
  const programs = [
    {
      id: 1,
      title: "Strength Builder",
      description:
        "Build lean muscle mass with progressive resistance training",
      duration: "12 weeks",
      difficulty: "Intermediate",
      caloriesBurn: "400-600",
      workouts: 4,
      cost: "0₹",
    },
    {
      id: 2,
      title: "Yoga Flow",
      description:
        "Increase flexibility and joint mobility, develop functional balance",
      duration: "8 weeks",
      difficulty: "Beginner",
      caloriesBurn: "200-300",
      workouts: 5,
      cost: "500₹",
    },
    {
      id: 3,
      title: "Cardio Blast",
      description:
        "High-intensity cardio to boost endurance and burn fat",
      duration: "6 weeks",
      difficulty: "Advanced",
      caloriesBurn: "600-800",
      workouts: 5,
      cost: "800₹",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <Header cartCount={cart.length} />

      <Routes>

        {/* Home → Hero + Workout Programs */}
        <Route
          path="/"
          element={
            <HeroSection
              programs={programs}
              cart={cart}
              setCart={setCart}
            />
          }
        />

        {/* Weekly Plan */}
        <Route path="/WeeklyPlan" element={<WeeklyPlan />} />

        {/* Cart Page */}
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />

        {/* Other pages */}
        <Route path="/about" element={<AboutGym />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}
