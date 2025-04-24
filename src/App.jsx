import Header from './components/Header'
import ChartStats from './components/ChartStats'
import NewsCards from './components/NewsCards'
import Financials from "./components/Financials";
import TechnicalAnalysis from './components/TechnicalAnalysis'
import VolumeTrends from './components/VolumeTrends'
import CorporateActions from './components/CorporateActions'
import PeersComparison from './components/PeersComparison'
import ForecastCharts from './components/ForecastCharts';
import Shareholding from './components/Shareholding';
import CompanyOverview from './components/CompanyOverview';
import VolumeTrends2 from './components/VolumeTrends2';
import PriceFaqs from './components/PriceFaqs';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0f1820] text-white p-6 space-y-6">
      <Header />
      <ChartStats />
      <NewsCards />
      <Financials />
      <ForecastCharts />
      <TechnicalAnalysis />
      <VolumeTrends />
      <Shareholding/>
      <CorporateActions />
      <CompanyOverview />
      <PeersComparison />
      <VolumeTrends2 />
      <PriceFaqs/>
    </div>
  )
}

export default App