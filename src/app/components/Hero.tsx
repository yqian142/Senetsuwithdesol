import image_09d551eb334b32a7c2ade38f2a7e5c8cdc98924c from 'figma:asset/09d551eb334b32a7c2ade38f2a7e5c8cdc98924c.png'
export function Hero() {
  return (
    <section className="pt-24 pb-12 px-6 min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        {/* Top Title */}
        <div className="text-center mb-8">
          <h1 className="text-[100px] leading-none font-black tracking-tighter mb-3">
            DESOL
          </h1>
          <p className="text-xs tracking-widest font-bold mb-2">GAME ART PRODUCTION</p>
          <h2 className="text-xl tracking-wide font-bold">
            実存主義 × 無機 × 自由意志
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Game Cover (4666:3500 ratio) */}
          <div className="col-span-5">
            <div className="border-2 border-neutral-900 relative overflow-hidden" style={{ aspectRatio: '4666/3500' }}>
              {/* 替換成您的游戏封面图片 (推荐尺寸: 4666x3500) */}
              <img 
                src={image_09d551eb334b32a7c2ade38f2a7e5c8cdc98924c}
                alt="DESOL Game Cover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="col-span-7 space-y-6">
            {/* Core Achievement Highlight */}
            <div className="border-2 border-neutral-900 bg-neutral-900 p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-white border-2 border-white flex items-center justify-center shrink-0">
                  <span className="text-lg">★</span>
                </div>
                <h3 className="text-sm font-bold text-white">
                  コア成果 / CORE ACHIEVEMENT
                </h3>
              </div>
              <p className="text-base leading-relaxed text-white font-bold">
                未経験チームで3D制作体制を構築
              </p>
              <p className="text-xs leading-relaxed text-neutral-300 mt-2">3Dゲーム制作未経験7名の育成および制作パイプライン構築。</p>
            </div>

            {/* Production Details */}
            <div className="border-2 border-neutral-900 p-5">
              <h3 className="text-sm mb-4 font-bold border-b-2 border-neutral-900 pb-2">
                制作概要
              </h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-bold mb-1">開発期間</p>
                  <p>2025年9月 - 現在</p>
                </div>
                <div>
                  <p className="font-bold mb-1">現状</p>
                  <p>Alpha達成</p>
                </div>
                <div>
                  <p className="font-bold mb-1">開発引擎</p>
                  <p>Unity</p>
                </div>
                <div>
                  <p className="font-bold mb-1">担当役割</p>
                  <p>アートプロデューサー</p>
                </div>
                <div>
                  <p className="font-bold mb-1">プラットフォーム</p>
                  <p>PC</p>
                </div>
                <div>
                  <p className="font-bold mb-1">ジャンル</p>
                  <p>サバイバルアドベンチャー</p>
                </div>
                <div>
                  <p className="font-bold mb-1">チーム人数</p>
                  <p>31人</p>
                </div>
              </div>
            </div>

            {/* Game Description */}
            <div className="border-2 border-neutral-900 p-5">
              <h3 className="text-sm mb-3 font-bold border-b-2 border-neutral-900 pb-2">
                ゲーム概要
              </h3>
              <div className="text-xs leading-relaxed space-y-2">
                <p>
                  本作は、不気味な砂漠を舞台とするサバイバルアドベンチャーです。砂漠では、巨大な存在が静かに砂を動かし、世界の姿を変え続けています。
                </p>
                <p>
                  プレイヤーはもなき旅人。限られた命を抱え、無慈悲な世界をさまよいます。砂の下眠る失われた文明の痕跡をたどりながら人類が夢見る楽園「ウォーターパラダイス（Water Paradise）」を目指します。
                </p>
              </div>
            </div>

            {/* Core Concept */}
            <div className="border-2 border-neutral-900 p-5">
              <h3 className="text-sm mb-3 font-bold border-b-2 border-neutral-900 pb-2">
                コアコンセプト
              </h3>
              <div className="text-xs leading-relaxed">
                <p>
                  実存主義的な世界観の中で、無機質な砂漠と自由意志を持つプレイヤーの対比を描きます。この世界では、すべての選択に意味があり、一瞬たりとも無駄にはできません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}