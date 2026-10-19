"use client";

import { useState, useSyncExternalStore } from "react";
import { agencyPlans, businessPlans, type Cell, type Platform, type PlanFamily } from "@/lib/pricing";
import { site } from "@/lib/site";
import { Icon } from "./Icon";

const families = { business: businessPlans, agency: agencyPlans };
type FamilyId = keyof typeof families;
type Billing = "monthly" | "yearly";

const platformIcon: Record<Platform, { icon: "phone" | "tablet" | "android"; label: string }> = {
  android: { icon: "android", label: "Android" },
  iphone: { icon: "phone", label: "iPhone" },
  ipad: { icon: "tablet", label: "iPad" },
};

function Segmented<T extends string>({
  value,
  onChange,
  options,
  label,
}: {
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: React.ReactNode }[];
  label: string;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex rounded-full bg-bg-alt p-1 ring-1 ring-line">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={value === o.value}
          onClick={() => onChange(o.value)}
          className={`flex h-9 items-center gap-2 rounded-full px-5 text-[14px] font-medium transition ${
            value === o.value ? "bg-card text-fg shadow-[0_1px_4px_rgba(0,0,0,0.12)]" : "text-fg-2 hover:text-fg"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function CellValue({ v }: { v: Cell }) {
  if (v === true)
    return (
      <span className="inline-flex text-fg" aria-label="Included">
        <Icon name="check" size={18} strokeWidth={2.2} />
      </span>
    );
  if (v === false)
    return (
      <span className="inline-flex text-fg-3/60" aria-label="Not included">
        <Icon name="dash" size={18} />
      </span>
    );
  return <span className="font-medium">{v}</span>;
}

export function Pricing() {
  const [picked, setFamily] = useState<FamilyId | null>(null);
  const [billing, setBilling] = useState<Billing>("monthly");

  // Deep link: /pricing/?plan=agency opens the agency tab.
  const search = useSyncExternalStore(
    () => () => {},
    () => window.location.search,
    () => "",
  );
  const family: FamilyId = picked ?? (new URLSearchParams(search).get("plan") === "agency" ? "agency" : "business");

  function selectFamily(f: FamilyId) {
    setFamily(f);
    const url = new URL(window.location.href);
    if (f === "agency") url.searchParams.set("plan", "agency");
    else url.searchParams.delete("plan");
    window.history.replaceState(null, "", url);
  }

  const data: PlanFamily = families[family];
  const cols = data.plans.length;
  const groups = Array.from(new Set(data.rows.map((r) => r.group)));

  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <Segmented
          label="Plan type"
          value={family}
          onChange={selectFamily}
          options={[
            { value: "business", label: "For your business" },
            { value: "agency", label: "For agencies" },
          ]}
        />
        <Segmented
          label="Billing period"
          value={billing}
          onChange={setBilling}
          options={[
            { value: "monthly", label: "Monthly" },
            {
              value: "yearly",
              label: (
                <>
                  Yearly <span className="rounded-full bg-lime/25 px-1.5 py-0.5 text-[11px] font-semibold text-fg">−17%</span>
                </>
              ),
            },
          ]}
        />
        <p className="text-center text-[15px] text-fg-2">{data.subtitle}</p>
      </div>

      {/* Plan cards */}
      <div className={`mx-auto mt-12 grid gap-4 sm:grid-cols-2 ${cols === 4 ? "lg:grid-cols-4" : "max-w-[960px] lg:grid-cols-3"}`}>
        {data.plans.map((p) => {
          const price = billing === "monthly" ? p.monthly : p.yearly;
          return (
            <div
              key={p.id}
              className={`relative flex flex-col rounded-[28px] p-7 ${
                p.recommended ? "bg-card shadow-[var(--shadow)] ring-2 ring-fg" : "bg-card ring-1 ring-line"
              }`}
            >
              {p.recommended && (
                <span className="absolute -top-3 left-7 rounded-full bg-ink px-3 py-1 text-[12px] font-semibold text-on-ink">
                  Recommended
                </span>
              )}
              <h3 className="text-[21px] font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-1 min-h-[2.75em] text-[14px] text-fg-2">{p.blurb}</p>
              <p className="mt-5 flex items-baseline gap-1">
                <span className="text-[15px] text-fg-2">USD</span>
                <span className="text-[44px] font-bold leading-none tracking-tight">{price.toLocaleString("en-US")}</span>
                <span className="text-[15px] text-fg-2">/mo</span>
              </p>
              <p className="mt-1.5 text-[13px] text-fg-3">
                {billing === "monthly"
                  ? "Billed monthly"
                  : `Billed yearly · USD ${(price * 12).toLocaleString("en-US")}`}
              </p>
              <div className="mt-4 flex items-center gap-2 text-fg-2">
                {p.platforms.map((pl) => (
                  <span key={pl} title={platformIcon[pl].label}>
                    <Icon name={platformIcon[pl].icon} size={20} label={platformIcon[pl].label} />
                  </span>
                ))}
              </div>
              <a
                href={site.signupUrl}
                className={`mt-6 flex h-11 items-center justify-center rounded-full text-[15px] font-medium transition ${
                  p.recommended ? "bg-ink text-on-ink hover:opacity-85" : "bg-bg-alt text-fg hover:bg-line"
                }`}
              >
                Start free trial
              </a>
              <ul className="mt-6 space-y-2.5 border-t border-line pt-6 text-[14px]">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5">
                    <span className="mt-0.5 text-lime">
                      <Icon name="check" size={16} strokeWidth={2.6} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Comparison table */}
      <div className="mt-24">
        <h2 className="headline text-center">Compare every feature.</h2>
        <div className="mt-10 overflow-x-auto rounded-[24px] ring-1 ring-line">
          <table className="w-full min-w-[680px] border-collapse text-[14px]">
            <caption className="sr-only">{data.title} feature comparison</caption>
            <thead>
              <tr className="sticky top-0 bg-bg">
                <th scope="col" className="sticky left-0 z-10 w-[34%] bg-bg p-5 text-left font-normal text-fg-2">
                  {billing === "monthly" ? "Monthly price" : "Yearly price (per month)"}
                </th>
                {data.plans.map((p) => (
                  <th key={p.id} scope="col" className={`p-5 text-center ${p.recommended ? "bg-bg-alt" : ""}`}>
                    <span className="block text-[16px] font-semibold">{p.name}</span>
                    <span className="mt-1 block font-normal text-fg-2">
                      USD {(billing === "monthly" ? p.monthly : p.yearly).toLocaleString("en-US")}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            {groups.map((g) => (
              <tbody key={g}>
                <tr>
                  <th
                    colSpan={cols + 1}
                    scope="colgroup"
                    className="border-t border-line bg-bg-alt px-5 py-3 text-left text-[12px] font-semibold uppercase tracking-[0.08em] text-fg-3"
                  >
                    {g}
                  </th>
                </tr>
                {data.rows
                  .filter((r) => r.group === g)
                  .map((r) => (
                    <tr key={r.label} className="border-t border-line">
                      <th scope="row" className="sticky left-0 bg-bg px-5 py-3.5 text-left font-normal text-fg-2">
                        {r.label}
                      </th>
                      {r.values.map((v, i) => (
                        <td
                          key={i}
                          className={`px-5 py-3.5 text-center ${data.plans[i].recommended ? "bg-bg-alt/60" : ""}`}
                        >
                          <CellValue v={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
