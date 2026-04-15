import { CharacterPanel } from './components/CharacterPanel';
import { InventoryPanel } from './components/InventoryPanel';
import { QuestPanel } from './components/QuestPanel';
import { ActionBar } from './components/ActionBar';
import { Sword, Shield, Flame, Sparkles, Heart, Zap, Coins, Crown } from 'lucide-react';

export default function App() {
  // Character data
  const character = {
    name: "Valdris the Dark",
    level: 47,
    health: 875,
    maxHealth: 1200,
    mana: 420,
    maxMana: 650,
    stamina: 95,
    maxStamina: 150,
    image: "https://images.unsplash.com/photo-1727077857780-0927525f03cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ290aGljJTIwcG9ydHJhaXQlMjB3YXJyaW9yfGVufDF8fHx8MTc3NjIxNjkxOHww&ixlib=rb-4.1.0&q=80&w=1080"
  };

  // Inventory data
  const inventoryItems = [
    { id: 1, name: "Cursed Blade", rarity: 'legendary' as const, image: "https://images.unsplash.com/photo-1757083840090-17a7bfca08c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMHN3b3JkJTIwd2VhcG9ufGVufDF8fHx8MTc3NjE5ODQzNXww&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 2, name: "Health Potion", rarity: 'common' as const, image: "https://images.unsplash.com/photo-1730266854063-09582ab8bbdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwcG90aW9uJTIwYm90dGxlfGVufDF8fHx8MTc3NjIxNjkxOXww&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 3, name: "Dark Helmet", rarity: 'epic' as const, image: "https://images.unsplash.com/photo-1596716148130-f95f2b735a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGFybW9yJTIwaGVsbWV0fGVufDF8fHx8MTc3NjIwOTMzOXww&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 4, name: "Soul Crystal", rarity: 'rare' as const, image: "https://images.unsplash.com/photo-1645406764516-e047162e1884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdpYyUyMGNyeXN0YWwlMjBnZW18ZW58MXx8fHwxNzc2MjE2OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 5, name: "Mana Potion", rarity: 'common' as const, image: "https://images.unsplash.com/photo-1730266854063-09582ab8bbdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwcG90aW9uJTIwYm90dGxlfGVufDF8fHx8MTc3NjIxNjkxOXww&ixlib=rb-4.1.0&q=80&w=1080" },
  ];

  // Quest data
  const quests = [
    {
      id: 1,
      title: "The Shadow King's Return",
      description: "Defeat the Shadow King in the depths of the Obsidian Citadel",
      progress: 3,
      maxProgress: 5,
      type: 'main' as const
    },
    {
      id: 2,
      title: "Collect Ancient Artifacts",
      description: "Gather 10 ancient artifacts from the ruins",
      progress: 7,
      maxProgress: 10,
      type: 'side' as const
    },
    {
      id: 3,
      title: "Rescue the Lost Souls",
      description: "Free the imprisoned souls from the necromancer's dungeon",
      progress: 5,
      maxProgress: 12,
      type: 'side' as const
    }
  ];

  // Action bar abilities
  const actions = [
    { id: 1, name: "Shadow Strike", icon: <Sword className="w-6 h-6" />, cooldown: 0, hotkey: "1" },
    { id: 2, name: "Dark Shield", icon: <Shield className="w-6 h-6" />, cooldown: 45, hotkey: "2" },
    { id: 3, name: "Inferno Blast", icon: <Flame className="w-6 h-6" />, cooldown: 0, hotkey: "3" },
    { id: 4, name: "Soul Drain", icon: <Sparkles className="w-6 h-6" />, cooldown: 70, hotkey: "4" },
    { id: 5, name: "Vampiric Touch", icon: <Heart className="w-6 h-6" />, cooldown: 0, hotkey: "5" },
    { id: 6, name: "Lightning Bolt", icon: <Zap className="w-6 h-6" />, cooldown: 30, hotkey: "6" },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 p-6 overflow-auto">
      {/* Atmospheric background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top bar */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Crown className="w-8 h-8 text-amber-500" />
            <h1 className="text-3xl text-amber-100 tracking-wider drop-shadow-lg">
              Realm of Shadows
            </h1>
          </div>
          <div className="flex items-center gap-4 bg-black/60 border-2 border-amber-700/50 rounded-lg px-6 py-3 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Coins className="w-5 h-5 text-amber-400" />
              <span className="text-amber-200">12,847</span>
            </div>
          </div>
        </div>

        {/* Main game area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Left column - Character */}
          <div className="relative">
            <CharacterPanel
              characterImage={character.image}
              name={character.name}
              level={character.level}
              health={character.health}
              maxHealth={character.maxHealth}
              mana={character.mana}
              maxMana={character.maxMana}
              stamina={character.stamina}
              maxStamina={character.maxStamina}
            />
          </div>

          {/* Center column - Main view placeholder */}
          <div className="lg:col-span-1">
            <div className="bg-black/40 border-2 border-amber-700/30 rounded-lg p-8 backdrop-blur-sm shadow-2xl h-full min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 border-4 border-dashed border-amber-700/30 rounded-full flex items-center justify-center">
                  <Sword className="w-12 h-12 text-amber-700/50" />
                </div>
                <p className="text-amber-700/50 text-sm">Game View Area</p>
                <p className="text-gray-600 text-xs mt-2">Main gameplay renders here</p>
              </div>
            </div>
          </div>

          {/* Right column - Quests */}
          <div className="relative">
            <QuestPanel quests={quests} />
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Inventory */}
          <div className="lg:col-span-2 relative">
            <InventoryPanel items={inventoryItems} slots={20} />
          </div>

          {/* Stats or additional panel */}
          <div className="bg-black/60 border-2 border-amber-700/50 rounded-lg p-4 backdrop-blur-sm shadow-2xl">
            <h3 className="text-amber-100 tracking-wider mb-4 pb-2 border-b border-amber-700/30">
              Character Stats
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Strength</span>
                <span className="text-red-400">124</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Intelligence</span>
                <span className="text-blue-400">98</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Dexterity</span>
                <span className="text-green-400">87</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Vitality</span>
                <span className="text-amber-400">110</span>
              </div>
              <div className="flex justify-between border-t border-amber-700/30 pt-2 mt-3">
                <span className="text-gray-400">Armor</span>
                <span className="text-gray-300">342</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Critical Hit</span>
                <span className="text-gray-300">23%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-6 relative">
          <ActionBar actions={actions} />
        </div>
      </div>
    </div>
  );
}
