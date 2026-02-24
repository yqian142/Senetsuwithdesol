export function Workflow() {
  return (
    <section id="workflow" className="py-12 px-6 border-t-2 border-neutral-900">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <h2 className="text-[90px] leading-[0.9] mb-8 font-black tracking-tighter">日常的なワークフロー</h2>
          </div>

          <div className="col-span-6 border-2 border-neutral-900 relative aspect-video">
            <img
              src="https://images.unsplash.com/photo-1610829729163-d06a8140338a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBtaW5pbWFsaXN0JTIwYmxhY2slMjB3aGl0ZXxlbnwxfHx8fDE3NzE5MjgxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Discord workflow"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute top-4 left-4 bg-white border border-neutral-900 px-3 py-1 text-xs font-bold">
              01 / Discord
            </div>
          </div>

          <div className="col-span-6 p-6 border-2 border-neutral-900 flex flex-col justify-center">
            <h3 className="text-sm mb-3 font-bold">デイリースタンドアップ</h3>
            <p className="text-xs leading-relaxed">すべて外動画の証を動認証することタスク開証、課題を報告し、管体影ます。</p>
          </div>

          <div className="col-span-6 border-2 border-neutral-900 relative aspect-video">
            <img
              src="https://images.unsplash.com/photo-1641587172389-690c701cb8f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kJTIwdGV4dHVyZSUyMG1vbm9jaHJvbWV8ZW58MXx8fHwxNzcxOTI4MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Notion workflow"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute top-4 left-4 bg-white border border-neutral-900 px-3 py-1 text-xs font-bold">
              02 / Notion
            </div>
          </div>

          <div className="col-span-6 p-6 border-2 border-neutral-900 flex flex-col justify-center">
            <h3 className="text-sm mb-3 font-bold">タスク管理と文書化</h3>
            <p className="text-xs leading-relaxed">Notionを動プロセット開証、そンスクダイ、外動証しプロた。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
