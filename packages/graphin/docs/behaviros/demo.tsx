import React from 'react';
import Graphin, { Utils, Behaviors } from '@antv/graphin';

const data = Utils.mock(10)
  .circle()
  .graphin();
const layout = {
  type: 'grid',
};

const { DragCanvas, ZoomCanvas, DragNode } = Behaviors;
export default () => {
  return (
    <div>
      <Graphin data={data} layout={layout}>
        <DragCanvas direction="x" />
        <ZoomCanvas enableOptimize />
        <DragNode />
      </Graphin>
    </div>
  );
};
