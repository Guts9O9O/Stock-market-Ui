
import React from "react";

const peers = [
  {
    name: "Sun Pharma",
    rating: "Bearish",
    price: "1,980",
    change: "-2.40%",
    pe: "18.9",
    pb: "3.2",
    dividend: "1.4%",
    debtToEquity: "0.8",
  },
  {
    name: "Tata Pharma",
    rating: "Bullish",
    price: "2,150",
    change: "+1.25%",
    pe: "22.3",
    pb: "2.8",
    dividend: "1.1%",
    debtToEquity: "0.4",
  },
  {
    name: "Cipla Ltd",
    rating: "Neutral",
    price: "1,450",
    change: "0.00%",
    pe: "24.7",
    pb: "4.1",
    dividend: "0.9%",
    debtToEquity: "0.6",
  },
  {
    name: "Sun Pharma",
    rating: "Bearish",
    price: "1,980",
    change: "-2.40%",
    pe: "18.9",
    pb: "3.2",
    dividend: "1.4%",
    debtToEquity: "0.8",
  },
  {
    name: "Tata Pharma",
    rating: "Bullish",
    price: "2,150",
    change: "+1.25%",
    pe: "22.3",
    pb: "2.8",
    dividend: "1.1%",
    debtToEquity: "0.4",
  },
  {
    name: "Cipla Ltd",
    rating: "Neutral",
    price: "1,450",
    change: "0.00%",
    pe: "24.7",
    pb: "4.1",
    dividend: "0.9%",
    debtToEquity: "0.6",
  },
  {
    name: "Tata Pharma",
    rating: "Bullish",
    price: "2,150",
    change: "+1.25%",
    pe: "22.3",
    pb: "2.8",
    dividend: "1.1%",
    debtToEquity: "0.4",
  },
  {
    name: "Cipla Ltd",
    rating: "Neutral",
    price: "1,450",
    change: "0.00%",
    pe: "24.7",
    pb: "4.1",
    dividend: "0.9%",
    debtToEquity: "0.6",
  },
  // ...add more rows as needed
];

export default function PeersComparison() {
  return (
    <div className="bg-cardDark p-6 rounded-2xl shadow-md overflow-x-auto">
      <h2 className="text-xl font-semibold text-white mb-4">Peers Comparison</h2>
      <table className="w-full table-auto min-w-[800px] text-sm">
        <thead>
          <tr className="text-left text-gray-400 border-b border-gray-700">
            <th className="px-4 py-2">Names</th>
            <th className="px-4 py-2">Technical Rating</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">%Change</th>
            <th className="px-4 py-2">P/E</th>
            <th className="px-4 py-2">P/B</th>
            <th className="px-4 py-2">Dividend Yield</th>
            <th className="px-4 py-2">Debt to Equity</th>
          </tr>
        </thead>
        <tbody>
          {peers.map((peer, idx) => (
            <tr
              key={idx}
              className="border-b border-gray-800 hover:bg-gray-800 transition-colors"
            >
              <td className="px-4 py-3 text-white whitespace-nowrap">
                {peer.name}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className="inline-flex items-center space-x-1">
                  <span
                    className={`text-xs ${
                      peer.rating === "Bearish"
                        ? "text-red-500"
                        : peer.rating === "Bullish"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {peer.rating === "Bearish"
                      ? "↓"
                      : peer.rating === "Bullish"
                      ? "↑"
                      : "→"}
                  </span>
                  <span className="text-gray-300">{peer.rating}</span>
                </span>
              </td>
              <td className="px-4 py-3 text-gray-300 whitespace-nowrap">
                {peer.price}
              </td>
              <td
                className={`px-4 py-3 font-semibold whitespace-nowrap ${
                  peer.change.startsWith("-")
                    ? "text-red-500"
                    : "text-green-400"
                }`}
              >
                {peer.change}
              </td>
              <td className="px-4 py-3 text-gray-300 whitespace-nowrap">
                {peer.pe}
              </td>
              <td className="px-4 py-3 text-gray-300 whitespace-nowrap">
                {peer.pb}
              </td>
              <td className="px-4 py-3 text-gray-300 whitespace-nowrap">
                {peer.dividend}
              </td>
              <td className="px-4 py-3 text-gray-300 whitespace-nowrap">
                {peer.debtToEquity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
