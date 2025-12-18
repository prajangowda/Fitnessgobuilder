import { Dumbbell, Heart, Users, Trophy } from "lucide-react";

export default function AboutGym() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About Our Gym
        </h1>
        <p className="text-gray-600 text-lg">
          Your journey to strength, health, and confidence starts here.
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4">
            Our gym is dedicated to helping individuals achieve their fitness
            goals through structured training, expert guidance, and a
            supportive environment. Whether you are a beginner or an advanced
            athlete, we have programs designed just for you.
          </p>

          <p className="text-gray-600">
            We focus on strength training, fat loss, endurance, and overall
            wellness using safe and proven methods.
          </p>
        </div>

        {/* Stats / Highlights */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <Users className="mx-auto mb-2 text-indigo-600" />
            <h3 className="text-xl font-bold">500+</h3>
            <p className="text-gray-500">Happy Members</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <Dumbbell className="mx-auto mb-2 text-indigo-600" />
            <h3 className="text-xl font-bold">50+</h3>
            <p className="text-gray-500">Workout Programs</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <Trophy className="mx-auto mb-2 text-indigo-600" />
            <h3 className="text-xl font-bold">10+</h3>
            <p className="text-gray-500">Years Experience</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <Heart className="mx-auto mb-2 text-indigo-600" />
            <h3 className="text-xl font-bold">100%</h3>
            <p className="text-gray-500">Commitment</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto mt-16 bg-white p-10 rounded-3xl shadow">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
          Our Mission
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          Our mission is to inspire and empower people to live healthier lives
          by providing quality fitness coaching, modern equipment, and a
          motivating community.
        </p>
      </div>
    </div>
  );
}
