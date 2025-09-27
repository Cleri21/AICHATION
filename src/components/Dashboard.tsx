import React, { useState } from 'react';
import { BarChart3, TrendingUp, MapPin, Droplets, AlertTriangle, CheckCircle, Clock, XCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useData } from '../contexts/DataContext';
import VisualizationChart from './VisualizationChart';
import MapView from './MapView';

const Dashboard: React.FC = () => {
  const { t } = useLanguage();
  const { getOverviewStats, getRegionalData } = useData();
  const [selectedRegion, setSelectedRegion] = useState('All India');
  
  const overviewStats = getOverviewStats();
  const regionalData = getRegionalData();

  const categoryIcons = {
    safe: CheckCircle,
    semicritical: Clock,
    critical: AlertTriangle,
    overexploited: XCircle
  };

  const categoryColors = {
    safe: 'text-green-600 bg-green-100',
    semicritical: 'text-yellow-600 bg-yellow-100',
    critical: 'text-orange-600 bg-orange-100',
    overexploited: 'text-red-600 bg-red-100'
  };

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{t(stat.label)}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.subtitle}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <IconComponent className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Visualization Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">{t('groundwaterTrends')}</h3>
            <BarChart3 className="h-5 w-5 text-blue-600" />
          </div>
          <VisualizationChart />
        </div>

        {/* Regional Data */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">{t('regionalData')}</h3>
            <MapPin className="h-5 w-5 text-blue-600" />
          </div>
          <div className="space-y-4">
            {regionalData.slice(0, 5).map((region, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-800">{region.name}</h4>
                  <p className="text-sm text-gray-600">{region.blocks} blocks assessed</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[region.category as keyof typeof categoryColors]}`}>
                    {t(region.category)}
                  </span>
                  <span className="text-sm font-semibold">{region.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map and Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Interactive Map */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">{t('interactiveMap')}</h3>
            <MapPin className="h-5 w-5 text-blue-600" />
          </div>
          <MapView />
        </div>

        {/* Category Breakdown */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">{t('categoryBreakdown')}</h3>
            <Droplets className="h-5 w-5 text-blue-600" />
          </div>
          <div className="space-y-4">
            {Object.entries(categoryIcons).map(([category, IconComponent]) => (
              <div key={category} className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${categoryColors[category as keyof typeof categoryColors]}`}>
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <span className="font-medium text-gray-800">{t(category)}</span>
                </div>
                <span className="text-sm font-semibold text-gray-600">
                  {category === 'safe' ? '15,432' : 
                   category === 'semicritical' ? '3,245' :
                   category === 'critical' ? '2,156' : '1,987'} blocks
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Assessments */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">{t('recentAssessments')}</h3>
          <TrendingUp className="h-5 w-5 text-blue-600" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 font-semibold text-gray-700">{t('state')}</th>
                <th className="py-3 px-4 font-semibold text-gray-700">{t('district')}</th>
                <th className="py-3 px-4 font-semibold text-gray-700">{t('category')}</th>
                <th className="py-3 px-4 font-semibold text-gray-700">{t('lastUpdated')}</th>
                <th className="py-3 px-4 font-semibold text-gray-700">{t('extractionRate')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { state: 'Rajasthan', district: 'Jaipur', category: 'critical', date: '2024-12-15', rate: '78%' },
                { state: 'Punjab', district: 'Ludhiana', category: 'overexploited', date: '2024-12-14', rate: '142%' },
                { state: 'Haryana', district: 'Karnal', category: 'safe', date: '2024-12-13', rate: '45%' },
                { state: 'Gujarat', district: 'Ahmedabad', category: 'semicritical', date: '2024-12-12', rate: '68%' },
                { state: 'Maharashtra', district: 'Nashik', category: 'safe', date: '2024-12-11', rate: '52%' },
              ].map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800">{row.state}</td>
                  <td className="py-3 px-4 text-gray-800">{row.district}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[row.category as keyof typeof categoryColors]}`}>
                      {t(row.category)}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{row.date}</td>
                  <td className="py-3 px-4 font-semibold text-gray-800">{row.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;