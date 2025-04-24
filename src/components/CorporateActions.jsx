
import { useState } from "react";

export default function CorporateActions() {
  const tabs = ["Board Meetings", "AGM", "Dividends", "Bonus", "Split", "Rights"];
  const [activeTab, setActiveTab] = useState("Board Meetings");

  // sample data for “Board Meetings”; you can swap this per tab if needed
  const rows = [
    { date: "25-01-28", purpose: "Quarterly Results" },
    { date: "25-01-28", purpose: "Quarterly Results" },
    { date: "25-01-28", purpose: "Quarterly Results" },
    { date: "25-01-28", purpose: "Quarterly Results" },
    { date: "25-01-28", purpose: "Quarterly Results" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Corporate Actions</h2>

      <div className="bg-cardDark p-6 rounded-2xl shadow-md">
        {/* Tabs */}
        <div className="flex items-center space-x-6 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative text-sm pb-2 ${
                activeTab === tab
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400" />
              )}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left text-gray-400 py-2">Meeting Date</th>
                <th className="text-left text-gray-400 py-2">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b ${
                    i === rows.length - 1 ? "border-transparent" : "border-gray-800"
                  }`}
                >
                  <td className="py-3 text-gray-200">{row.date}</td>
                  <td className="py-3 text-gray-200">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
