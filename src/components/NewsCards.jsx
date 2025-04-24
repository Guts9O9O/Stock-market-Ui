
import thumb from "../assets/news-thumb.png"; 

const newsData = [
  {
    date: "April 5, 2023",
    title: "Tesla to Build New Gigafactory in Mexico",
    source: "Bloomberg",
    time: "2h ago",
    image: thumb,
  },
  {
    date: "April 5, 2023",
    title: "Elon Musk Teases Tesla Robot at AI Day",
    source: "CNBC",
    time: "4h ago",
    image: thumb,
  },
  {
    date: "April 5, 2023",
    title: "Tesla’s Q1 Earnings Beat Wall Street Expectations",
    source: "Reuters",
    time: "6h ago",
    image: thumb,
  },
  {
    date: "April 5, 2023",
    title: "Tesla’s Q1 Earnings Beat Wall Street Expectations",
    source: "Reuters",
    time: "6h ago",
    image: thumb,
  },
  {
    date: "April 5, 2023",
    title: "Tesla’s Q1 Earnings Beat Wall Street Expectations",
    source: "Reuters",
    time: "6h ago",
    image: thumb,
  },
  {
    date: "April 5, 2023",
    title: "Tesla’s Q1 Earnings Beat Wall Street Expectations",
    source: "Reuters",
    time: "6h ago",
    image: thumb,
  },
];

export default function NewsCards() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">News</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsData.map((n, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-4 bg-[#1E293B] rounded-2xl shadow-md hover:bg-[#273147] transition-colors"
          >
            <img
              src={n.image}
              alt=""
              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
            />

            <div className="flex flex-col">
              <span className="text-gray-400 text-xs mb-1">{n.date}</span>
              <h3 className="text-sm font-medium text-white leading-snug">
                {n.title}
              </h3>
              <span className="text-gray-400 text-xs mt-2">
                {n.source} • {n.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
