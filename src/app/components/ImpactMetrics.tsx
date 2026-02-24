interface MetricCardProps {
  value: string;
  label: string;
  change?: string;
  border?: boolean;
}

function MetricCard({ value, label, change, border = true }: MetricCardProps) {
  return (
    <div className={`${border ? 'border-2 border-neutral-900' : ''} p-4 flex flex-col hover:bg-neutral-50 transition-colors`}>
      <div className="text-5xl font-black leading-none mb-2">{value}</div>
      <div className="text-xs font-bold mb-1">{label}</div>
      {change && (
        <div className="text-[10px] bg-neutral-900 text-white px-2 py-0.5 inline-block self-start">
          {change}
        </div>
      )}
    </div>
  );
}

export function ImpactMetrics() {
  return (
    <section id="metrics" className="py-12 px-6 border-t-2 border-neutral-900">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Left column - Title */}
          <div className="col-span-3">
            <h2 className="text-[110px] leading-[0.9] font-black tracking-tighter mb-6">
              成果<br />指標
            </h2>
            <div className="mt-6 border-t-2 border-neutral-900 pt-4">
              <h3 className="text-sm mb-2 font-bold">Impact Metrics / 影響測定</h3>
              <p className="text-xs leading-relaxed">
                PDとして担当した期間における具体的な成果指標。ワークフロー改善、アセット品質向上、チーム生産性の数値化。
              </p>
            </div>
          </div>

          {/* Right column - Metrics grid */}
          <div className="col-span-9">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <MetricCard
                value="67%"
                label="制作時間短縮"
                change="↓ 改善"
              />
              <MetricCard
                value="2.4×"
                label="アセット品質"
                change="↑ 向上"
              />
              <MetricCard
                value="100%"
                label="命名規則統一"
                change="新規導入"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <MetricCard
                value="42"
                label="外注パートナー管理"
                change="6社 → 42案件"
              />
              <MetricCard
                value="89%"
                label="一発OK率"
                change="↑ +54%"
              />
            </div>

            {/* Visual comparison bar */}
            <div className="border-2 border-neutral-900 p-6">
              <h4 className="text-xs font-bold mb-4">ファイルサイズ最適化 / File Size Optimization</h4>
              
              <div className="space-y-4">
                {/* Before bar */}
                <div>
                  <div className="flex justify-between text-[10px] mb-1 font-bold">
                    <span>以前（平均）</span>
                    <span>8.4 MB</span>
                  </div>
                  <div className="h-8 bg-neutral-900 w-full"></div>
                </div>

                {/* After bar */}
                <div>
                  <div className="flex justify-between text-[10px] mb-1 font-bold">
                    <span>現在（平均）</span>
                    <span>2.1 MB</span>
                  </div>
                  <div className="h-8 bg-neutral-900" style={{ width: '25%' }}></div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-neutral-900 text-[10px] font-bold">
                結果：ロード時間 75% 短縮、メモリ使用量 60% 削減
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}