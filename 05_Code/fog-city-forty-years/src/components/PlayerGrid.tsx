import type { PlayerState } from "../types/game";
import { PlayerPanel } from "./PlayerPanel";

interface PlayerGridProps {
  players: PlayerState[];
  activePlayerId?: string;
  revealed?: boolean;
}

export function PlayerGrid({ players, activePlayerId, revealed = true }: PlayerGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
      {players.map((player) => (
        <PlayerPanel key={player.id} player={player} active={player.id === activePlayerId} revealed={revealed} />
      ))}
    </div>
  );
}
