import { Skull, Shield, Swords } from 'lucide-react';

interface CharacterPanelProps {
  characterImage: string;
  name: string;
  level: number;
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  stamina: number;
  maxStamina: number;
}

export function CharacterPanel({
  characterImage,
  name,
  level,
  health,
  maxHealth,
  mana,
  maxMana,
  stamina,
  maxStamina,
}: CharacterPanelProps) {
  const healthPercentage = (health / maxHealth) * 100;
  const manaPercentage = (mana / maxMana) * 100;
  const staminaPercentage = (stamina / maxStamina) * 100;

  return (
    <div className="bg-black/60 border-2 border-amber-700/50 rounded-lg p-4 backdrop-blur-sm shadow-2xl">
      {/* Ornate top border */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      
      {/* Character Portrait */}
      <div className="relative mb-4">
        <div className="w-32 h-32 mx-auto border-4 border-amber-700/70 rounded-full overflow-hidden shadow-lg shadow-red-900/50">
          <img 
            src={characterImage} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Level badge */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-900 border-2 border-amber-600 rounded-full px-3 py-1 text-xs text-amber-200">
          LVL {level}
        </div>
      </div>

      {/* Character Name */}
      <h2 className="text-center text-xl text-amber-100 mb-4 tracking-wider">{name}</h2>

      {/* Stats Bars */}
      <div className="space-y-3">
        {/* Health */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <Skull className="w-4 h-4 text-red-500" />
              <span className="text-xs text-red-300">Health</span>
            </div>
            <span className="text-xs text-red-300">{health}/{maxHealth}</span>
          </div>
          <div className="w-full h-3 bg-black/50 border border-red-900/50 rounded overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-900 via-red-600 to-red-500 shadow-lg shadow-red-500/50 transition-all duration-300"
              style={{ width: `${healthPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Mana */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <Swords className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-blue-300">Mana</span>
            </div>
            <span className="text-xs text-blue-300">{mana}/{maxMana}</span>
          </div>
          <div className="w-full h-3 bg-black/50 border border-blue-900/50 rounded overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 shadow-lg shadow-blue-500/50 transition-all duration-300"
              style={{ width: `${manaPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Stamina */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-xs text-green-300">Stamina</span>
            </div>
            <span className="text-xs text-green-300">{stamina}/{maxStamina}</span>
          </div>
          <div className="w-full h-3 bg-black/50 border border-green-900/50 rounded overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-900 via-green-600 to-green-400 shadow-lg shadow-green-500/50 transition-all duration-300"
              style={{ width: `${staminaPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
