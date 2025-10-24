import React from 'react';

const Achievements = ({ achievements }) => {
  return (
    <div className="bg-gray-700/50 p-6 rounded-lg shadow-md border border-gray-600/50">
      <h3 className="text-xl font-semibold mb-4 text-white">
        Achievements & Awards
      </h3>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4 py-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h4 className="font-medium text-white">{achievement.title}</h4>
                <p className="text-gray-300 text-sm">{achievement.organization}</p>
              </div>
              <span className="text-blue-400 text-sm mt-1 md:mt-0">{achievement.year}</span>
            </div>
            {achievement.description && (
              <p className="text-gray-300 mt-2 text-sm">{achievement.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
