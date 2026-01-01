import React from "react";
import { useNavigate } from "react-router-dom";

const WorkoutPrograms = ({ programs = [], cart = [], setCart }) => {
  const navigate = useNavigate();

  const addToCart = (program) => {
    const exists = cart.find(item => item.id === program.id);
    if (!exists) {
      setCart([...cart, program]);
    }
  };

  return (
    <div className="p-8 bg-gray-50">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Workout Programs
        </h2>

        <button
          onClick={() => navigate("/cart")}
          className="px-5 py-2 rounded-lg font-semibold text-white
                     bg-linear-to-r from-blue-600 to-indigo-600
                     hover:opacity-90 transition"
        >
          Cart ({cart.length})
        </button>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map(program => (
          <div
            key={program.id}
            className="bg-white rounded-2xl shadow-lg p-6
                       hover:shadow-xl transition flex flex-col"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {program.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">
              {program.description}
            </p>

            {/* Difficulty Badge */}
            <span className="inline-block w-fit mb-4 px-3 py-1 text-sm
                             rounded-full bg-blue-100 text-blue-700">
              {program.difficulty}
            </span>

            {/* Program Details */}
            <div className="space-y-2 text-sm text-gray-700 mb-6">
              <div className="flex justify-between">
                <span>Duration</span>
                <span>{program.duration}</span>
              </div>

              <div className="flex justify-between">
                <span>Workouts / Week</span>
                <span>{program.workouts}</span>
              </div>

              <div className="flex justify-between">
                <span>Calories Burn</span>
                <span>{program.caloriesBurn}</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-4 text-lg font-bold text-gray-900">
              {program.cost}
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(program)}
              className="mt-auto w-full py-3 rounded-xl font-semibold text-white
                         bg-linear-to-r from-blue-600 to-indigo-600
                         hover:opacity-90 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPrograms;
