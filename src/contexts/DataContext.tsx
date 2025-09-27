import React, { createContext, useContext, ReactNode } from 'react';
import { BarChart3, Users, AlertTriangle, TrendingDown } from 'lucide-react';

interface DataContextType {
  getOverviewStats: () => any[];
  getRegionalData: () => any[];
  getGroundwaterData: () => any;
  getStateData: (state: string) => any;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const getOverviewStats = () => [
    {
      label: 'totalBlocks',
      value: '6,881',
      subtitle: 'Assessment units',
      icon: BarChart3,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      label: 'safeBlocks',
      value: '3,785',
      subtitle: '55% of total',
      icon: Users,
      color: 'bg-green-100 text-green-600'
    },
    {
      label: 'criticalBlocks',
      value: '1,101',
      subtitle: '16% of total',
      icon: AlertTriangle,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      label: 'overExploited',
      value: '620',
      subtitle: '9% of total',
      icon: TrendingDown,
      color: 'bg-red-100 text-red-600'
    }
  ];

  const getRegionalData = () => [
    { name: 'Uttar Pradesh', blocks: 820, category: 'critical', percentage: 68 },
    { name: 'Andhra Pradesh', blocks: 675, category: 'safe', percentage: 85 },
    { name: 'Jharkhand', blocks: 534, category: 'safe', percentage: 78 },
    { name: 'Tamil Nadu', blocks: 385, category: 'semicritical', percentage: 62 },
    { name: 'Maharashtra', blocks: 355, category: 'safe', percentage: 82 },
    { name: 'West Bengal', blocks: 341, category: 'semicritical', percentage: 71 },
    { name: 'Odisha', blocks: 314, category: 'safe', percentage: 76 },
    { name: 'Madhya Pradesh', blocks: 313, category: 'safe', percentage: 79 },
    { name: 'Rajasthan', blocks: 295, category: 'critical', percentage: 58 },
    { name: 'Gujarat', blocks: 226, category: 'critical', percentage: 64 }
  ];

  const getGroundwaterData = () => ({
    totalRecharge: 437.6,
    totalExtraction: 249.4,
    netAvailability: 188.2,
    stageOfExtraction: 57.1
  });

  const getStateData = (state: string) => {
    const stateDataMap: { [key: string]: any } = {
      'Rajasthan': {
        safeBlocks: 180,
        criticalBlocks: 85,
        overExploited: 30,
        totalRecharge: 12.8,
        extraction: 9.4,
        stage: 73.4
      },
      'Punjab': {
        safeBlocks: 45,
        criticalBlocks: 67,
        overExploited: 40,
        totalRecharge: 22.3,
        extraction: 31.7,
        stage: 142.1
      }
    };
    
    return stateDataMap[state] || {
      safeBlocks: 0,
      criticalBlocks: 0,
      overExploited: 0,
      totalRecharge: 0,
      extraction: 0,
      stage: 0
    };
  };

  return (
    <DataContext.Provider value={{
      getOverviewStats,
      getRegionalData,
      getGroundwaterData,
      getStateData
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export default DataProvider;