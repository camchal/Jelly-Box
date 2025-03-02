import styled from 'styled-components';

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
    </StyledSimulationBoard>
  );
};
export default SimluationBoard;
