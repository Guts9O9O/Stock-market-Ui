
import { useState } from "react";

export default function Financials() {
  const [leftTab, setLeftTab] = useState("Income");
  const leftTabs = ["Income", "Balance", "Cash Flow"];

  const [rightTab, setRightTab] = useState("Financial");
  const rightTabs = ["Financial", "Valuation"];

  
  const bars = [
    { label: "Mar 2021", height: 80 },
    { label: "Mar 2022", height: 140 },
    { label: "Mar 2023", height: 100 },
    { label: "Mar 2024", height: 140 },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Financials</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* ─── Left Panel ───────────────────────────── */}
        <div className="flex-1 bg-cardDark p-6 rounded-2xl shadow-md">
          {/* Tabs + collapse icon */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-6">
              {leftTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setLeftTab(tab)}
                  className={`relative pb-2 text-sm ${
                    leftTab === tab
                      ? "text-white font-semibold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                  {leftTab === tab && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-400" />
                  )}
                </button>
              ))}
            </div>
            <button className="text-gray-400 hover:text-white">
              {/* simple up-chevron */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.23 12.21a.75.75 0 001.06.02l3.72-3.72 3.72 3.72a.75.75 0 001.06-1.06l-4.25-4.25a.75.75 0 00-1.06 0L5.21 11.17a.75.75 0 01.02 1.04z" />
              </svg>
            </button>
          </div>

          {/* Bars */}
          <div className="mt-4 flex items-end justify-between h-56">
            {bars.map(({ label, height }) => (
              <div key={label} className="flex flex-col items-center relative">
                {/* Top label + pill */}
                <div className="absolute top-0 flex flex-col items-center">
                  <p className="text-white text-xs font-medium mb-1">18.00K</p>
                  <span className="relative inline-flex items-center bg-green-500 text-white text-xs px-3 py-1 rounded-full -top-15 -right-10">
                    <span className="mr-1 text-[0.6rem]">▲</span>
                    0.27%
                  </span>
                </div>

                {/* Bar capsule */}
                <div
                  className="mt-auto w-6 bg-blue-500 rounded-full"
                  style={{ height: `${height}px` }}
                />

                {/* X-axis label */}
                <span className="text-gray-400 text-xs mt-3">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Right Panel ──────────────────────── */}
        <div className="flex-1 bg-cardDark p-6 rounded-2xl shadow-md flex flex-col">
          {/* Tabs */}
          <div className="flex items-center space-x-6 mb-4">
            {rightTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setRightTab(tab)}
                className={`text-sm ${
                  rightTab === tab
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
            <span className="flex-1 border-b border-gray-700" />
          </div>

          {/* Bullet List */}
          <ul className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i} className="flex items-start space-x-2">
                <span className="w-2 h-2 mt-1 bg-green-500 rounded-full flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
