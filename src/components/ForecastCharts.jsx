
import {
  PieChart, Pie, Cell, Legend,
  BarChart, Bar, XAxis, ResponsiveContainer,
} from "recharts";

const pieData = [
  { name: "Strong Buy",    value: 45, color: "#00E396" },
  { name: "Buy",           value: 25, color: "#3DCB8D" },
  { name: "Hold",          value: 20, color: "#D3F261" },
  { name: "Sell",          value: 7,  color: "#FF4560" },
  { name: "Strong Sell",   value: 3,  color: "#FF6B6B" },
];

const barData = [
  { day: "M", strongSell: 5, sell: 8, hold: 4, buy: 8, strongBuy: 8 },
  { day: "T", strongSell: 8, sell: 12, hold: 5, buy: 5, strongBuy: 3 },
  { day: "W", strongSell: 2, sell: 4, hold: 3, buy: 8, strongBuy: 16 },
  { day: "T", strongSell: 10, sell: 15, hold: 5, buy: 2, strongBuy: 1 },
  { day: "F", strongSell: 6, sell: 10, hold: 5, buy: 7, strongBuy: 5 },
];

export default function ForecastCharts() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Forecast</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* ─── Pie Chart Panel ───────────────────── */}
        <div className="flex-1 bg-cardDark p-6 rounded-2xl shadow-md">
          <h3 className="text-white mb-4">Analyst Estimates</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                startAngle={90}
                endAngle={-270}
                paddingAngle={2}
              >
                {pieData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="middle"
                iconSize={10}
                formatter={(name) => (
                  <span className="text-sm text-gray-300">{name}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* ─── Stacked Bar Chart Panel ──────────── */}
        <div className="flex-1 bg-cardDark p-6 rounded-2xl shadow-md">
          <h3 className="text-white mb-4">Recommendation Trend</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={barData} margin={{ left: 50, right: 50 }}>
              <XAxis
                dataKey="day"
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                axisLine={{ stroke: "#374151" }}
                tickLine={false}
              />
              <Bar
                dataKey="strongSell"
                stackId="a"
                fill="#FF6B6B"
                radius={[8, 8, 0, 0]}
              />
              <Bar
                dataKey="sell"
                stackId="a"
                fill="#FF4560"
                radius={[8, 8, 0, 0]}
              />
              <Bar
                dataKey="hold"
                stackId="a"
                fill="#D3F261"
                radius={[8, 8, 0, 0]}
              />
              <Bar
                dataKey="buy"
                stackId="a"
                fill="#3DCB8D"
                radius={[8, 8, 0, 0]}
              />
              <Bar
                dataKey="strongBuy"
                stackId="a"
                fill="#00E396"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
