import { useState } from 'react';
import Header  from './components/Header'
import HeroSection  from './components/HeroSection';
import {WorkoutPrograms} from './components/WorkoutPrograms';
import  NutritionGuide  from './components/NutritionGuide';
import { WeeklyPlan } from './components/WeeklyPlan';
import { Routes, Route } from "react-router-dom";
import AboutGym from './components/AboutGym';
import Contact from './components/Contact';

export default function App() {
  

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      
      
      
       
       <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path="/WeeklyPlan" element={<WeeklyPlan />} />
        <Route path="/about" element={<AboutGym />} />
         <Route path="/contact" element={<Contact />} />
       </Routes>
    
      
    </div>
  );
}