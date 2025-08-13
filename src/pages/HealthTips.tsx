import React from "react";
import { Link } from "react-router-dom";
import { tips } from "../data/healthTipsData";

const HealthTips = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#2ecac8]">
        Top Health Tips for a Better You
      </h1>
      <p className="mb-12 text-center text-gray-700 text-lg">
        These simple lifestyle habits can make a big difference in your overall health and wellness.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {tips.map(({ slug, icon: Icon, title, description }) => (
          <Link
            key={slug}
            to={`/health-tips/${slug}`}
            className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow no-underline hover:no-underline"
          >
            <div className="text-[#2ecac8] text-4xl">
              <Icon />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HealthTips;
