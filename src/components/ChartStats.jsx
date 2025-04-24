
import { useState } from "react";
import chart1 from "../assets/chart1.png"; 

export default function ChartStats() {
  const [range, setRange] = useState("1W");
  const ranges = ["1W", "1M", "3M", "1Y", "All"];

  const metrics = [
    {
      label: "Dividend Yield",
      value: "0.89",
      note: "Lower than Industry",
      noteColor: "text-red-500",
    },
    {
      label: "Beta",
      value: "0.41",
      note: "Low Volatility",
      noteColor: "text-green-400",
    },
    {
      label: "Debt To Equity",
      value: "0.41",
      note: "Low Volatility",
      noteColor: "text-green-400",
    },
    {
      label: "P/E Ratio",
      value: "24.74",
      note: "vs Sector 30.12",
      noteColor: "text-yellow-400",
    },
    {
      label: "ROE",
      value: "15.6%",
      note: "Industry 12.3%",
      noteColor: "text-green-400",
    },
    {
      label: "Market Cap",
      value: "2.5T",
      note: "Large Cap",
      noteColor: "text-green-400",
    },
  ];

  return (
    <>
      {/* ─── Descriptive Text ───────────────────────────── */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        Cipla is trading -0.89% lower at Rs 1,459.05 as compared to its last closing
        price. Cipla has been trading in the price range of 1,482.20 & 1,438.75.
        Cipla has given -4.55% in this year & -0.87% in the last 5 days. Cipla has
        TTM P/E ratio 24.74 as compared to the sector…{" "}
        <span className="text-white underline cursor-pointer">see more</span>
      </p>

      {/* ─── Panels Wrapper ───────────────────────────── */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* ─── Chart Panel ───────────────────────────── */}
        <div className="flex-1 bg-cardDark p-6 rounded-2xl shadow-md">
          <div className="relative w-full h-80 bg-gray-800 rounded-xl overflow-hidden">
            
            <img
              src={chart1}
              alt="price chart placeholder"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center text-gray-600">
              [ Price Chart ]
            </div>
          </div>

          <div className="flex justify-center items-center space-x-6 text-gray-500 mt-4">
            {ranges.map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`text-sm ${
                  range === r
                    ? "text-white font-semibold"
                    : "hover:text-white transition-colors"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Stats Panel ───────────────────────────── */}
        <div className="flex-1 bg-cardDark p-6 rounded-2xl shadow-md flex flex-col">
          <p className="text-gray-400 text-sm mb-4">
            Updated on Feb 15, 2025 • 07:15 AM IST
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {metrics.map((m, i) => (
              <div key={i} className="space-y-1">
                <p className="text-gray-400 text-xs">{m.label}</p>
                <p className="text-white font-semibold">{m.value}</p>
                <p className={`text-xs ${m.noteColor}`}>{m.note}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-6" />

          
          <div className="space-y-6">
            {/* Day Range */}
            <div>
              <p className="text-gray-400 text-xs mb-1">Day Range</p>
              <div className="relative w-full h-1 bg-gray-700 rounded">
                <span
                  className="absolute top-0 left-[50%] w-2 h-2 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1,438.75</span>
                <span>1,438.75</span>
              </div>
            </div>

            {/* 52-Week Range */}
            <div>
              <p className="text-gray-400 text-xs mb-1">52-Week Range</p>
              <div className="relative w-full h-1 bg-gray-700 rounded overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-1 bg-red-500"
                  style={{ width: "35%" }}
                />
                <div
                  className="absolute right-0 top-0 h-1 bg-green-500"
                  style={{ width: "65%" }}
                />
                <span
                  className="absolute top-0 left-[35%] w-2 h-2 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1,438.75</span>
                <span>1,438.75</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
