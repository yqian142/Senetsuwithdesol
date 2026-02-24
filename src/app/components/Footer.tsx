export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 px-6 border-t-2 border-neutral-900">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-8">
          {/* Left column - About */}
          <div className="col-span-4">
            <h3 className="text-2xl font-black mb-4">DESOL</h3>
            <p className="text-xs leading-relaxed text-neutral-400 mb-4">
              ゲームアートプロデューサーとして、実存主義をテーマにした砂漠サバイバルゲーム「DESOL」の視覚開発を担当。制作パイプライン構築からチーム管理まで全体を統括。
            </p>
            <div className="flex gap-2">
              <div className="border border-white px-2 py-1 text-[10px] font-bold">2024-2025</div>
              <div className="border border-white px-2 py-1 text-[10px] font-bold">ART PD</div>
            </div>
          </div>

          {/* Middle column - Quick links */}
          <div className="col-span-4">
            <h4 className="text-sm font-bold mb-4">クイックリンク</h4>
            <nav className="grid grid-cols-2 gap-2 text-xs">
              <a href="#visual" className="hover:underline text-neutral-400">ビジュアル進化</a>
              <a href="#workflow" className="hover:underline text-neutral-400">ワークフロー</a>
              <a href="#metrics" className="hover:underline text-neutral-400">成果指標</a>
              <a href="#pipeline" className="hover:underline text-neutral-400">パイプライン</a>
              <a href="#" className="hover:underline text-neutral-400">主要成果</a>
              <a href="#" className="hover:underline text-neutral-400">制作課題</a>
            </nav>
          </div>

          {/* Right column - Contact */}
          <div className="col-span-4">
            <h4 className="text-sm font-bold mb-4">お問い合わせ</h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <p>本ポートフォリオに関するお問い合わせ、</p>
              <p>または採用に関するご相談は</p>
              <p>こちらまでご連絡ください。</p>
              <div className="mt-4 pt-4 border-t border-neutral-700">
                <p className="font-bold text-white">portfolio@example.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-700 pt-6 flex items-center justify-between">
          <p className="text-[10px] text-neutral-500">
            © 2024-2025 DESOL Game Art Production Case Study. Portfolio for game industry application.
          </p>
          <div className="flex gap-4 text-[10px] text-neutral-500">
            <span>日本語版</span>
            <span className="border-l border-neutral-700 pl-4">Last updated: Feb 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}