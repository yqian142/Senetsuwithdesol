import image_0d0ea55ac0c1830ea57aa0fa1ebeb9be5d0a36af from 'figma:asset/0d0ea55ac0c1830ea57aa0fa1ebeb9be5d0a36af.png'
import image_52fa086d66af2821b82f2a62afbdc0143e9ae468 from 'figma:asset/52fa086d66af2821b82f2a62afbdc0143e9ae468.png'
import image_5025a8148dce9b911b2ebd8cb8ef4898142748aa from 'figma:asset/5025a8148dce9b911b2ebd8cb8ef4898142748aa.png'
import image_0eba60167956fd4a3586713c381dc9cf7b175b66 from 'figma:asset/0eba60167956fd4a3586713c381dc9cf7b175b66.png'
import image_e36278977716e6f3f38a016b62af50a8d3d4a878 from 'figma:asset/e36278977716e6f3f38a016b62af50a8d3d4a878.png'
import image_bfa37cefdacd269e734ae50b7f2e089e6f5f2e49 from 'figma:asset/bfa37cefdacd269e734ae50b7f2e089e6f5f2e49.png'
import { ImageComparison } from './ImageComparison';

export function VisualEvolution() {
  return (
    <section id="visual" className="py-12 px-6 border-t-2 border-neutral-900 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header - Compact */}
        <div className="mb-8">
          <div className="grid grid-cols-12 gap-8 items-center border-b-2 border-neutral-900 pb-8">
            {/* Title */}
            <div className="col-span-5">
              <h2 className="text-[64px] leading-[1.0] font-black tracking-tighter">ビジュアル進化</h2>
            </div>
            
            {/* Description */}
            <div className="col-span-7">
              <div className="border-l-4 border-neutral-900 pl-6">
                <h3 className="text-base mb-3 font-bold tracking-wide">視覚表現の統一 / VISUAL EVOLUTION</h3>
                <p className="text-sm leading-relaxed text-neutral-700">Directorのビジュアルビジョン（カートゥーンレンダリング）を構造化・共有化し、制作指針として確立。アセット制作およびShader設計の起点を設計した。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout - Before (1) + Now (2 in one box) */}
        <div className="grid grid-cols-2 gap-4">
          {/* Before - Single Image */}
          <div className="bg-neutral-100 border-2 border-neutral-900 p-2">
            <div className="mb-2 pb-1 border-b border-neutral-300">
              <h3 className="text-[10px] font-black tracking-widest">以前 / PREVIOUS</h3>
            </div>
            <img 
              src={image_5025a8148dce9b911b2ebd8cb8ef4898142748aa}
              alt="Previous visual style"
              className="w-full h-64 object-contain block"
            />
          </div>

          {/* Now - Two Images in One Box */}
          <div className="bg-neutral-900 border-2 border-neutral-900 p-2">
            <div className="mb-2 pb-1 border-b border-neutral-700">
              <h3 className="text-[10px] font-black tracking-widest text-white">現在 / NOW</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <img 
                src={image_0eba60167956fd4a3586713c381dc9cf7b175b66}
                alt="Current visual style 1"
                className="w-full h-64 object-cover block"
              />
              <img 
                src={image_52fa086d66af2821b82f2a62afbdc0143e9ae468}
                alt="Current visual style 2"
                className="w-full h-64 object-cover block"
              />
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}