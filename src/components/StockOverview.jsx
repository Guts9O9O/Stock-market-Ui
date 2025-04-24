const stats = [
    { label: "Open", value: "$1,020.50" },
    { label: "High", value: "$1,045.30" },
    { label: "Low", value: "$1,015.00" },
    { label: "Volume", value: "1.23M" },
    { label: "Market Cap", value: "$950B" },
    { label: "P/E Ratio", value: "102.3" },
  ];
  
  const StockOverview = () => {
    return (
      <div className="bg-cardDark p-6 rounded-2xl shadow-md grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="text-sm text-gray-400">{item.label}</span>
            <span className="text-lg font-semibold text-white">{item.value}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default StockOverview;
  