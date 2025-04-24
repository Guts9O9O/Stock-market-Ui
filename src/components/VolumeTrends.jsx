import volT from "../assets/volT.png"; 

const VolumeTrends = () => {
    return (
      <div className="bg-cardDark p-6 rounded-2xl shadow-md w-full">
        <h2 className="text-xl font-semibold mb-4">Volume Trends</h2>
  
        {/* Placeholder Volume Chart */}
        <div className="w-full h-[400px] bg-cardDark rounded-xl flex items-center justify-center text-gray-400 text-sm">
          <img
                    src={volT}
                    alt="Volume trends"
                    className="object-contain w-full h-full"
                  />
        </div>
  
        
      </div>
    );
  };
  
  export default VolumeTrends;
  