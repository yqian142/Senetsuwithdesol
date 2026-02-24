import discordImage from 'figma:asset/67d853c93127c9be324e77f888dbe39b3144d8ab.png';
import miroImage from 'figma:asset/83a877abac8bcd57786b7770d77b9768afa9da22.png';
import notionImage from 'figma:asset/cc25b46064d261a70fa579b429a0b9146c563f45.png';
import githubImage from 'figma:asset/e24c1af366f918ac7b48bb5c51bfa6b8a1ee11dd.png';
import googleDriveImage from 'figma:asset/527dfe7cd5d69a9e93b0a4af97a694c94568c3e8.png';

export function CollaborationTools() {
  const tools = [
    {
      category: "情報共有",
      items: [
        { 
          name: "Discord", 
          description: "日常的なコミュニケーション、クイックな情報交換",
          image: discordImage
        },
        { name: "Zoom", description: "定例会議、リモートミーティング、画面共有" }
      ]
    },
    {
      category: "意思決定整理",
      items: [
        { 
          name: "Miro", 
          description: "ブレインストーミング、アイデア整理、ビジュアル思考",
          image: miroImage
        }
      ]
    },
    {
      category: "運営ハブ",
      items: [
        { 
          name: "Notion", 
          description: "タスク分解・進捗管理・議事録管理を統合した運営ハブとして設計",
          image: notionImage
        }
      ]
    },
    {
      category: "開発基盤",
      items: [
        { 
          name: "GitHub", 
          description: "バージョン管理およびチーム共同開発基盤",
          image: githubImage
        }
      ]
    },
    {
      category: "ドキュメント管理",
      items: [
        { 
          name: "Google Drive", 
          description: "ドキュメント管理および共有基盤",
          image: googleDriveImage
        }
      ]
    }
  ];

  return (
    <section id="tools" className="py-24 px-6 border-t-2 border-neutral-900 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="mb-16">
          <h2 className="text-[140px] leading-[0.85] font-black tracking-tighter">
            協働ツール
          </h2>
          <div className="h-1 w-32 bg-neutral-900 mt-6"></div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Discord - Large Card */}
          <div className="border-2 border-neutral-900 overflow-hidden bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="aspect-video overflow-hidden">
              <img 
                src={discordImage} 
                alt="Discord" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-xs bg-neutral-900 text-white inline-block px-3 py-1 font-bold mb-3">
                情報共有
              </div>
              <h3 className="text-2xl font-black mb-2">Discord</h3>
              <p className="text-sm leading-relaxed">
                日常的なコミュニケーション、クイックな情報交換
              </p>
            </div>
          </div>

          {/* Zoom - Small Text Card */}
          <div className="border-2 border-neutral-900 p-8 bg-neutral-900 text-white flex flex-col justify-center hover:bg-neutral-800 transition-colors">
            <div className="text-xs text-white/60 font-bold mb-3">
              情報共有
            </div>
            <h3 className="text-3xl font-black mb-3">Zoom</h3>
            <p className="text-sm leading-relaxed text-white/80">
              定例会議、リモートミーティング、画面共有
            </p>
          </div>

          {/* Miro - Large Card */}
          <div className="border-2 border-neutral-900 overflow-hidden bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all md:col-span-2">
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto overflow-hidden">
                <img 
                  src={miroImage} 
                  alt="Miro" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="text-xs bg-neutral-900 text-white inline-block px-3 py-1 font-bold mb-4 w-fit">
                  意思決定整理
                </div>
                <h3 className="text-3xl font-black mb-3">Miro</h3>
                <p className="text-sm leading-relaxed">
                  ブレインストーミング、アイデア整理、ビジュアル思考
                </p>
              </div>
            </div>
          </div>

          {/* Notion - Large Card */}
          <div className="border-2 border-neutral-900 overflow-hidden bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="aspect-video overflow-hidden">
              <img 
                src={notionImage} 
                alt="Notion" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-xs bg-neutral-900 text-white inline-block px-3 py-1 font-bold mb-3">
                運営ハブ
              </div>
              <h3 className="text-2xl font-black mb-2">Notion</h3>
              <p className="text-sm leading-relaxed">
                タスク分解・進捗管理・議事録管理を統合した運営ハブとして設計
              </p>
            </div>
          </div>

          {/* GitHub - Large Card */}
          <div className="border-2 border-neutral-900 overflow-hidden bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="aspect-video overflow-hidden">
              <img 
                src={githubImage} 
                alt="GitHub" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-xs bg-neutral-900 text-white inline-block px-3 py-1 font-bold mb-3">
                開発基盤
              </div>
              <h3 className="text-2xl font-black mb-2">GitHub</h3>
              <p className="text-sm leading-relaxed">
                バージョン管理およびチーム共同開発基盤
              </p>
            </div>
          </div>

          {/* Google Drive - Full Width Card */}
          <div className="border-2 border-neutral-900 overflow-hidden bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all md:col-span-2">
            <div className="grid md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center order-2 md:order-1">
                <div className="text-xs bg-neutral-900 text-white inline-block px-3 py-1 font-bold mb-4 w-fit">
                  ドキュメント管理
                </div>
                <h3 className="text-3xl font-black mb-3">Google Drive</h3>
                <p className="text-sm leading-relaxed">
                  ドキュメント管理および共有基盤
                </p>
              </div>
              <div className="aspect-video md:aspect-auto overflow-hidden order-1 md:order-2">
                <img 
                  src={googleDriveImage} 
                  alt="Google Drive" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}