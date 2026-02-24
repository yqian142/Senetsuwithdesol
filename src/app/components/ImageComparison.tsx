import { useState, useRef } from 'react';

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function ImageComparison({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "以前", 
  afterLabel = "現在" 
}: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleStart = () => setIsDragging(true);
  const handleEnd = () => setIsDragging(false);

  return (
    <div 
      ref={containerRef}
      className="relative w-full border-2 border-neutral-900 overflow-hidden select-none cursor-ew-resize bg-neutral-100"
      style={{ minHeight: '300px' }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
    >
      {/* After Image (bottom layer) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={afterImage}
          alt="After"
          className="max-w-full max-h-full object-contain grayscale"
        />
        <div className="absolute top-3 right-3 bg-neutral-900 text-white border border-neutral-900 px-3 py-1 text-xs font-bold">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (top layer with clip) */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="max-w-full max-h-full object-contain grayscale"
        />
        <div className="absolute top-3 left-3 bg-white border border-neutral-900 px-3 py-1 text-xs font-bold">
          {beforeLabel}
        </div>
      </div>

      {/* Slider */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-neutral-900 cursor-ew-resize z-10"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        {/* Slider handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-neutral-900 rounded-full flex items-center justify-center">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-3 bg-neutral-900"></div>
            <div className="w-0.5 h-3 bg-neutral-900"></div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 border border-neutral-900 px-2 py-1 text-[10px] font-bold">
        ← ドラッグして比較 →
      </div>
    </div>
  );
}