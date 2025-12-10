import { useState } from 'react';
import Header  from './components/Header'
import HeroSection  from './components/HeroSection';
import {WorkoutPrograms} from './components/WorkoutPrograms';
import  NutritionGuide  from './components/NutritionGuide';
import { WeeklyPlan } from './components/WeeklyPlan';
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [activeTab, setActiveTab] = useState('programs');
  const [showWeeklyPlan, setShowWeeklyPlan] = useState(false);

  const handleStartStrengthBuilder = () => {
    setShowWeeklyPlan(true);
  };

  const handleBackToPrograms = () => {
    setShowWeeklyPlan(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      
      <HeroSection />
      
       <Routes>
      {/* <Route path="/" element={} /> */}
      <Route path="/WeeklyPlan" element={<WeeklyPlan />} />
    </Routes>
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        {!showWeeklyPlan && (
          <div className="flex gap-2 mb-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('programs')}
              className={`px-6 py-3 rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'programs'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Workout Programs
            </button>
            <button
              onClick={() => setActiveTab('nutrition')}
              className={`px-6 py-3 rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'nutrition'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Nutrition
            </button>
          </div>
        )}

        {/* Content */}
        {showWeeklyPlan ? (
          <WeeklyPlan onBack={handleBackToPrograms} />
        ) : (
          <>
            {activeTab === 'programs' && <WorkoutPrograms onStartStrengthBuilder={handleStartStrengthBuilder} />}
            {activeTab === 'nutrition' && <NutritionGuide />}
          </>
        )}
      </div>
    </div>
  );
}