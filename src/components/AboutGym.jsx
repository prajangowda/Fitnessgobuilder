import { Dumbbell, Heart, Users, Trophy } from "lucide-react";

export default function AboutGym() {
  return (
    <div className="w-full  overflow-hidden">
      <section className="relative  h-[89.7vh] flex items-center justify-center px-6">

        {/* Background Image */}
        <img
          src="/images/about.png" 
          alt="Gym Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl text-white">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              About Our Gym
            </h1>
            <p className="text-gray-200 text-lg">
              Your journey to strength, health, and confidence starts here.
            </p>
          </div>

          {/* About Section */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-14">

            {/* Text */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Who We Are
              </h2>
              <p className="text-gray-200 mb-4">
                We help individuals achieve their fitness goals through
                structured training, expert guidance, and a supportive
                environment.
              </p>
              <p className="text-gray-200">
                From beginners to advanced athletes, our programs focus on
                strength, fat loss, endurance, and total wellness.
              </p>
            </div>

            {/* Small Stats Cards */}
            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-center">
                <Users className="mx-auto mb-2 text-indigo-400" />
                <h3 className="text-xl font-bold">500+</h3>
                <p className="text-sm text-gray-200">Happy Members</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-center">
                <Dumbbell className="mx-auto mb-2 text-indigo-400" />
                <h3 className="text-xl font-bold">50+</h3>
                <p className="text-sm text-gray-200">Programs</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-center">
                <Trophy className="mx-auto mb-2 text-indigo-400" />
                <h3 className="text-xl font-bold">10+</h3>
                <p className="text-sm text-gray-200">Years Experience</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-center">
                <Heart className="mx-auto mb-2 text-indigo-400" />
                <h3 className="text-xl font-bold">100%</h3>
                <p className="text-sm text-gray-200">Commitment</p>
              </div>

            </div>
          </div>

          {/* Mission */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-200">
              To inspire and empower people to live healthier lives by
              delivering quality coaching, modern equipment, and a motivating
              fitness community.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
