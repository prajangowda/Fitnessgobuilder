import { Trophy, Target, Zap } from 'lucide-react';
import { WorkoutPrograms } from './WorkoutPrograms';

export default function HeroSection() {
  return (
    <>
    <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-gray-100 mb-4">Transform Your Body, Transform Your Life</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Expert coaching, personalized workout plans, and nutrition guidance to help you achieve your fitness goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-white mb-2">Goal Setting</h3>
            <p className="text-blue-100">
              Set and track your fitness goals with personalized milestones
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-white mb-2">Custom Workouts</h3>
            <p className="text-blue-100">
              Tailored workout programs designed for your fitness level
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-white mb-2">Track Progress</h3>
            <p className="text-blue-100">
              Monitor your progress with detailed analytics and insights
            </p>
          </div>
        </div>
      </div>
    </div>
    <WorkoutPrograms/>
    </>
  );
}
