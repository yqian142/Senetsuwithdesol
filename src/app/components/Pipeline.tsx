import image_cc8a961a8c08f9633f444f76fecec9a640ded8bf from 'figma:asset/cc8a961a8c08f9633f444f76fecec9a640ded8bf.png'
export function Pipeline() {
  // Swimlane-style pipeline with non-overlapping nodes (vertical rows within lanes)
  const pipelineFlow = {
    lanes: [
      { 
        role: 'Art',
        nodes: [
          { title: 'キャラクター設計', position: 8, row: 0 },
          { title: 'コンセプトアート', position: 18, row: 1 },
          { title: 'モデリング', position: 32, row: 0 },
          { title: 'テクスチャリング', position: 45, row: 1 },
          { title: 'リギング', position: 58, row: 0 },
          { title: 'ライティング', position: 73, row: 1 },
          { title: '最終調整', position: 88, row: 0 }
        ]
      },
      { 
        role: 'Design',
        nodes: [
          { title: 'ゲームプレイ設計', position: 10, row: 1 },
          { title: 'レベルデザイン', position: 22, row: 0 },
          { title: 'UI/UX実装', position: 38, row: 1 },
          { title: 'バランス調整', position: 52, row: 0 },
          { title: 'プレイテスト', position: 75, row: 0 },
          { title: 'バグ修正', position: 85, row: 1 }
        ]
      },
      { 
        role: 'Engineer',
        nodes: [
          { title: '技術検証', position: 12, row: 0 },
          { title: 'パイプライン構築', position: 20, row: 1 },
          { title: '機能実装', position: 35, row: 0 },
          { title: 'ツール開発', position: 42, row: 1 },
          { title: '最適化', position: 55, row: 0 },
          { title: '統合テスト', position: 72, row: 1 },
          { title: 'ビルド', position: 92, row: 0 }
        ]
      }
    ],
    stages: [
      { name: 'Planning', start: 0, end: 30 },
      { name: 'Production', start: 30, end: 70 },
      { name: 'Integration', start: 70, end: 100 }
    ]
  };

  return (
    <section id="pipeline" className="py-16 px-6 border-t-2 border-neutral-900 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 border-b-2 border-neutral-900 pb-8">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Dramatic Title */}
            <div className="col-span-5">
              <h2 className="text-[64px] leading-[1.0] font-black tracking-tighter">
                制作パイプライン
              </h2>
            </div>

            {/* Description */}
            <div className="col-span-7">
              <div className="border-l-4 border-neutral-900 pl-6">
                <h3 className="text-base mb-3 font-bold tracking-wide">パイプライン設計 / PRODUCTION PIPELINE</h3>
                <p className="text-sm leading-relaxed text-neutral-700">Art・Design・Engineerの三部門が並行推進する制作フローを構築。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left column - Key Points */}
          <div className="col-span-4">
            <div className="border-2 border-neutral-900 p-6 bg-white">
              <h3 className="text-base mb-4 font-black tracking-wide">主要ポイント / KEY POINTS</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3 pb-3 border-b border-neutral-300">
                  <span className="font-bold">01</span>
                  <span>並行作業による効率化</span>
                </li>
                <li className="flex items-start gap-3 pb-3 border-b border-neutral-300">
                  <span className="font-bold">02</span>
                  <span>タスク間の柔軟な連携</span>
                </li>
                <li className="flex items-start gap-3 pb-3 border-b border-neutral-300">
                  <span className="font-bold">03</span>
                  <span>フェーズ凍結による変更波及制御</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">04</span>
                  <span>二段階検証設計による収束効率向上</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - Pipeline Visualization */}
          <div className="col-span-8">
            <div className="border-2 border-neutral-900 p-6 bg-white">
              <h3 className="text-base mb-4 font-black tracking-wide">制作フロー全体像 / PRODUCTION FLOW</h3>
              
              {/* Pipeline Image Container */}
              <div className="border-2 border-neutral-900 overflow-hidden bg-neutral-50">
                <img 
                  src={image_cc8a961a8c08f9633f444f76fecec9a640ded8bf}
                  alt="Production Pipeline Flow Chart"
                  className="w-full h-auto"
                  style={{ aspectRatio: '1206/742' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}