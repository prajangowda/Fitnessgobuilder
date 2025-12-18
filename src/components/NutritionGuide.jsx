import { Apple, Coffee, Utensils, Moon } from 'lucide-react';

const mealPlan = [
  {
    meal: 'Breakfast',
    icon: Coffee,
    time: '7:00 AM',
    items: [
      { name: 'Oatmeal with berries', calories: 250, protein: 8, carbs: 45, fat: 5 },
      { name: 'Greek yogurt', calories: 150, protein: 15, carbs: 12, fat: 4 },
      { name: 'Banana', calories: 105, protein: 1, carbs: 27, fat: 0 },
    ],
  },
  {
    meal: 'Lunch',
    icon: Utensils,
    time: '12:30 PM',
    items: [
      { name: 'Grilled chicken breast', calories: 280, protein: 53, carbs: 0, fat: 6 },
      { name: 'Quinoa', calories: 220, protein: 8, carbs: 39, fat: 4 },
      { name: 'Mixed vegetables', calories: 80, protein: 3, carbs: 16, fat: 1 },
    ],
  },
  {
    meal: 'Snack',
    icon: Apple,
    time: '3:30 PM',
    items: [
      { name: 'Protein shake', calories: 200, protein: 25, carbs: 15, fat: 3 },
      { name: 'Almonds (1 oz)', calories: 164, protein: 6, carbs: 6, fat: 14 },
    ],
  },
  {
    meal: 'Dinner',
    icon: Moon,
    time: '7:00 PM',
    items: [
      { name: 'Salmon fillet', calories: 280, protein: 39, carbs: 0, fat: 13 },
      { name: 'Sweet potato', calories: 180, protein: 4, carbs: 41, fat: 0 },
      { name: 'Steamed broccoli', calories: 55, protein: 4, carbs: 11, fat: 1 },
    ],
  },
];

const nutritionTips = [
  {
    title: 'Stay Hydrated',
    description: 'Drink at least 8 glasses of water daily to support your metabolism and workout performance.',
  },
  {
    title: 'Protein Timing',
    description: 'Consume protein within 30 minutes after your workout to maximize muscle recovery.',
  },
  {
    title: 'Balanced Macros',
    description: 'Aim for a balanced intake of proteins, carbohydrates, and healthy fats.',
  },
  {
    title: 'Meal Prep',
    description: 'Prepare meals in advance to stay on track with your nutrition goals.',
  },
];

export default function NutritionGuide() {
  const totalCalories = mealPlan.reduce(
    (sum, meal) => sum + meal.items.reduce((mealSum, item) => mealSum + item.calories, 0),
    0
  );
  const totalProtein = mealPlan.reduce(
    (sum, meal) => sum + meal.items.reduce((mealSum, item) => mealSum + item.protein, 0),
    0
  );
  const totalCarbs = mealPlan.reduce(
    (sum, meal) => sum + meal.items.reduce((mealSum, item) => mealSum + item.carbs, 0),
    0
  );
  const totalFat = mealPlan.reduce(
    (sum, meal) => sum + meal.items.reduce((mealSum, item) => mealSum + item.fat, 0),
    0
  );

  return (
    <div className='max-w-5xl mx-auto'>
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Nutrition Guide</h2>
        <p className="text-gray-600">
          Fuel your body with balanced nutrition tailored to your fitness goals
        </p>
      </div>

      {/* Daily Summary */}
      <div className="bg-linear-to-r from-green-500 to-green-600 rounded-lg shadow-md p-6 mb-8  text-white">
        <h3 className="text-white mb-4 ">Daily Nutrition Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-green-100">Total Calories</div>
            <div className="text-white">{totalCalories}</div>
          </div>
          <div>
            <div className="text-green-100">Protein</div>
            <div className="text-white">{totalProtein}g</div>
          </div>
          <div>
            <div className="text-green-100">Carbs</div>
            <div className="text-white">{totalCarbs}g</div>
          </div>
          <div>
            <div className="text-green-100">Fat</div>
            <div className="text-white">{totalFat}g</div>
          </div>
        </div>
      </div>

      {/* Meal Plan */}
      <div className="mb-8 mx-14">
        <h3 className="text-gray-900 mb-4">Today{"'"}s Meal Plan</h3>
        <div className="space-y-6">
          {mealPlan.map((meal, index) => {
            const Icon = meal.icon;
            const mealTotal = meal.items.reduce((sum, item) => sum + item.calories, 0);
            
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900">{meal.meal}</h4>
                    <span className="text-gray-500">{meal.time}</span>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-gray-900">{mealTotal} cal</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {meal.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">{item.name}</span>
                      <div className="flex gap-4 text-gray-600">
                        <span>{item.calories} cal</span>
                        <span>P: {item.protein}g</span>
                        <span>C: {item.carbs}g</span>
                        <span>F: {item.fat}g</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Nutrition Tips */}
      <div>
        <h3 className="text-gray-900 mb-4">Nutrition Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nutritionTips.map((tip, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-gray-900 mb-2">{tip.title}</h4>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
