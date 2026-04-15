import { Sword, Shield, Flame, Sparkles, Heart, Zap } from 'lucide-react';

interface Action {
  id: number;
  name: string;
  icon: React.ReactNode;
  cooldown: number;
  hotkey: string;
}

interface ActionBarProps {
  actions: Action[];
}

export function ActionBar({ actions }: ActionBarProps) {
  return (
    <div className="bg-black/70 border-2 border-amber-700/50 rounded-lg p-3 backdrop-blur-sm shadow-2xl">
      <div className="flex gap-2 justify-center">
        {actions.map((action, index) => (
          <div
            key={action.id}
            className="relative group"
          >
            {/* Action Button */}
            <button
              className="w-14 h-14 bg-gradient-to-b from-gray-900 to-black border-2 border-amber-700/60 rounded-lg
                         flex items-center justify-center
                         hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/50
                         active:scale-95 transition-all
                         relative overflow-hidden"
            >
              {/* Icon */}
              <div className="text-amber-300 z-10">
                {action.icon}
              </div>

              {/* Cooldown Overlay */}
              {action.cooldown > 0 && (
                <>
                  <div 
                    className="absolute inset-0 bg-black/70 transition-all duration-1000"
                    style={{ height: `${action.cooldown}%` }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <span className="text-xs text-white">
                      {Math.ceil(action.cooldown / 10)}
                    </span>
                  </div>
                </>
              )}

              {/* Hotkey */}
              <div className="absolute bottom-0.5 right-0.5 text-[10px] text-amber-600 font-mono">
                {action.hotkey}
              </div>
            </button>

            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black/95 border border-amber-600 rounded px-3 py-1.5 text-xs text-amber-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30">
              {action.name}
              <div className="text-[10px] text-gray-400 mt-0.5">Hotkey: {action.hotkey}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
