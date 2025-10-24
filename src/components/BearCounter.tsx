import { useBear } from '@/stores/useBear';

function BearCounter() {
  const bears = useBear((state) => state.bears);
  return <p>{bears} bears around here...</p>;
}

function Controls() {
  const increasePopulation = useBear((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}

export { BearCounter, Controls };
