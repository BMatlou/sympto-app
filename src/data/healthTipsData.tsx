import React from "react";
import { Link } from "react-router-dom";
import { FiActivity, FiSun, FiCoffee, FiMoon, FiHeart } from "react-icons/fi";

type Tip = {
  slug: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  details: string;
};

export const tips: Tip[] = [
  {
    slug: "stay-active",
    icon: FiActivity,
    title: "Stay Active",
    description:
      "Engage in at least 30 minutes of moderate exercise daily to improve cardiovascular health and boost your mood.",
    details: `Engaging in regular physical activity helps maintain a healthy weight, 
reduces the risk of chronic disease, and improves mood. You can try activities 
like walking, jogging, cycling, or even dancing — whatever you enjoy! Aim for at least 
30 minutes a day, most days of the week.`,
  },
  {
    slug: "get-sunlight",
    icon: FiSun,
    title: "Get Sunlight",
    description:
      "Spend time outdoors for natural vitamin D production, which supports bone health and immune function.",
    details: `Sunlight exposure helps your body produce vitamin D, which is essential 
for strong bones and a healthy immune system. Just 10-20 minutes a day can make 
a difference — but remember to use sunscreen if staying out longer!`,
  },
  {
    slug: "moderate-caffeine",
    icon: FiCoffee,
    title: "Moderate Caffeine",
    description:
      "Limit caffeine intake to avoid sleep disruption and anxiety; enjoy herbal teas as alternatives.",
    details: `Caffeine can boost alertness, but too much may lead to sleep problems, 
anxiety, and restlessness. Keep it to a moderate amount — around 1-2 cups of coffee per day — 
and avoid it in the late afternoon or evening.`,
  },
  {
    slug: "prioritize-sleep",
    icon: FiMoon,
    title: "Prioritize Sleep",
    description:
      "Aim for 7-9 hours of quality sleep each night to allow your body to repair and rejuvenate.",
    details: `Sleep is when your body repairs and restores itself. Adults should aim 
for 7-9 hours of quality sleep each night. Create a relaxing bedtime routine, keep 
your bedroom cool and dark, and avoid screens before bed.`,
  },
  {
    slug: "eat-heart-healthy",
    icon: FiHeart,
    title: "Eat Heart-Healthy",
    description:
      "Include fruits, vegetables, whole grains, and healthy fats to maintain cardiovascular health.",
    details: `A heart-healthy diet is rich in fruits, vegetables, whole grains, lean 
proteins, and healthy fats like those in olive oil or avocados. Limit processed foods, 
salt, and sugar to reduce your risk of heart disease.`,
  },
];

export default function HealthTips() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2ecac8]/10 via-white to-[#338886]/5 p-8 flex flex-col justify-center">
      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
          Health Tips
        </h1>

        {tips.map(({ slug, icon: Icon, title, description }) => (
          <div key={slug} className="mb-6">
            <h2 className="text-2xl font-semibold flex items-center space-x-3 text-gray-900">
              <Icon className="text-[#2ecac8]" />
              <span>{title}</span>
            </h2>
            <p className="text-gray-700 ml-8">{description}</p>
          </div>
        ))}

        <Link
          to="/"
          className="inline-block mt-12 px-8 py-4 bg-gradient-to-r from-[#2ecac8] to-[#338886] text-white rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
