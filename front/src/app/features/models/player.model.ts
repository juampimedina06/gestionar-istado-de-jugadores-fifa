export interface Player {
  id: number;
  fifa_version: string;
  fifa_update: string;
  player_face_url: string;
  long_name: string;
  player_positions: string;
  club_name: string | null;
  nationality_name: string | null;
  player_traits: string | null;
  attacking_finishing: number | null;
  skill_dribbling: number | null;
  attacking_short_passing: number | null;
  power_shot_power: number | null;
  movement_acceleration: number | null;
  defending_standing_tackle: number | null;
  mentality_interceptions: number | null;
  power_strength: number | null;
  defending_marking: number | null;
}
