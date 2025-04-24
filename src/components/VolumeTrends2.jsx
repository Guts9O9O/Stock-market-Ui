import React from "react";

export default function VolumeTrends2() {
  // define the 4-bar base pattern
  const base = [
    { period: "Mar 2021", value: 21.4 },
    { period: "Mar 2022", value: 31.4 },
    { period: "Mar 2023", value: 21.4 },
    { period: "Mar 2024", value: 21.4 },
  ];

  // repeat that pattern N times (here 4×4 = 16 bars, tweak as needed)
  const volumes = Array.from({ length: 16 }, (_, i) => {
    const b = base[i % base.length];
    return { ...b };
  });

  // find the max value to normalize heights
  const maxVal = Math.max(...volumes.map((v) => v.value));

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">Volume Trends</h2>
      <div className="bg-[#1E293B] p-6 rounded-2xl shadow-md overflow-x-auto">
        <div className="flex items-end space-x-6 h-52">
          {volumes.map((vol, idx) => {
            const heightPct = (vol.value / maxVal) * 100;
            return (
              <div key={idx} className="flex flex-col items-center">
                {/* value label */}
                <span className="text-white text-xs mb-1">
                  {vol.value.toFixed(1)}M
                </span>
                {/* pill-shaped bar */}
                <div
                  className="w-6 bg-blue-500 rounded-full"
                  style={{ height: `${heightPct}%` }}
                />
                {/* x-axis label */}
                <span className="text-gray-400 text-xs mt-2">
                  {vol.period}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
