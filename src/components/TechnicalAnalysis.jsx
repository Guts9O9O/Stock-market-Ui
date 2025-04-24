
import tech from "../assets/tech.png";

const TechnicalAnalysis = () => {
  return (
    <div className="bg-cardDark p-6 rounded-2xl shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">Technical Analysis</h2>

      {/* Chart Container */}
      <div className="w-full h-[400px] bg-cardDark rounded-xl overflow-hidden">
        <img
          src={tech}
          alt="Technical Analysis Chart"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default TechnicalAnalysis;
