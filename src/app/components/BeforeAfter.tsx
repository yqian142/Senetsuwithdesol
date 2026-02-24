'use client';

import { useState } from 'react';

export function BeforeAfter() {
  const [activeTab, setActiveTab] = useState<'previous' | 'now'>('previous');

  const previousData = {
    title: 'Previous',
    subtitle: '参加前の状態',
    points: [
      '統一感のないアートディレクション',
      '世界観の表現が曖昧',
      'ビジュアルアイデンティティの欠如',
      'テクニカルアートのワークフロー未確立',
    ],
  };

  const nowData = {
    title: 'Now',
    subtitle: 'Art Producerとしての成果',
    points: [
      '統一されたビジュアルランゲージの確立',
      '「実存主義×無機×自由意志」を体現するアートディレクション',
      '一貫性のあるカラーパレットとライティング設計',
      '最適化されたアセットパイプラインの構築',
      'クリエイティブチーム全体の生産性向上',
    ],
  };

  const activeData = activeTab === 'previous' ? previousData : nowData;

  return (
    <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto border-t border-neutral-900/10">
      <div className="text-center mb-24">
        <h2 className="text-6xl md:text-7xl mb-4 tracking-tight">
          成果の可視化
        </h2>
        <p className="text-sm tracking-[0.3em] text-neutral-500">
          BEFORE & AFTER
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-24">
        <div className="inline-flex border border-neutral-900/20">
          <button
            onClick={() => setActiveTab('previous')}
            className={`px-16 py-6 text-lg tracking-wider transition-all duration-300 ${
              activeTab === 'previous'
                ? 'bg-neutral-900 text-stone-50'
                : 'bg-transparent text-neutral-400 hover:text-neutral-900'
            }`}
          >
            Previous
          </button>
          <button
            onClick={() => setActiveTab('now')}
            className={`px-16 py-6 text-lg tracking-wider transition-all duration-300 ${
              activeTab === 'now'
                ? 'bg-neutral-900 text-stone-50'
                : 'bg-transparent text-neutral-400 hover:text-neutral-900'
            }`}
          >
            Now
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <h3 className="text-5xl mb-4 tracking-tight">{activeData.title}</h3>
          <p className="text-sm tracking-wider text-neutral-500">{activeData.subtitle}</p>
        </div>

        <div className="md:col-span-8 space-y-6">
          {activeData.points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-6 text-lg leading-loose border-b border-neutral-900/10 pb-6"
            >
              <span className="text-neutral-400 text-sm mt-1">0{index + 1}</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>

      {activeTab === 'now' && (
        <div className="mt-24 p-12 border border-neutral-900/10 max-w-3xl">
          <div className="text-xs tracking-[0.3em] text-neutral-500 mb-4">
            KEY ACHIEVEMENTS
          </div>
          <div className="text-lg leading-loose">
            世界観に深みを与え、プレイヤーの没入感を大幅に向上させるビジュアルデザインを実現しました。
          </div>
        </div>
      )}
    </section>
  );
}