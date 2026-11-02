import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";
import logoWithTextImg from "@/assets/logowithtext.png";

export function Mark({ className = "", size = 36 }: { className?: string; size?: number }) {
  return (
    <img
      src={logoImg}
      alt="Shravani Agro Emblem"
      width={size}
      height={size}
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`rounded-full object-contain shrink-0 drop-shadow-sm ${className}`}
    />
  );
}

export function Logo({
  compact = false,
  showText = true,
  className = "",
}: {
  compact?: boolean;
  showText?: boolean;
  className?: string;
}) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2.5 text-primary min-w-0 group ${className}`}
      aria-label="Shravani Agro Product Enterprises home"
    >
      <Mark size={compact ? 32 : 40} />
      {showText && (
        <span className="flex flex-col leading-none min-w-0">
          <span className="text-display text-[1.05rem] sm:text-[1.2rem] font-bold tracking-tight text-ink group-hover:text-primary transition-colors">
            SHRAVANI
          </span>
          <span className="text-[0.54rem] sm:text-[0.62rem] uppercase tracking-[0.15em] sm:tracking-[0.18em] font-semibold text-amber dark:text-amber mt-0.5 whitespace-nowrap">
            Agro Product Enterprises
          </span>
        </span>
      )}
    </Link>
  );
}

export function FullBrandLogo({
  className = "",
  maxWidth = 260,
}: {
  className?: string;
  maxWidth?: number;
}) {
  return (
    <Link to="/" aria-label="Shravani Agro Product Enterprises home" className={`inline-block ${className}`}>
      <img
        src={logoWithTextImg}
        alt="Shravani Agro Product Enterprises"
        style={{ maxWidth: `${maxWidth}px` }}
        className="w-full h-auto object-contain"
      />
    </Link>
  );
}
