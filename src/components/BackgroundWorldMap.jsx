import React from "react";
import FlagIcon from "./FlagIcon";

export const BackgroundWorldMap = ({ onSelectCurrency }) => {
  return (
    <div className="world-map-container" aria-hidden="false">
      {/* SVG Network Arcs and World Grid */}
      <svg
        className="world-map-svg"
        viewBox="0 0 1440 680"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients for Arcs */}
          <linearGradient id="arcGradUSD" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="arcGradGBP" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0369a1" stopOpacity="0.1" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="arcGradEUR" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="1" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="arcGradJPY" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
          </linearGradient>

          {/* Glow Filters */}
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Global Dotted Continent Points Cluster */}
        <g className="dotted-world-continents" opacity="0.32">
          {/* North America Matrix */}
          {[
            [120, 180], [135, 175], [150, 170], [165, 172], [180, 180], [195, 185],
            [130, 200], [145, 195], [160, 192], [175, 195], [190, 205], [205, 210],
            [140, 220], [155, 218], [170, 215], [185, 220], [200, 230], [215, 235],
            [150, 240], [165, 238], [180, 240], [195, 248], [210, 255], [225, 260],
            [160, 260], [175, 258], [190, 262], [205, 270], [220, 280],
            [170, 280], [185, 285], [200, 290], [215, 300],
            [180, 310], [195, 320], [210, 335], [225, 350], [235, 370]
          ].map(([x, y], i) => (
            <circle key={`na-${i}`} cx={x} cy={y} r="1.6" fill="#38bdf8" />
          ))}

          {/* South America Matrix */}
          {[
            [240, 390], [255, 395], [270, 405], [285, 415],
            [250, 420], [265, 425], [280, 435], [295, 445], [310, 455],
            [260, 450], [275, 460], [290, 470], [305, 480],
            [270, 485], [285, 495], [300, 510],
            [275, 525], [290, 540], [285, 565]
          ].map(([x, y], i) => (
            <circle key={`sa-${i}`} cx={x} cy={y} r="1.5" fill="#0284c7" />
          ))}

          {/* Europe Matrix */}
          {[
            [620, 160], [635, 155], [650, 150], [665, 152], [680, 160],
            [610, 175], [625, 170], [640, 168], [655, 172], [670, 178], [685, 185],
            [615, 195], [630, 190], [645, 188], [660, 192], [675, 198], [690, 205],
            [620, 215], [635, 212], [650, 210], [665, 215], [680, 225], [695, 230],
            [625, 235], [640, 232], [655, 230], [670, 238], [685, 245]
          ].map(([x, y], i) => (
            <circle key={`eu-${i}`} cx={x} cy={y} r="1.6" fill="#38bdf8" />
          ))}

          {/* Africa Matrix */}
          {[
            [630, 260], [645, 258], [660, 260], [675, 265], [690, 275], [705, 285],
            [625, 280], [640, 285], [655, 290], [670, 300], [685, 310], [700, 320],
            [635, 315], [650, 325], [665, 340], [680, 350], [695, 360],
            [645, 355], [660, 370], [675, 385], [690, 400],
            [655, 410], [670, 430], [685, 450], [675, 475]
          ].map(([x, y], i) => (
            <circle key={`af-${i}`} cx={x} cy={y} r="1.5" fill="#0284c7" />
          ))}

          {/* Asia Matrix */}
          {[
            [720, 150], [740, 145], [760, 142], [780, 145], [800, 150], [820, 158], [840, 165], [860, 172], [880, 180], [900, 190], [920, 200], [940, 210],
            [715, 170], [735, 168], [755, 165], [775, 168], [795, 175], [815, 182], [835, 190], [855, 198], [875, 208], [895, 220], [915, 230], [935, 240],
            [710, 190], [730, 190], [750, 188], [770, 192], [790, 200], [810, 210], [830, 220], [850, 230], [870, 242], [890, 255], [910, 268],
            [725, 215], [745, 218], [765, 220], [785, 225], [805, 235], [825, 248], [845, 260], [865, 275], [885, 290],
            [740, 240], [760, 245], [780, 255], [800, 270], [820, 285], [840, 300], [860, 315],
            // India cluster
            [750, 270], [765, 280], [780, 295], [770, 320], [780, 345],
            // East Asia & Japan
            [960, 220], [975, 235], [990, 250], [970, 265], [985, 280], [1000, 295],
            [1020, 240], [1035, 255], [1045, 270] // Japan arc
          ].map(([x, y], i) => (
            <circle key={`as-${i}`} cx={x} cy={y} r="1.6" fill="#38bdf8" />
          ))}

          {/* Australia & Oceania Matrix */}
          {[
            [980, 420], [1000, 415], [1020, 420], [1040, 430],
            [970, 440], [990, 442], [1010, 445], [1030, 455], [1050, 465],
            [985, 465], [1005, 470], [1025, 480], [1045, 490],
            [1000, 495], [1020, 505], [1035, 520]
          ].map(([x, y], i) => (
            <circle key={`au-${i}`} cx={x} cy={y} r="1.5" fill="#0284c7" />
          ))}
        </g>

        {/* Curved Network Connecting Lines */}
        {/* Arc 1: Connected to USD Badge (Top-Left) */}
        <path
          d="M 195 240 C 260 210, 340 230, 420 300"
          stroke="url(#arcGradUSD)"
          strokeWidth="1.2"
          strokeDasharray="4 2"
          opacity="0.75"
          filter="url(#arcGlow)"
        />
        <path
          d="M 180 270 C 130 320, 110 380, 95 440"
          stroke="url(#arcGradGBP)"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.6"
        />

        {/* Arc 2: Connecting GBP (Left) across to Center */}
        <path
          d="M 120 440 C 220 420, 310 390, 420 350"
          stroke="#0284c7"
          strokeWidth="1"
          strokeDasharray="5 3"
          opacity="0.5"
        />

        {/* Arc 3: Connecting EUR (Top-Right) to Center-Right */}
        <path
          d="M 1020 340 C 1090 280, 1150 240, 1220 250"
          stroke="url(#arcGradEUR)"
          strokeWidth="1.2"
          strokeDasharray="4 2"
          opacity="0.75"
          filter="url(#arcGlow)"
        />

        {/* Arc 4: Connecting JPY (Right) */}
        <path
          d="M 1040 370 C 1140 390, 1220 410, 1310 435"
          stroke="url(#arcGradJPY)"
          strokeWidth="1"
          strokeDasharray="4 3"
          opacity="0.6"
          filter="url(#arcGlow)"
        />

        {/* Glowing Network Nodes / Intersections */}
        {/* Near USD Badge */}
        <circle cx="210" cy="235" r="3.5" fill="#38bdf8" filter="url(#nodeGlow)" className="pulse-node" />
        <circle cx="210" cy="235" r="7" fill="none" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" className="ping-node" />

        {/* Near GBP Badge */}
        <circle cx="160" cy="435" r="3" fill="#38bdf8" filter="url(#nodeGlow)" className="pulse-node" />

        {/* Center Nodes around converter */}
        <circle cx="380" cy="320" r="3" fill="#0284c7" filter="url(#nodeGlow)" />
        <circle cx="1060" cy="330" r="3.5" fill="#38bdf8" filter="url(#nodeGlow)" className="pulse-node" />

        {/* Near EUR Badge */}
        <circle cx="1180" cy="245" r="3.5" fill="#38bdf8" filter="url(#nodeGlow)" className="pulse-node" />
        <circle cx="1180" cy="245" r="7" fill="none" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" className="ping-node" />

        {/* Near JPY Badge */}
        <circle cx="1290" cy="435" r="3" fill="#38bdf8" filter="url(#nodeGlow)" className="pulse-node" />
        <circle cx="1380" cy="495" r="2.5" fill="#0284c7" />
      </svg>

      {/* Floating Currency Rate Badges Exactly As In Screenshot */}
      
      {/* 1. Top-Left: USD ₹83.47 */}
      <div
        className="floating-badge badge-usd"
        onClick={() => onSelectCurrency && onSelectCurrency("USD")}
        title="Click to select USD in converter"
        role="button"
        tabIndex={0}
      >
        <div className="badge-flag-wrap">
          <FlagIcon code="USD" size={26} />
        </div>
        <div className="badge-text-wrap">
          <span className="badge-code">USD</span>
          <span className="badge-rate">₹83.47</span>
        </div>
      </div>

      {/* 2. Middle-Left: GBP ₹115.61 */}
      <div
        className="floating-badge badge-gbp"
        onClick={() => onSelectCurrency && onSelectCurrency("GBP")}
        title="Click to select GBP in converter"
        role="button"
        tabIndex={0}
      >
        <div className="badge-flag-wrap">
          <FlagIcon code="GBP" size={26} />
        </div>
        <div className="badge-text-wrap">
          <span className="badge-code">GBP</span>
          <span className="badge-rate">₹115.61</span>
        </div>
      </div>

      {/* 3. Top-Right: EUR ₹100.23 */}
      <div
        className="floating-badge badge-eur"
        onClick={() => onSelectCurrency && onSelectCurrency("EUR")}
        title="Click to select EUR in converter"
        role="button"
        tabIndex={0}
      >
        <div className="badge-flag-wrap">
          <FlagIcon code="EUR" size={26} />
        </div>
        <div className="badge-text-wrap">
          <span className="badge-code">EUR</span>
          <span className="badge-rate">₹100.23</span>
        </div>
      </div>

      {/* 4. Middle-Right: JPY ₹0.56 */}
      <div
        className="floating-badge badge-jpy"
        onClick={() => onSelectCurrency && onSelectCurrency("JPY")}
        title="Click to select JPY in converter"
        role="button"
        tabIndex={0}
      >
        <div className="badge-flag-wrap">
          <FlagIcon code="JPY" size={26} />
        </div>
        <div className="badge-text-wrap">
          <span className="badge-code">JPY</span>
          <span className="badge-rate">₹0.56</span>
        </div>
      </div>
    </div>
  );
};

export default BackgroundWorldMap;
