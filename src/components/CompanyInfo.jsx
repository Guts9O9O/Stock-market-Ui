const companyInfo = [
    { label: "Company", value: "Tesla Inc." },
    { label: "Sector", value: "Automobile & EV" },
    { label: "CEO", value: "Elon Musk" },
    { label: "Headquarters", value: "Austin, Texas, USA" },
    { label: "Founded", value: "2003" },
    { label: "Employees", value: "127,855" },
  ];
  
  const CompanyInfo = () => {
    return (
      <div className="bg-cardDark p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Company Info</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {companyInfo.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-gray-400 text-sm">{item.label}</span>
              <span className="text-white font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CompanyInfo;
  