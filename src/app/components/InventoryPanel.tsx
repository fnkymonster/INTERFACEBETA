import { Package } from 'lucide-react';

interface InventoryItem {
  id: number;
  name: string;
  image?: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface InventoryPanelProps {
  items: (InventoryItem | null)[];
  slots: number;
}

export function InventoryPanel({ items, slots }: InventoryPanelProps) {
  const rarityColors = {
    common: 'border-gray-500 shadow-gray-500/30',
    rare: 'border-blue-500 shadow-blue-500/50',
    epic: 'border-purple-500 shadow-purple-500/50',
    legendary: 'border-amber-500 shadow-amber-500/70',
  };

  const inventorySlots = Array.from({ length: slots }, (_, i) => items[i] || null);

  return (
    <div className="bg-black/60 border-2 border-amber-700/50 rounded-lg p-4 backdrop-blur-sm shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-amber-700/30">
        <Package className="w-5 h-5 text-amber-400" />
        <h3 className="text-amber-100 tracking-wider">Inventory</h3>
      </div>

      {/* Inventory Grid */}
      <div className="grid grid-cols-5 gap-2">
        {inventorySlots.map((item, index) => (
          <div
            key={index}
            className={`
              aspect-square bg-black/40 border-2 rounded
              ${item ? rarityColors[item.rarity] : 'border-gray-800/50'}
              flex items-center justify-center
              hover:bg-black/20 transition-all cursor-pointer
              relative group
            `}
          >
            {item ? (
              <>
                {item.image && (
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover rounded"
                  />
                )}
                {/* Tooltip on hover */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black/90 border border-amber-600 rounded px-2 py-1 text-xs text-amber-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  {item.name}
                </div>
              </>
            ) : (
              <div className="w-6 h-6 border-2 border-dashed border-gray-700/30 rounded"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
