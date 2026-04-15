import { Scroll, Sword, Target } from 'lucide-react';

interface Quest {
  id: number;
  title: string;
  description: string;
  progress: number;
  maxProgress: number;
  type: 'main' | 'side';
}

interface QuestPanelProps {
  quests: Quest[];
}

export function QuestPanel({ quests }: QuestPanelProps) {
  return (
    <div className="bg-black/60 border-2 border-amber-700/50 rounded-lg p-4 backdrop-blur-sm shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-amber-700/30">
        <Scroll className="w-5 h-5 text-amber-400" />
        <h3 className="text-amber-100 tracking-wider">Active Quests</h3>
      </div>

      {/* Quest List */}
      <div className="space-y-3 max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-amber-700 scrollbar-track-black/20">
        {quests.map((quest) => (
          <div 
            key={quest.id}
            className="bg-black/40 border border-amber-800/40 rounded p-3 hover:border-amber-600/60 transition-all cursor-pointer"
          >
            {/* Quest Header */}
            <div className="flex items-start gap-2 mb-2">
              {quest.type === 'main' ? (
                <Sword className="w-4 h-4 text-red-400 mt-0.5" />
              ) : (
                <Target className="w-4 h-4 text-blue-400 mt-0.5" />
              )}
              <div className="flex-1">
                <h4 className={`text-sm ${quest.type === 'main' ? 'text-red-300' : 'text-blue-300'} mb-1`}>
                  {quest.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {quest.description}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-2">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Progress</span>
                <span>{quest.progress}/{quest.maxProgress}</span>
              </div>
              <div className="w-full h-1.5 bg-black/50 border border-amber-900/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-900 to-amber-500 transition-all duration-300"
                  style={{ width: `${(quest.progress / quest.maxProgress) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
