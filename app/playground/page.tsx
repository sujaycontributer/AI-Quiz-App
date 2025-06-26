// pages/playground.tsx
import { ScoreProvider } from "../components/ScoreProvider";
import Playground from "../components/PLayground";
export default function PlaygroundPage() {
  return (
    <ScoreProvider>
      <Playground />
    </ScoreProvider>
  );
}
