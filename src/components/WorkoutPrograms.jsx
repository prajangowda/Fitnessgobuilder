import { Clock, Flame, TrendingUp } from 'lucide-react';
// import { useNavigate } from "react-router-dom";



const programs = [
  {
    id: 1,
    title: 'Strength Builder',
    description: 'Build lean muscle mass with progressive resistance training',
    duration: '12 weeks',
    difficulty: 'Intermediate',
    caloriesBurn: '400-600',
    workouts: 4,
    cost:'Free Trail',
  },
  {
    id: 2,
    title: 'Yoga Flow',
    description: 'Increase flexibility and joint mobility, develop functional balance',
    duration: '8 weeks',
    difficulty: 'Beginner',
    caloriesBurn: '200-300',
    workouts: 5,
    cost:'1000₹',
  },
  {
    id: 3,
    title: 'Cardio Blast',
    description: 'High-intensity cardio to boost endurance and burn fat',
    duration: '6 weeks',
    difficulty: 'Advanced',
    caloriesBurn: '600-800',
    workouts: 5,
    cost:'2000₹',
  },
];

export  function WorkoutPrograms({ onStartStrengthBuilder }) {
//   const navigate = useNavigate();
  
//  const onStartStrengthBuilder = () => {
//     navigate("/weeklyplan"); 
//   };
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Workout Programs</h2>
        <p className="text-gray-600">
          Choose a program that matches your fitness goals and experience level
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div key={program.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-900">{program.title}</h3>
                <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full ">
                  {program.difficulty}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                {program.description}
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <TrendingUp className="w-4 h-4" />
                  <span>{program.workouts} workouts/week</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Flame className="w-4 h-4" />
                  <span>{program.caloriesBurn} cal/session</span>
                </div>
              </div>
              
             <button 
                onClick={() => {
                  if (program.id === 1) {
                    onStartStrengthBuilder();
                  }
                }}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {program.cost}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}