import { Calendar, CheckCircle, Circle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const weeklyWorkouts = [
  {
    day: 'Monday',
    focus: 'Chest & Triceps',
    exercises: ['Bench Press', 'Incline Dumbbell Press', 'Cable Flyes', 'Tricep Dips', 'Overhead Tricep Extension'],
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1704223523325-f4e3257d6fca?...',
    completed: false,
  },
  {
    day: 'Tuesday',
    focus: 'Back & Biceps',
    exercises: ['Pull-ups', 'Barbell Rows', 'Lat Pulldowns', 'Bicep Curls', 'Hammer Curls'],
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1590626353542-78399a13890f?...',
    completed: false,
  },
  {
    day: 'Wednesday',
    focus: 'Rest & Recovery',
    exercises: ['Light stretching', 'Foam rolling', 'Walking or yoga'],
    duration: '30 min',
    image: 'https://images.unsplash.com/photo-1585681979261-d61f1f68939c?...',
    completed: false,
  },
  {
    day: 'Thursday',
    focus: 'Legs',
    exercises: ['Squats', 'Romanian Deadlifts', 'Leg Press', 'Leg Curls', 'Calf Raises'],
    duration: '70 min',
    image: 'https://images.unsplash.com/photo-1675910518330-1843b4d03de1?...',
    completed: false,
  },
  {
    day: 'Friday',
    focus: 'Shoulders & Abs',
    exercises: ['Military Press', 'Lateral Raises', 'Front Raises', 'Planks', 'Ab Rollouts'],
    duration: '55 min',
    image: 'https://images.unsplash.com/photo-1704223523183-cc0ef35cb671?...',
    completed: false,
  },
  {
    day: 'Saturday',
    focus: 'Full Body Strength',
    exercises: ['Deadlifts', 'Push-ups', 'Pull-ups', 'Squats', 'Core Work'],
    duration: '65 min',
    image: 'https://images.unsplash.com/photo-1585820114364-e6d77b1a3ca4?...',
    completed: false,
  },
  {
    day: 'Sunday',
    focus: 'Rest & Recovery',
    exercises: ['Active recovery', 'Stretching', 'Meditation'],
    duration: '30 min',
    image: 'https://images.unsplash.com/photo-1585681979261-d61f1f68939c?...',
    completed: false,
  },
];

export function WeeklyPlan({ onBack }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mb-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          ← Back to Programs
        </button>

        <div className="flex items-center gap-3 mb-2">
          <Calendar className="w-6 h-6 text-blue-600" />
          <h2 className="text-gray-900">
            Strength Builder - Weekly Training Plan
          </h2>
        </div>

        <p className="text-gray-600">
          Follow this 7-day training split to build lean muscle mass and strength
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {weeklyWorkouts.map((workout, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={workout.image}
                alt={workout.focus}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-gray-900">
                {workout.day}
              </div>

              {workout.completed ? (
                <div className="absolute top-4 right-4 p-2 bg-green-500 rounded-full">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              ) : (
                <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full">
                  <Circle className="w-5 h-5 text-gray-400" />
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-gray-900 mb-2">{workout.focus}</h3>
              <p className="text-gray-600 mb-4">
                Duration: {workout.duration}
              </p>

              <div className="mb-4">
                <p className="text-gray-700 mb-2">Exercises:</p>
                <ul className="space-y-2">
                  {workout.exercises.map((exercise, exerciseIndex) => (
                    <li
                      key={exerciseIndex}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      {exercise}
                    </li>
                  ))}
                </ul>
              </div>

             <button className="mt-auto w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">

                {workout.completed ? 'View Workout' : 'Start Workout'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
