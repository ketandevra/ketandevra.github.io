'use client';
import { CricketPlayer } from '@/types/cricket';

interface PlayerDetailModalProps {
  player: CricketPlayer;
  onClose: () => void;
}

export default function PlayerDetailModal({ player, onClose }: PlayerDetailModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header with close button */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {player.name}
            </h1>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Player Header */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden mb-8">
            <div className="md:flex">
              {/* Player Image */}
              <div className="md:w-1/3 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                {player.image ? (
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  className="w-full h-full bg-gray-300 dark:bg-gray-500 rounded-full flex items-center justify-center"
                  style={{ display: player.image ? 'none' : 'flex' }}
                >
                  <span className="text-4xl font-bold text-gray-600 dark:text-gray-300">
                    {player.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>

              {/* Player Basic Info */}
              <div className="md:w-2/3 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Role</span>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {player.role}
                    </p>
                  </div>
                  
                  <div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Team</span>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {player.team || 'N/A'}
                    </p>
                  </div>
                  
                  <div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Age</span>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {player.age ? `${player.age} years` : 'N/A'}
                    </p>
                  </div>
                  
                  <div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Nationality</span>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {player.nationality || 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Player Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Batting Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Batting Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Batting Style</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {player.battingStyle}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Matches Played</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {player.stats.matches}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Total Runs</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {player.stats.runs.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Average</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {player.stats.average}
                  </span>
                </div>
                
                {player.stats.strikeRate && (
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 dark:text-gray-400">Strike Rate</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {player.stats.strikeRate}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Bowling Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Bowling Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Bowling Style</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {player.bowlingStyle || 'N/A'}
                  </span>
                </div>
                
                {player.stats.wickets ? (
                  <>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">Wickets Taken</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {player.stats.wickets}
                      </span>
                    </div>
                    
                    {player.stats.economy && (
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600 dark:text-gray-400">Economy Rate</span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {player.stats.economy}
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    <p>No bowling statistics available</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Performance Summary */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Performance Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {player.stats.matches}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Matches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {player.stats.runs.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Runs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {player.stats.average}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Average</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
