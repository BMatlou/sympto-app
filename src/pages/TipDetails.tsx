import React from "react";
import { useParams, Link } from "react-router-dom";
import { tips } from "../data/healthTipsData"; // <-- updated import path

export default function TipDetails() {
  const { slug } = useParams<{ slug: string }>();
  const tip = tips.find((t) => t.slug === slug);

  if (!tip) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#2ecac8]/10 via-white to-[#338886]/5 p-8 flex flex-col justify-center">
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-10 text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-6">Tip not found</h1>
          <Link
            to="/health-tips"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#2ecac8] to-[#338886] text-white rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            Back to Health Tips
          </Link>
        </div>
      </div>
    );
  }

  const Icon = tip.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2ecac8]/10 via-white to-[#338886]/5 p-8 flex flex-col justify-center">
      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-10">
        <Link
          to="/health-tips"
          className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-[#2ecac8] to-[#338886] text-white rounded-full shadow hover:shadow-lg transition-transform transform hover:scale-105"
        >
          ← Back to Health Tips
        </Link>

        <div className="flex items-center space-x-4 mb-8">
          <div className="text-[#2ecac8] text-6xl">
            <Icon />
          </div>
          <h1 className="text-5xl font-bold text-gray-900">{tip.title}</h1>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{tip.details}</p>
      </div>
    </div>
  );
}
