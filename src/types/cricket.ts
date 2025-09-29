export interface CricketPlayer {
  id: string;
  name: string;
  image: string;
  battingStyle: string;
  bowlingStyle?: string;
  role: string;
  stats: {
    matches: number;
    runs: number;
    wickets?: number;
    average: number;
    strikeRate?: number;
    economy?: number;
  };
  team?: string;
  age?: number;
  nationality?: string;
}
