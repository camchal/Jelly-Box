import SimulationCanvas from './SimulationCanvas.tsx';

interface SimulationContainerProps {
  NumParticles: number;
  ParticleSize: number;
}
const SimulationContainer = (props: SimulationContainerProps) => {
  return (
    <>
      <SimulationCanvas></SimulationCanvas>
    </>
  );
};
export default SimulationContainer;
