import React from "react";

export const FlagIcon = ({ code, size = 26, className = "" }) => {
  const s = size;
  const r = size / 2;

  switch (code) {
    case "USD":
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" className={`flag-circle ${className}`}>
          <defs>
            <clipPath id="circle-clip-usd">
              <circle cx="16" cy="16" r="15" />
            </clipPath>
          </defs>
          <g clipPath="url(#circle-clip-usd)">
            {/* White base */}
            <rect width="32" height="32" fill="#ffffff" />
            {/* Red stripes */}
            <rect y="0" width="32" height="2.46" fill="#b91c1c" />
            <rect y="4.92" width="32" height="2.46" fill="#b91c1c" />
            <rect y="9.84" width="32" height="2.46" fill="#b91c1c" />
            <rect y="14.76" width="32" height="2.46" fill="#b91c1c" />
            <rect y="19.68" width="32" height="2.46" fill="#b91c1c" />
            <rect y="24.6" width="32" height="2.46" fill="#b91c1c" />
            <rect y="29.52" width="32" height="2.48" fill="#b91c1c" />
            {/* Blue canton */}
            <rect width="15" height="17.2" fill="#1e3a8a" />
            {/* Stars */}
            <circle cx="3.5" cy="3.5" r="0.9" fill="#ffffff" />
            <circle cx="7.5" cy="3.5" r="0.9" fill="#ffffff" />
            <circle cx="11.5" cy="3.5" r="0.9" fill="#ffffff" />
            <circle cx="5.5" cy="6.5" r="0.9" fill="#ffffff" />
            <circle cx="9.5" cy="6.5" r="0.9" fill="#ffffff" />
            <circle cx="3.5" cy="9.5" r="0.9" fill="#ffffff" />
            <circle cx="7.5" cy="9.5" r="0.9" fill="#ffffff" />
            <circle cx="11.5" cy="9.5" r="0.9" fill="#ffffff" />
            <circle cx="5.5" cy="12.5" r="0.9" fill="#ffffff" />
            <circle cx="9.5" cy="12.5" r="0.9" fill="#ffffff" />
          </g>
          <circle cx="16" cy="16" r="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </svg>
      );

    case "INR":
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" className={`flag-circle ${className}`}>
          <defs>
            <clipPath id="circle-clip-inr">
              <circle cx="16" cy="16" r="15" />
            </clipPath>
          </defs>
          <g clipPath="url(#circle-clip-inr)">
            {/* Saffron */}
            <rect width="32" height="10.66" fill="#f97316" />
            {/* White */}
            <rect y="10.66" width="32" height="10.66" fill="#ffffff" />
            {/* Green */}
            <rect y="21.32" width="32" height="10.68" fill="#15803d" />
            {/* Ashoka Chakra */}
            <circle cx="16" cy="16" r="4.2" fill="none" stroke="#1e3a8a" strokeWidth="1" />
            <circle cx="16" cy="16" r="1" fill="#1e3a8a" />
            {/* Spokes */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <line
                key={deg}
                x1="16"
                y1="16"
                x2={16 + 3.8 * Math.cos((deg * Math.PI) / 180)}
                y2={16 + 3.8 * Math.sin((deg * Math.PI) / 180)}
                stroke="#1e3a8a"
                strokeWidth="0.6"
              />
            ))}
          </g>
          <circle cx="16" cy="16" r="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </svg>
      );

    case "EUR":
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" className={`flag-circle ${className}`}>
          <defs>
            <clipPath id="circle-clip-eur">
              <circle cx="16" cy="16" r="15" />
            </clipPath>
          </defs>
          <g clipPath="url(#circle-clip-eur)">
            <rect width="32" height="32" fill="#003399" />
            {/* 12 Stars in circle */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <circle
                key={deg}
                cx={16 + 9 * Math.cos((deg * Math.PI) / 180)}
                cy={16 + 9 * Math.sin((deg * Math.PI) / 180)}
                r="1.2"
                fill="#ffcc00"
              />
            ))}
          </g>
          <circle cx="16" cy="16" r="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </svg>
      );

    case "GBP":
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" className={`flag-circle ${className}`}>
          <defs>
            <clipPath id="circle-clip-gbp">
              <circle cx="16" cy="16" r="15" />
            </clipPath>
          </defs>
          <g clipPath="url(#circle-clip-gbp)">
            {/* Blue background */}
            <rect width="32" height="32" fill="#012169" />
            {/* White diagonals */}
            <line x1="0" y1="0" x2="32" y2="32" stroke="#ffffff" strokeWidth="5.5" />
            <line x1="32" y1="0" x2="0" y2="32" stroke="#ffffff" strokeWidth="5.5" />
            {/* Red diagonals */}
            <line x1="0" y1="0" x2="32" y2="32" stroke="#c8102e" strokeWidth="2" />
            <line x1="32" y1="0" x2="0" y2="32" stroke="#c8102e" strokeWidth="2" />
            {/* White cross */}
            <line x1="16" y1="0" x2="16" y2="32" stroke="#ffffff" strokeWidth="7" />
            <line x1="0" y1="16" x2="32" y2="16" stroke="#ffffff" strokeWidth="7" />
            {/* Red cross */}
            <line x1="16" y1="0" x2="16" y2="32" stroke="#c8102e" strokeWidth="4" />
            <line x1="0" y1="16" x2="32" y2="16" stroke="#c8102e" strokeWidth="4" />
          </g>
          <circle cx="16" cy="16" r="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </svg>
      );

    case "JPY":
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" className={`flag-circle ${className}`}>
          <defs>
            <clipPath id="circle-clip-jpy">
              <circle cx="16" cy="16" r="15" />
            </clipPath>
          </defs>
          <g clipPath="url(#circle-clip-jpy)">
            <rect width="32" height="32" fill="#ffffff" />
            <circle cx="16" cy="16" r="8" fill="#bc002d" />
          </g>
          <circle cx="16" cy="16" r="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </svg>
      );

    case "AUD":
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" className={`flag-circle ${className}`}>
          <defs>
            <clipPath id="circle-clip-aud">
              <circle cx="16" cy="16" r="15" />
            </clipPath>
          </defs>
          <g clipPath="url(#circle-clip-aud)">
            <rect width="32" height="32" fill="#012169" />
            {/* Mini Union Jack */}
            <rect width="16" height="13" fill="#012169" />
            <line x1="0" y1="0" x2="16" y2="13" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="16" y1="0" x2="0" y2="13" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="8" y1="0" x2="8" y2="13" stroke="#ffffff" strokeWidth="3" />
            <line x1="0" y1="6.5" x2="16" y2="6.5" stroke="#ffffff" strokeWidth="3" />
            <line x1="8" y1="0" x2="8" y2="13" stroke="#c8102e" strokeWidth="1.5" />
            <line x1="0" y1="6.5" x2="16" y2="6.5" stroke="#c8102e" strokeWidth="1.5" />
            {/* Southern Cross stars */}
            <circle cx="24" cy="7" r="1" fill="#ffffff" />
            <circle cx="22" cy="13" r="1" fill="#ffffff" />
            <circle cx="27" cy="17" r="1" fill="#ffffff" />
            <circle cx="23" cy="22" r="1.3" fill="#ffffff" />
            <circle cx="10" cy="22" r="1.8" fill="#ffffff" />
          </g>
          <circle cx="16" cy="16" r="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </svg>
      );

    case "CAD":
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" className={`flag-circle ${className}`}>
          <defs>
            <clipPath id="circle-clip-cad">
              <circle cx="16" cy="16" r="15" />
            </clipPath>
          </defs>
          <g clipPath="url(#circle-clip-cad)">
            <rect width="32" height="32" fill="#ff0000" />
            <rect x="8" width="16" height="32" fill="#ffffff" />
            <path
              d="M16 8l1.5 4 2.5-1.5-1 3.5 3 1-2.5 2 2.5 2-3.5.5.5 3-3-1.5-1 4.5h-1l-1-4.5-3 1.5.5-3-3.5-.5 2.5-2-2.5-2 3-1-1-3.5 2.5 1.5z"
              fill="#ff0000"
            />
          </g>
          <circle cx="16" cy="16" r="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </svg>
      );

    case "CHF":
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" className={`flag-circle ${className}`}>
          <defs>
            <clipPath id="circle-clip-chf">
              <circle cx="16" cy="16" r="15" />
            </clipPath>
          </defs>
          <g clipPath="url(#circle-clip-chf)">
            <rect width="32" height="32" fill="#d52b1e" />
            <rect x="13" y="7" width="6" height="18" fill="#ffffff" rx="1" />
            <rect x="7" y="13" width="18" height="6" fill="#ffffff" rx="1" />
          </g>
          <circle cx="16" cy="16" r="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </svg>
      );

    case "CNY":
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" className={`flag-circle ${className}`}>
          <defs>
            <clipPath id="circle-clip-cny">
              <circle cx="16" cy="16" r="15" />
            </clipPath>
          </defs>
          <g clipPath="url(#circle-clip-cny)">
            <rect width="32" height="32" fill="#de2910" />
            <polygon points="8,5 9,8 12,8 9.5,10 10.5,13 8,11 5.5,13 6.5,10 4,8 7,8" fill="#ffde00" />
            <circle cx="15" cy="5" r="0.9" fill="#ffde00" />
            <circle cx="17.5" cy="8" r="0.9" fill="#ffde00" />
            <circle cx="17.5" cy="12" r="0.9" fill="#ffde00" />
            <circle cx="15" cy="15" r="0.9" fill="#ffde00" />
          </g>
          <circle cx="16" cy="16" r="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </svg>
      );

    case "AED":
      return (
        <svg width={s} height={s} viewBox="0 0 32 32" className={`flag-circle ${className}`}>
          <defs>
            <clipPath id="circle-clip-aed">
              <circle cx="16" cy="16" r="15" />
            </clipPath>
          </defs>
          <g clipPath="url(#circle-clip-aed)">
            <rect width="32" height="10.66" fill="#00732f" />
            <rect y="10.66" width="32" height="10.66" fill="#ffffff" />
            <rect y="21.32" width="32" height="10.68" fill="#000000" />
            <rect width="9" height="32" fill="#ff0000" />
          </g>
          <circle cx="16" cy="16" r="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </svg>
      );

    default:
      return (
        <div
          className={`flag-fallback ${className}`}
          style={{
            width: s,
            height: s,
            borderRadius: "50%",
            backgroundColor: "#1e293b",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: `${s * 0.42}px`,
            fontWeight: "bold",
            color: "#38bdf8",
            flexShrink: 0
          }}
        >
          {code ? code.slice(0, 2) : "??"}
        </div>
      );
  }
};

export default FlagIcon;
