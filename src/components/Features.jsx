import React from "react";
import { BsLightningChargeFill, BsGlobe2, BsShieldCheck, BsPhone } from "react-icons/bs";

const featureList = [
  {
    icon: <BsLightningChargeFill className="feature-icon" />,
    title: "Real-time Rates",
    description: "Get the latest exchange rates instantly."
  },
  {
    icon: <BsGlobe2 className="feature-icon" />,
    title: "150+ Currencies",
    description: "Supports major and exotic currencies."
  },
  {
    icon: <BsShieldCheck className="feature-icon" />,
    title: "Fast & Reliable",
    description: "Accurate and secure conversions."
  },
  {
    icon: <BsPhone className="feature-icon" />,
    title: "Works Everywhere",
    description: "Fully responsive on desktop and mobile."
  }
];

export const Features = () => {
  return (
    <section className="features-section">
      <div className="features-grid">
        {featureList.map((item, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon-circle">{item.icon}</div>
            <div className="feature-text-block">
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
