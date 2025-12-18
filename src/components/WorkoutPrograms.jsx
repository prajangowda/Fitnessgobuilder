import { useState } from "react";
import { Apple, Coffee, Utensils, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NutritionGuide from "./NutritionGuide";

const programs = [{ id: 1, title: "Strength Builder", description: "Build lean muscle mass with progressive resistance training", duration: "12 weeks", difficulty: "Intermediate", caloriesBurn: "400-600", workouts: 4, cost: "Free Trial" },
{ id: 2, title: "Yoga Flow", description: "Increase flexibility and joint mobility, develop functional balance", duration: "8 weeks", difficulty: "Beginner", caloriesBurn: "200-300", workouts: 5, cost: "1000₹" },
{ id: 3, title: "Cardio Blast", description: "High-intensity cardio to boost endurance and burn fat", duration: "6 weeks", difficulty: "Advanced", caloriesBurn: "600-800", workouts: 5, cost: "2000₹" }];




export function WorkoutPrograms() {
  const [activeTab, setActiveTab] = useState("programs");
const navigate = useNavigate();

  return (
    <>
      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto ml-3.5 mt-3.5">
        <button onClick={() => setActiveTab("programs")}
          className={`px-6 py-3 rounded-lg transition ${activeTab === "programs" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}>
          Workout Programs
        </button>
        <button onClick={() => setActiveTab("nutrition")}
          className={`px-6 py-3 rounded-lg transition ${activeTab === "nutrition" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}>
          Nutrition
        </button>
      </div>

      {/* PROGRAMS TAB */}
      {activeTab === "programs" ? (
        <div>
          <div className="mb-8 ml-3.5">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Workout Programs</h2>
            <p className="text-gray-600">Choose a program that matches your goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-3.5 mb-3.5">
            {programs.map(program => (
              <div key={program.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                <span className="inline-block mb-4 px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                  {program.difficulty}
                </span>
                <p className="text-gray-600 text-sm mb-6">{program.description}</p>

                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between"><span>Duration</span><span>{program.duration}</span></div>
                  <div className="flex justify-between"><span>Workouts / Week</span><span>{program.workouts}</span></div>
                  <div className="flex justify-between"><span>Calories Burn</span><span>{program.caloriesBurn} kcal</span></div>
                </div>

                <button
                  onClick={() => {
                    if (program.id === 1) {
                      navigate("/WeeklyPlan");
                    }
                  }}
                  className="mt-auto w-full py-3 rounded-xl font-semibold text-white bg-linear-to-r from-blue-600 to-indigo-600 hover:opacity-90">
                  {program.cost}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
             <NutritionGuide />
            )}
     </>
  );
}
