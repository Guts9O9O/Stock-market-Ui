export default function CompanyOverview() {
    const aboutText = `Cipla Limited is an India-based global pharmaceutical company. The Company is engaged in manufacturing, developing and marketing a wide range of branded and generic formulations and Active Pharmaceutical Ingredients (APIs). The Company operates through two segments: Pharmaceuticals and New ventures. The Pharmaceuticals segment is engaged in developing, manufacturing, selling, and distributing generic or branded generic medicines, as well as Active Pharmaceutical Ingredients (APIs). The New ventures segment includes the operations of the Company, a consumer healthcare, Biosimilars and specialty business. Its product portfolio spans complex generics, as well as drugs in the respiratory, anti-retroviral, urology, cardiology, anti-infective and central nervous system (CNS). Its geographical segments include India, the United States, South Africa, and the Rest of the World. It has its network of manufacturing, trading and other incidental operations in India and International markets.`;
  
    const managementText = `Cipla Limited is an India-based global pharmaceutical company. The Company is engaged in manufacturing, developing and marketing a wide range of branded and generic formulations and Active Pharmaceutical Ingredients (APIs). The Company operates through two segments: Pharmaceuticals and New ventures. The Pharmaceuticals segment is engaged in developing, manufacturing, selling, and distributing generic or branded generic medicines, as well as Active Pharmaceutical Ingredients (APIs). The Company operates through two segments: Pharmaceuticals and New ventures. It has its network of manufacturing and trading.`;
  
    return (
      <div className="flex flex-col md:flex-row gap-6">
        {/* ─── About the Company ─────────────────────── */}
        <div className="flex-1 bg-cardDark p-6 rounded-2xl shadow-md">
          <h3 className="text-white text-lg font-semibold mb-4">
            About the Company Cipla
          </h3>
  
          {/* Key codes grid */}
          <div className="grid grid-cols-4 gap-x-4 mb-4">
            <span className="text-gray-400 text-sm">Industry</span>
            <span className="text-gray-400 text-sm">ISIN</span>
            <span className="text-gray-400 text-sm">BSE Code</span>
            <span className="text-gray-400 text-sm">NSE Code</span>
  
            <span className="text-white text-sm font-medium">Tech</span>
            <span className="text-white text-sm font-medium">123</span>
            <span className="text-white text-sm font-medium">123</span>
            <span className="text-white text-sm font-medium">123</span>
          </div>
  
          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed">
            {aboutText}
          </p>
        </div>
  
        {/* ─── Management Info ───────────────────────── */}
        <div className="flex-1 bg-cardDark p-6 rounded-2xl shadow-md">
          <h3 className="text-white text-lg font-semibold mb-4">
            Management Info
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {managementText}
          </p>
        </div>
      </div>
    );
  }
  