import type { SVGProps } from "react";

interface LogoProps extends Omit<SVGProps<SVGSVGElement>, "children"> {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "dark", className = "", ...props }: LogoProps) {
  const navy = variant === "light" ? "#FFFFFF" : "#101D32";
  const copper = variant === "light" ? "#C26B40" : "#A34F2D";
  const navyStroke = variant === "light" ? "#FFFFFF" : "#101D32";

  return (
    <svg
      viewBox="0 0 520 150"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Tahseen Jaber Cold Storage"
      {...props}
    >
      {/* Mountain peaks */}
      <g>
        {/* Far right peak (terracotta) */}
        <path
          d="M 280 30 L 360 8 L 430 24 L 420 32 L 360 18 L 290 36 Z"
          fill={copper}
        />
        {/* Mid peak (navy) */}
        <path
          d="M 220 50 L 280 26 L 330 42 L 322 48 L 280 34 L 230 56 Z"
          fill={navy}
        />
        {/* Front peak (navy) */}
        <path
          d="M 145 60 L 195 38 L 225 50 L 215 56 L 195 46 L 152 66 Z"
          fill={navy}
        />
      </g>

      {/* Roof line (the slant above pillars) */}
      <path
        d="M 35 65 L 230 32 L 380 65"
        stroke={navyStroke}
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Warehouse pillars */}
      <g fill={copper}>
        <rect x="38" y="68" width="10" height="42" />
        <rect x="56" y="68" width="10" height="42" />
        <rect x="74" y="68" width="10" height="42" />
        <rect x="92" y="68" width="10" height="42" />
        <rect x="110" y="68" width="10" height="42" />
        <rect x="128" y="68" width="10" height="42" />
        <rect x="146" y="68" width="10" height="42" />
        <rect x="164" y="68" width="10" height="42" />
        <rect x="182" y="68" width="10" height="42" />
        <rect x="200" y="68" width="10" height="42" />
        <rect x="218" y="68" width="10" height="42" />
      </g>

      {/* Base line under warehouse */}
      <rect x="32" y="108" width="208" height="4" fill={navy} />

      {/* Main brand text "TAHSEEN JABER" */}
      <text
        x="255"
        y="92"
        fontFamily="Cormorant Garamond, serif"
        fontSize="38"
        fontWeight="700"
        fill={navy}
        letterSpacing="2"
      >
        TAHS
      </text>
      <text
        x="338"
        y="92"
        fontFamily="Cormorant Garamond, serif"
        fontSize="38"
        fontWeight="700"
        fill={navy}
        letterSpacing="2"
      >
        JAB
      </text>
      <text
        x="402"
        y="92"
        fontFamily="Cormorant Garamond, serif"
        fontSize="38"
        fontWeight="700"
        fill={navy}
        letterSpacing="2"
      >
        R
      </text>

      {/* Sub text "COLD STORAGE" */}
      <text
        x="258"
        y="125"
        fontFamily="Inter, sans-serif"
        fontSize="13"
        fontWeight="700"
        fill={copper}
        letterSpacing="6"
      >
        COLD  STORAGE
      </text>
    </svg>
  );
}