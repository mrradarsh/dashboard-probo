import React from 'react';
import Header from './components/Header';
import { Plus, Calendar, FileText } from 'lucide-react';
import ProfileCard from './components/ProfileCard';
import WorkTimeChart from './components/WorkTimeChart';
import StatsSection from './components/StatsSection';
import TeamChart from './components/TeamChart';
import RecruitmentCard from './components/RecruitmentCard';
import SalaryList from './components/SalaryList';
import PaymentCard from './components/PaymentCard';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-10">
      <Header />

      <main className="px-4 lg:px-8 mt-6">
        {/* Breadcrumb & Title Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-8 gap-4 lg:gap-0">
          <div>
            <div className="text-gray-400 text-sm mb-1">
              Portal <span className="mx-2">›</span> Dashboard
            </div>
            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight">
              Good morning Jhon
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 shadow-sm whitespace-nowrap">
              <Plus size={16} /> Add widget
            </button>
            <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 shadow-sm whitespace-nowrap">
              <Calendar size={16} /> 18-22 Nov
            </button>
            <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-[#B4EFB6] text-green-900 rounded-full text-sm font-medium hover:opacity-90 shadow-sm whitespace-nowrap">
              <FileText size={16} /> Add report
            </button>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left Column */}
          <div className="lg:col-span-3 flex flex-col gap-6 order-2 lg:order-1">
            <div className="bg-[#E0F2F1] rounded-3xl p-1 overflow-hidden h-[340px] relative group">
              {/* Placeholder for ProfileCard */}
              <ProfileCard />
            </div>
            <div className="bg-gray-50 rounded-3xl p-6 h-[220px] flex items-center justify-center text-gray-400">
              <WorkTimeChart />
            </div>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">
            <StatsSection />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto lg:h-[300px]">
              <div className="bg-gray-50 rounded-3xl p-6 flex items-center justify-center text-gray-400 min-h-[300px] lg:min-h-0">
                <TeamChart />
              </div>
              <div className="bg-gray-50 rounded-3xl p-6 min-h-[300px] lg:min-h-0">
                <RecruitmentCard />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 flex flex-col gap-6 pl-0 lg:pl-4 order-3">
            <div className="mb-2 mt-4 lg:mt-0">
              <h3 className="text-sm text-gray-500 mb-1">Payout monthly</h3>
              <h2 className="text-xl font-semibold">Salaries and insentive</h2>
            </div>
            <SalaryList />
            <PaymentCard />
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
