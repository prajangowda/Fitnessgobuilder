import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("Invalid phone number. It must be exactly 10 digits.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Invalid email address.");
      return;
    }

    // ✅ Submit only if valid
    try {
      const response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        alert("Submission failed. Please try again.");
        return;
      }

      alert("Thank you! I’ll contact you soon.");

      // reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        gender: "",
        note: "",
      });

    } catch (error) {
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <section className="relative w-full h-[89.7vh]">

        {/* Background */}
        <img
          src="/images/contact.png"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="w-full max-w-sm bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-5">

            <h2 className="text-xl font-bold text-slate-800 mb-4 text-center">
              Contact Me
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 px-3 py-2 rounded-md
                           focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 px-3 py-2 rounded-md
                           focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 px-3 py-2 rounded-md
                           focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 px-3 py-2 rounded-md
                           focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <textarea
                name="note"
                placeholder="Your fitness goal / message"
                value={formData.note}
                onChange={handleChange}
                rows="3"
                className="w-full border border-slate-300 px-3 py-2 rounded-md
                           focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
              />

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg font-semibold text-white text-sm
                           bg-linear-to-r from-indigo-700 to-slate-700 hover:opacity-90"
              >
                Submit
              </button>

            </form>

          </div>
        </div>
      </section>
    </div>
  );
}
