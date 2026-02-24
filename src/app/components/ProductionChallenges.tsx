export function ProductionChallenges() {
  return (
    <section id="workflow" className="py-16 px-6 border-t-2 border-neutral-900">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Left column - Large Title */}
          <div className="col-span-4">
            <h2 className="text-[120px] leading-[0.9] font-black tracking-tighter mb-8">
              制作<br />課題
            </h2>
            
          </div>

          {/* Right column - Challenge Cards */}
          <div className="col-span-8 space-y-4">
            {/* Challenge 1 */}
            <div className="border-2 border-neutral-900 p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 border-2 border-neutral-900 bg-neutral-900 text-white flex items-center justify-center shrink-0 font-black">
                  1
                </div>
                <h3 className="text-lg font-black flex-1">コミュニケーションギャップ</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs bg-neutral-900 text-white inline-block px-3 py-1 mb-3 font-bold">課題</div>
                  <p className="text-xs leading-relaxed">部門間の認識差により、ArtとEngineerの協力が難しく、Directorの修正指示も感覚的になりやすい状況があった。</p>
                </div>
                <div>
                  <div className="text-xs bg-neutral-900 text-white inline-block px-3 py-1 mb-3 font-bold">解決策</div>
                  <p className="text-xs leading-relaxed">部門間の橋渡し役として、感覚的評価を具体的な修正指標へ言語化・構造化</p>
                </div>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="border-2 border-neutral-900 p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 border-2 border-neutral-900 bg-neutral-900 text-white flex items-center justify-center shrink-0 font-black">
                  2
                </div>
                <h3 className="text-lg font-black flex-1">3D制作基盤の不在</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs bg-neutral-900 text-white inline-block px-3 py-1 mb-3 font-bold">課題</div>
                  <p className="text-xs leading-relaxed">アートチームは3Dゲーム制作未経験メンバーのみで構成されていた</p>
                </div>
                <div>
                  <div className="text-xs bg-neutral-900 text-white inline-block px-3 py-1 mb-3 font-bold">解決策</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-xs">•</span>
                      <span className="text-xs leading-relaxed">制作工程分解によるパイプライン設計</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xs">•</span>
                      <span className="text-xs leading-relaxed">Notionを活用した進行可視化管理の導入</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xs">•</span>
                      <span className="text-xs leading-relaxed">定例進行会議設計による進捗・課題共有体制の構築</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="border-2 border-neutral-900 p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 border-2 border-neutral-900 bg-neutral-900 text-white flex items-center justify-center shrink-0 font-black">
                  3
                </div>
                <h3 className="text-lg font-black flex-1">組織的拘束力のないプロジェクト体制</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs bg-neutral-900 text-white inline-block px-3 py-1 mb-3 font-bold">課題</div>
                  <p className="text-xs leading-relaxed">学校プロジェクトのため、メンバーの稼働率が一定せず、安定した制作体制の維持が困難な状況であった。</p>
                </div>
                <div>
                  <div className="text-xs bg-neutral-900 text-white inline-block px-3 py-1 mb-3 font-bold">解決策</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-xs">•</span>
                      <span className="text-xs leading-relaxed">教育粘性の高いコアメンバーを重点的に育成し、中核体制を構築する。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xs">•</span>
                      <span className="text-xs leading-relaxed">稼働が限定的なメンバーに対しては、タスクを細分化し要件を明確化することで、安定的な成果創出を図る。</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}