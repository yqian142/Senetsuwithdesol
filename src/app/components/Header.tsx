export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b-2 border-neutral-900 z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold">ゲームアートプロデューサー ポートフォリオ</span>
          <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
        </div>

        <nav className="flex items-center gap-6">
          <a 
            href="#visual" 
            className="text-xs font-bold border-b-2 border-transparent hover:border-neutral-900 transition-colors"
          >
            ビジュアル進化
          </a>
          <a 
            href="#pipeline" 
            className="text-xs font-bold border-b-2 border-transparent hover:border-neutral-900 transition-colors"
          >制作パイプライン</a>
          <a 
            href="#workflow" 
            className="text-xs font-bold border-b-2 border-transparent hover:border-neutral-900 transition-colors"
          >制作課題</a>
          <a 
            href="#tools" 
            className="text-xs font-bold border-b-2 border-transparent hover:border-neutral-900 transition-colors"
          >協働ツール</a>
          
        </nav>
      </div>
    </header>
  );
}