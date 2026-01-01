import { useLocation } from "react-router-dom";
import { useState } from "react";

function BuyPage() {
    const { state: program } = useLocation();

    const [user, setUser] = useState({
        name: "",
        phone: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit =  async(e) => {
        e.preventDefault();

        const purchaseDetails = {
            name: user.name,
            phone: user.phone,
            programTitle: program.title,
            duration: program.duration,
            cost: program.cost,
        };


        try {
            const response = await fetch("http://localhost:8080/userbuy", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(purchaseDetails),
            });

            if (!response.ok) {
                throw new Error("Failed to submit data");
            }

            const result = await response.json();
            

            alert("Purchase submitted successfully ");
        } catch (error) {
            console.error("ERROR 👉", error);
            alert("Error submitting purchase ");
        }
    };

    return (
        <div className="w-full overflow-hidden">

            {/* HERO SECTION */}
            <section className="relative w-full h-[89.7vh] overflow-y-hidden">

                {/* Background Image */}
                <img
                    src="/images/buylayout.png"
                    alt="Gym workout"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* BUY BOX */}
                <div className="relative z-10 flex items-center justify-center h-full px-4">
                    <div className="w-full max-w-md bg-slate-50 rounded-2xl shadow-2xl p-6">

                        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                            Buy Program
                        </h2>

                        {/* Program Details */}
                        <div className="mb-6 bg-slate-100 border border-slate-200 p-4 rounded-xl">
                            <p>
                                <span className="font-semibold text-slate-800">Program:</span>{" "}
                                {program.title}
                            </p>
                            <p>
                                <span className="font-semibold text-slate-800">Duration:</span>{" "}
                                {program.duration}
                            </p>
                            <p>
                                <span className="font-semibold text-slate-800">Cost:</span>{" "}
                                {program.cost}
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={user.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-slate-300 px-4 py-2 rounded-lg 
                                           focus:ring-2 focus:ring-indigo-500 outline-none"
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={user.phone}
                                onChange={handleChange}
                                required
                                className="w-full border border-slate-300 px-4 py-2 rounded-lg 
                                           focus:ring-2 focus:ring-indigo-500 outline-none"
                            />

                            <button
                                type="submit"
                                className="w-full py-3 rounded-xl font-semibold text-white 
                                           bg-linear-to-r from-indigo-700 to-slate-700 hover:opacity-90"
                            >
                                Confirm Purchase
                            </button>
                        </form>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default BuyPage;
