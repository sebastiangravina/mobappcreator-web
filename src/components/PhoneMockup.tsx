import { Icon, type Name as IconName } from "./Icon";

type Tile = { icon: IconName; label: string };

const defaultTiles: Tile[] = [
  { icon: "cart", label: "Order" },
  { icon: "form", label: "Book" },
  { icon: "tag", label: "Offers" },
  { icon: "pin", label: "Find us" },
];

/**
 * A device frame with a sample app screen built in HTML/CSS, so it stays
 * sharp at any size and needs no screenshots. Swap for real app
 * screenshots later if you prefer.
 */
export function PhoneMockup({
  appName = "La Parrilla",
  subtitle = "Grill & wine bar",
  accent = "var(--orange)",
  tiles = defaultTiles,
  className = "",
  variant = "home",
}: {
  appName?: string;
  subtitle?: string;
  accent?: string;
  tiles?: Tile[];
  className?: string;
  variant?: "home" | "push" | "radio";
}) {
  return (
    <div
      className={`relative aspect-[9/19.2] w-[260px] rounded-[44px] bg-[#1d1d1f] p-[10px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] ring-1 ring-line ${className}`}
      aria-hidden
    >
      <div className="relative h-full w-full overflow-hidden rounded-[35px] bg-[#f2f2f7] text-[#1d1d1f]">
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-2 z-10 h-[22px] w-[78px] -translate-x-1/2 rounded-full bg-black" />
        {/* Status bar */}
        <div className="flex h-10 items-end justify-between px-6 pb-1 text-[10px] font-semibold">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="h-[7px] w-3 rounded-[2px] bg-[#1d1d1f]" />
          </span>
        </div>

        {variant === "home" && (
          <div className="px-3.5">
            <div className="mt-2 flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-[9px] text-white" style={{ background: accent }}>
                <Icon name="store" size={17} strokeWidth={2} />
              </div>
              <div className="leading-tight">
                <p className="text-[13px] font-bold">{appName}</p>
                <p className="text-[9.5px] text-[#6e6e73]">{subtitle}</p>
              </div>
            </div>
            <div
              className="mt-3 h-[118px] rounded-[18px] p-3 text-white"
              style={{ background: `linear-gradient(135deg, ${accent}, color-mix(in srgb, ${accent} 55%, #000))` }}
            >
              <p className="text-[9px] font-semibold uppercase tracking-wider opacity-80">Today only</p>
              <p className="mt-1 text-[17px] font-bold leading-tight">2x1 on all
                <br />
                main dishes</p>
              <span className="mt-2.5 inline-block rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-semibold text-[#1d1d1f]">
                Order now
              </span>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {tiles.map((t) => (
                <div key={t.label} className="flex flex-col items-center gap-1">
                  <div className="grid h-11 w-11 place-items-center rounded-[13px] bg-white shadow-sm" style={{ color: accent }}>
                    <Icon name={t.icon} size={19} strokeWidth={2} />
                  </div>
                  <span className="text-[8.5px] font-medium text-[#3a3a3c]">{t.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-3.5 text-[11px] font-bold">Popular</p>
            <div className="mt-1.5 space-y-1.5">
              {["Ojo de bife", "Provoleta", "Malbec reserva"].map((d, i) => (
                <div key={d} className="flex items-center gap-2 rounded-[12px] bg-white p-1.5 shadow-sm">
                  <div
                    className="h-8 w-8 rounded-[8px]"
                    style={{ background: `color-mix(in srgb, ${accent} ${30 + i * 15}%, #fff)` }}
                  />
                  <div className="flex-1">
                    <p className="text-[9.5px] font-semibold">{d}</p>
                    <p className="text-[8px] text-[#8e8e93]">USD {14 + i * 4}</p>
                  </div>
                  <div className="mr-1 grid h-5 w-5 place-items-center rounded-full text-white" style={{ background: accent }}>
                    <Icon name="plus" size={11} strokeWidth={2.6} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {variant === "push" && (
          <div
            className="absolute inset-0 px-3 pt-16"
            style={{ background: `linear-gradient(160deg, color-mix(in srgb, ${accent} 70%, #000), #111)` }}
          >
            <p className="text-center text-[44px] font-light leading-none text-white">9:41</p>
            <p className="mt-1 text-center text-[10px] text-white/80">Monday, October 19</p>
            <div className="mt-8 space-y-2">
              {[
                { t: appName, m: "Your class starts in 2 hours. Tap to check in." },
                { t: "Urban Cuts", m: "This week only: 20% off for app members ✂️" },
              ].map((n) => (
                <div key={n.m} className="rounded-[16px] bg-white/80 p-2.5 backdrop-blur">
                  <div className="flex items-center gap-1.5">
                    <div className="h-4 w-4 rounded-[5px]" style={{ background: accent }} />
                    <p className="text-[9px] font-semibold">{n.t}</p>
                    <p className="ml-auto text-[8px] text-[#6e6e73]">now</p>
                  </div>
                  <p className="mt-1 text-[9.5px] leading-snug">{n.m}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {variant === "radio" && (
          <div className="flex flex-col items-center px-5 pt-6">
            <div
              className="grid aspect-square w-full place-items-center rounded-[22px] text-white shadow-lg"
              style={{ background: `linear-gradient(135deg, ${accent}, color-mix(in srgb, ${accent} 40%, #000))` }}
            >
              <Icon name="radio" size={64} strokeWidth={1.4} />
            </div>
            <p className="mt-5 text-[14px] font-bold">{appName}</p>
            <p className="text-[10px] text-[#6e6e73]">{subtitle}</p>
            <div className="mt-4 h-1 w-full rounded-full bg-[#d1d1d6]">
              <div className="h-1 w-2/5 rounded-full" style={{ background: accent }} />
            </div>
            <div className="mt-5 flex items-center gap-7">
              <span className="h-0 w-0 border-y-[7px] border-r-[10px] border-y-transparent border-r-[#1d1d1f]" />
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#1d1d1f]">
                <span className="flex gap-1">
                  <span className="h-4 w-1.5 rounded-sm bg-white" />
                  <span className="h-4 w-1.5 rounded-sm bg-white" />
                </span>
              </span>
              <span className="h-0 w-0 border-y-[7px] border-l-[10px] border-y-transparent border-l-[#1d1d1f]" />
            </div>
            <span className="mt-5 rounded-full bg-[#ff3b30] px-2 py-0.5 text-[8.5px] font-bold text-white">LIVE</span>
          </div>
        )}

        {/* Tab bar */}
        {variant !== "push" && (
          <div className="absolute inset-x-0 bottom-0 flex h-14 items-start justify-around border-t border-black/5 bg-white/90 pt-2 backdrop-blur">
            {(["store", "cart", "bell", "user"] as IconName[]).map((n, i) => (
              <span key={n} style={{ color: i === 0 ? accent : "#8e8e93" }}>
                <Icon name={n} size={19} strokeWidth={2} />
              </span>
            ))}
          </div>
        )}
        {/* Home indicator */}
        <div
          className={`absolute bottom-1.5 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full ${variant === "push" ? "bg-white/70" : "bg-black/80"}`}
        />
      </div>
    </div>
  );
}
