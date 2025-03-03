import styled from 'styled-components';
import SimulationContainer from './SimulationContainer';

const StyledSimulationBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
  width: 80%;
`;
const SimluationBoard = () => {
  return (
    <StyledSimulationBoard>
      <h1>Simulation Board</h1>
      <div>Simulation Board Content</div>
      <SimulationContainer
        NumParticles={5}
        ParticleSize={1}
      ></SimulationContainer>
    </StyledSimulationBoard>
  );
};
export default SimluationBoard;
