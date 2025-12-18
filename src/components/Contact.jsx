import { Mail, Dumbbell, User, ClipboardList } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen-[90vh] mt-10 bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8">

                {/* Header */}
                <div className="text-center mb-6">
                    <Mail className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
                    <h1 className="text-2xl font-bold text-gray-900">
                        Contact Me
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Reach out for personal training, custom plans, or gym membership
                    </p>
                </div>

                {/* Services */}
                <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-gray-700">
                        <User className="text-indigo-600" />
                        <span>One-on-One Personal Training</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <ClipboardList className="text-indigo-600" />
                        <span>Customized Workout & Diet Plans</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <Dumbbell className="text-indigo-600" />
                        <span>Gym Membership & Coaching</span>
                    </div>
                </div>

                {/* Email */}
                <div className="bg-gray-100 rounded-xl p-4 text-center mb-6">
                    <p className="text-gray-700 mb-1">Email me directly at</p>
                    <p className="text-lg font-semibold text-indigo-600">
                        prajangowdap@gmail.com
                    </p>
                </div>

                {/* Mail Button */}
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=prajangowdap@gmail.com&su=Fitness%20Training%20Enquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                >
                    Send Email
                </a>

                {/* Footer Note */}
                <p className="text-xs text-gray-500 text-center mt-4">
                    Please mention your fitness goal, age, and training preference
                    (online/offline).
                </p>
            </div>
        </div>
    );
}
