import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VisualEvolution } from './components/VisualEvolution';
import { Pipeline } from './components/Pipeline';
import { ProductionChallenges } from './components/ProductionChallenges';
import { CollaborationTools } from './components/CollaborationTools';
import { KeyAchievements } from './components/KeyAchievements';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <Hero />
      <VisualEvolution />
      <Pipeline />
      <ProductionChallenges />
      <CollaborationTools />
      <KeyAchievements />
    </div>
  );
}
