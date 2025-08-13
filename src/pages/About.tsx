import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2ecac8]/10 via-white to-[#338886]/5 p-8 flex flex-col justify-center">
      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ecac8] to-[#338886]">Sympto</span>
        </h1>
        <p className="mb-6 text-gray-700 text-lg leading-relaxed">
          Sympto is your personal health tracking tool. Easily log symptoms, track trends, and share reports with your doctor. Built with privacy and ease of use in mind.
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-10 space-y-2 text-lg">
          <li>Track daily symptoms effortlessly</li>
          <li>Generate health insights instantly</li>
          <li>Keep your data safe and secure</li>
        </ul>

        <Link
          to="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-[#2ecac8] to-[#338886] text-white rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
