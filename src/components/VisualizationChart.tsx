import React from 'react';

const VisualizationChart: React.FC = () => {
  const years = ['2019', '2020', '2021', '2022', '2023', '2024'];
  const data = [
    { year: '2019', safe: 65, semicritical: 15, critical: 12, overexploited: 8 },
    { year: '2020', safe: 63, semicritical: 16, critical: 13, overexploited: 8 },
    { year: '2021', safe: 61, semicritical: 17, critical: 14, overexploited: 8 },
    { year: '2022', safe: 59, semicritical: 18, critical: 14, overexploited: 9 },
    { year: '2023', safe: 57, semicritical: 19, critical: 15, overexploited: 9 },
    { year: '2024', safe: 55, semicritical: 20, critical: 16, overexploited: 9 },
  ];

  const maxValue = 100;
  
  return (
    <div className="space-y-6">
      {/* Chart */}
      <div className="relative h-64 flex items-end space-x-1">
        {data.map((yearData, index) => (
          <div key={yearData.year} className="flex-1 flex flex-col items-center">
            <div className="relative w-full bg-gray-100 rounded-t-lg overflow-hidden" style={{ height: '200px' }}>
              <div 
                className="absolute bottom-0 w-full bg-green-500 transition-all duration-500 ease-out"
                style={{ height: `${(yearData.safe / maxValue) * 200}px` }}
              ></div>
              <div 
                className="absolute bottom-0 w-full bg-yellow-500 transition-all duration-500 ease-out"
                style={{ 
                  height: `${(yearData.semicritical / maxValue) * 200}px`,
                  bottom: `${(yearData.safe / maxValue) * 200}px`
                }}
              ></div>
              <div 
                className="absolute bottom-0 w-full bg-orange-500 transition-all duration-500 ease-out"
                style={{ 
                  height: `${(yearData.critical / maxValue) * 200}px`,
                  bottom: `${((yearData.safe + yearData.semicritical) / maxValue) * 200}px`
                }}
              ></div>
              <div 
                className="absolute bottom-0 w-full bg-red-500 transition-all duration-500 ease-out"
                style={{ 
                  height: `${(yearData.overexploited / maxValue) * 200}px`,
                  bottom: `${((yearData.safe + yearData.semicritical + yearData.critical) / maxValue) * 200}px`
                }}
              ></div>
              
              {/* Hover tooltip */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-black bg-opacity-50 flex items-center justify-center transition-opacity">
                <div className="bg-white p-2 rounded text-xs">
                  <p>Safe: {yearData.safe}%</p>
                  <p>Semi-Critical: {yearData.semicritical}%</p>
                  <p>Critical: {yearData.critical}%</p>
                  <p>Over-Exploited: {yearData.overexploited}%</p>
                </div>
              </div>
            </div>
            <span className="mt-2 text-xs font-medium text-gray-600">{yearData.year}</span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 text-xs">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span>Safe</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-yellow-500 rounded"></div>
          <span>Semi-Critical</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-orange-500 rounded"></div>
          <span>Critical</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded"></div>
          <span>Over-Exploited</span>
        </div>
      </div>

      {/* Trend Indicators */}
      <div className="grid grid-cols-2 gap-4 text-xs">
        <div className="bg-red-50 p-3 rounded-lg">
          <p className="font-semibold text-red-800">Declining Trend</p>
          <p className="text-red-600">Safe blocks decreased by 10% over 5 years</p>
        </div>
        <div className="bg-orange-50 p-3 rounded-lg">
          <p className="font-semibold text-orange-800">Increasing Pressure</p>
          <p className="text-orange-600">Critical blocks increased by 33%</p>
        </div>
      </div>
    </div>
  );
};

export default VisualizationChart;