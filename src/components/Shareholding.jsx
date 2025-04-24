
import { useState } from "react";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, ResponsiveContainer,
} from "recharts";

export default function Shareholding() {
  // Pie chart data
  const pieData = [
    { name: "FII",    value: 25, color: "#00E396" },
    { name: "MF",     value: 20, color: "#008FFB" },
    { name: "Promoter", value: 30, color: "#00E0C9" },
    { name: "Other",  value: 15, color: "#FEB019" },
    { name: "Public", value: 10, color: "#FF4560" },
  ];

  // Bar chart data by category
  const barDatasets = {
    FII: [
      { period: "Mar 2021", value: 60 },
      { period: "Mar 2022", value: 120 },
      { period: "Mar 2023", value: 100 },
      { period: "Mar 2024", value: 140 },
    ],
    MF: [
      { period: "Mar 2021", value: 50 },
      { period: "Mar 2022", value: 80 },
      { period: "Mar 2023", value: 130 },
      { period: "Mar 2024", value: 120 },
    ],
    Promoter: [
      { period: "Mar 2021", value: 100 },
      { period: "Mar 2022", value: 90 },
      { period: "Mar 2023", value: 110 },
      { period: "Mar 2024", value: 95 },
    ],
    Other: [
      { period: "Mar 2021", value: 40 },
      { period: "Mar 2022", value: 60 },
      { period: "Mar 2023", value: 70 },
      { period: "Mar 2024", value: 85 },
    ],
  };

  const [activeBarTab, setActiveBarTab] = useState("FII");
  const barData = barDatasets[activeBarTab];

  // Insights list
  const insights = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ];

  const barTabs = Object.keys(barDatasets);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Shareholding</h2>
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* ─── Pie + Legend Panel ───────────────────────── */}
        <div className="flex-1 bg-[#1E293B] p-6 rounded-2xl shadow-md flex flex-col md:flex-row items-center md:items-start gap-6">
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={4}
              >
                {pieData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <ul className="flex-1 space-y-2">
            {pieData.map((entry) => (
              <li key={entry.name} className="flex items-center space-x-2">
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-gray-300 text-sm">{`${entry.name} ${entry.value}%`}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ─── Bar Chart + Tabs Panel ─────────────────── */}
        <div className="flex-1 bg-[#1E293B] p-6 rounded-2xl shadow-md">
          <div className="flex items-center space-x-4 mb-4">
            {barTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveBarTab(tab)}
                className={`relative text-sm pb-1 ${
                  activeBarTab === tab
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
                {activeBarTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400" />
                )}
              </button>
            ))}
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData} margin={{ left: -15, right: -15 }}>
              <XAxis
                dataKey="period"
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Bar
                dataKey="value"
                fill="#5B93FF"
                radius={[8, 8, 0, 0]}
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* ─── Insights Panel ─────────────────────────── */}
        <div className="flex-1 bg-[#1E293B] p-6 rounded-2xl shadow-md">
          <h3 className="text-white mb-4">Shareholding Insights</h3>
          <ul className="space-y-3">
            {insights.map((text, i) => (
              <li key={i} className="flex items-start space-x-2">
                <span className="w-2 h-2 mt-1 bg-green-400 rounded-full flex-shrink-0" />
                <p className="text-gray-300 text-sm">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
