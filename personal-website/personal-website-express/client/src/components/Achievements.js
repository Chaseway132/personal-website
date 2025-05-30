import React from 'react';

const Achievements = ({ achievements }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Achievements & Awards
      </h3>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4 py-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">{achievement.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.organization}</p>
              </div>
              <span className="text-blue-600 dark:text-blue-400 text-sm mt-1 md:mt-0">{achievement.year}</span>
            </div>
            {achievement.description && (
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{achievement.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
