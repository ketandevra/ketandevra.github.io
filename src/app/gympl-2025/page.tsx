'use client';
import { useState, useMemo } from 'react';
import { cricketPlayers } from './data';
import { CricketPlayer } from '@/types/cricket';
import PlayerDetailModal from './PlayerDetailModal';

export default function CricketPlayersList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState<CricketPlayer | null>(null);

  const filteredPlayers = useMemo(() => {
    if (!searchTerm) return cricketPlayers;
    
    return cricketPlayers.filter(player =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <main className="px-4 py-10 overflow-x-hidden">
      <div className="text-center mb-5">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">GYMPL-2025 Cricket Players</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search players by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-10 pr-4 text-gray-700 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPlayers.map((player) => (
          <div 
            key={player.id} 
            onClick={() => setSelectedPlayer(player)}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
          >
              {/* Player Image */}
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                      {player.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Player Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {player.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Role:</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {player.role}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Batting:</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {player.battingStyle}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Matches:</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {player.stats.matches}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Runs:</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {player.stats.runs.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
        ))}
      </div>

      {/* Player Detail Modal */}
      {selectedPlayer && (
        <PlayerDetailModal 
          player={selectedPlayer} 
          onClose={() => setSelectedPlayer(null)} 
        />
      )}

      {/* No Results */}
      {filteredPlayers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 dark:text-gray-400 text-lg">
            No players found matching "{searchTerm}"
          </div>
          <button
            onClick={() => setSearchTerm('')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear Search
          </button>
        </div>
      )}
    </main>
  );
}
