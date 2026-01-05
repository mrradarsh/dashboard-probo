import React, { useState } from 'react';
import Header from './components/Header';
import { Plus, Calendar, FileText, Construction } from 'lucide-react';
import ProfileCard from './components/ProfileCard';
import Button from './components/Button';
import StatsSection from './components/StatsSection';
import RecruitmentCard from './components/RecruitmentCard';
import SalaryList from './components/SalaryList';
import PaymentCard from './components/PaymentCard';
import DummyWorkTimeChart from './components/DummyWorkTimeChart';
import DummyTeamChart from './components/DummyTeamChart';
import TeamList from './components/TeamList';
import ProjectList from './components/ProjectList';
import CalendarView from './components/CalendarView';
import DocumentList from './components/DocumentList';
import Statistics from './components/Statistics';
import Portfolio from './components/Portfolio';

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <>
            {/* Breadcrumb & Title Row */}
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-8 gap-4 lg:gap-0">
              <div>
                <div className="text-gray-400 text-sm mb-1">
                  Portal <span className="mx-2">›</span> Dashboard
                </div>
                <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight">
                  Good morning Adarsh
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <Button icon={Plus} className="flex-1 lg:flex-none">
                  Add widget
                </Button>
                <Button icon={Calendar} className="flex-1 lg:flex-none">
                  18-22 Nov
                </Button>
                <Button variant="primary" icon={FileText} className="flex-1 lg:flex-none">
                  Add report
                </Button>
              </div>
            </div>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

              {/* Left Column */}
              <div className="lg:col-span-3 flex flex-col gap-6 order-2 lg:order-1">
                <div className="bg-[#E0F2F1] rounded-3xl p-1 overflow-hidden h-[340px] relative group transition-all hover:shadow-md">
                  <ProfileCard />
                </div>
                <div className="bg-gray-50 rounded-3xl p-6 h-[220px] transition-all hover:shadow-md">
                  <DummyWorkTimeChart />
                </div>
              </div>

              {/* Middle Column */}
              <div className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">
                <StatsSection />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto lg:h-[300px]">
                  <div className="bg-gray-50 rounded-3xl p-6 flex items-center justify-center min-h-[300px] lg:min-h-0 transition-all hover:shadow-md">
                    <DummyTeamChart />
                  </div>
                  <div className="bg-gray-50 rounded-3xl p-6 min-h-[300px] lg:min-h-0 transition-all hover:shadow-md">
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
          </>
        );
      case 'Statistics':
        return <Statistics />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Team':
        return (
          <div className="animate-in fade-in duration-500">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold tracking-tight mb-2">My Team</h1>
              <p className="text-gray-500">Manage your team members and roles.</p>
            </div>
            <TeamList />
          </div>
        );
      case 'Projects':
        return (
          <div className="animate-in fade-in duration-500">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold tracking-tight mb-2">Projects</h1>
              <p className="text-gray-500">Track current progress and deadlines.</p>
            </div>
            <ProjectList />
          </div>
        );
      case 'Calendar':
        return (
          <div className="animate-in fade-in duration-500">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold tracking-tight mb-2">Calendar</h1>
              <p className="text-gray-500">Schedule and upcoming events.</p>
            </div>
            <CalendarView />
          </div>
        );
      case 'Documents':
        return (
          <div className="animate-in fade-in duration-500">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold tracking-tight mb-2">Documents</h1>
              <p className="text-gray-500">Access and manage project files.</p>
            </div>
            <DocumentList />
          </div>
        );
      default:
        // Placeholder for other tabs
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center p-8 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
              <Construction size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">{activeTab}</h2>
            <p className="text-gray-500 max-w-md">
              This module is currently under development. Check back later for updates on the {activeTab} features.
            </p>
            <Button className="mt-6" onClick={() => setActiveTab('Dashboard')}>
              Return to Dashboard
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-10">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="px-4 lg:px-8 mt-6">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
