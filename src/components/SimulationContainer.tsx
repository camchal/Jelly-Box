import SimulationCanvas from './SimulationCanvas.tsx';

interface SimulationContainerProps {
  NumParticles: number;
  ParticleSize: number;
}
const SimulationContainer = (props: SimulationContainerProps) => {
  return (
    <>
      <SimulationCanvas
        height={400}
        width={800}
        draw={() => {}}
      ></SimulationCanvas>
    </>
  );
};
export default SimulationContainer;
