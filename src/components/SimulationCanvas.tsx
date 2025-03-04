import { useRef, useEffect } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  border: 1px solid #ccc;
  display: inline-block;
`;

// Style the canvas element
const StyledCanvas = styled.canvas`
  background-color: #f0f0f0;
  cursor: pointer;
`;

interface SimulationCanvasProps {
  draw: (params: any) => void;
  width: number;
  height: number;
}

const SimulationCanvas = (props: SimulationCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { draw, width, height } = props;
  const canvas = canvasRef.current;
  if (!canvas) return; //typescript typeshit

  // const draw = context => {
  //   // Insert your code to draw an image
  // };
  // also, he has this code ^  outside the parent component, but id ont really know what the
  // difference between the context its using vs the context that draw() will use in the use effect below

  useEffect(() => {
    const context = canvas.getContext('2d');
    if (!context) return;
    // i dont really know how it knows what to draw, or if cleanup is needed?
    draw(context);
  }, []);
  return (
    <CanvasContainer>
      <StyledCanvas ref={canvasRef} width={width} height={height} />
    </CanvasContainer>
  );
};
export default SimulationCanvas;
