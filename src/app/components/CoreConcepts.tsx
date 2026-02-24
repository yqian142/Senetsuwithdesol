export function CoreConcepts() {
  const concepts = [
    {
      title: '実存主義',
      subtitle: 'Existentialism',
      description: '孤独な旅人として、自らの選択と存在の意味を問い続ける',
    },
    {
      title: '無機',
      subtitle: 'Inorganic',
      description: '生命を拒む砂漠の風景、失われた文明の静寂な残骸',
    },
    {
      title: '自由意志',
      subtitle: 'Free Will',
      description: 'すべての選択が運命を紡ぐ。進むべき道は、あなた自身が決める',
    },
  ];

  return (
    <section className="py-32 px-8 md:px-16 border-t border-neutral-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl mb-4 tracking-tight">
            三軸概念
          </h2>
          <p className="text-sm tracking-[0.3em] text-neutral-500">
            CORE CONCEPTS
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-neutral-900/10">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className="bg-stone-50 p-12 space-y-6"
            >
              <div className="text-xs tracking-[0.3em] text-neutral-500">
                {concept.subtitle}
              </div>
              <h3 className="text-4xl tracking-tight">{concept.title}</h3>
              <p className="text-base leading-loose text-neutral-600">
                {concept.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}