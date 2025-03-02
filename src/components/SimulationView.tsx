import SimluationBoard from './SImulationBoard';
import styled from 'styled-components';

const SimulationViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SimulationView = () => {
  return (
    <SimulationViewWrapper>
      <SimluationBoard></SimluationBoard>
    </SimulationViewWrapper>
  );
};
export default SimulationView;
