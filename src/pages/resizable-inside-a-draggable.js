import React, { useState, useEffect } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { getEmptyImage } from "react-dnd-html5-backend";
import { Resizable } from 'react-resizable';
import 'react-resizable/css/styles.css'

function ResizableItem({}) {
  const [width, setWidth] = useState(500);
  const handleResizeStart = (e, { size }) => {
    e.stopPropagation()
  }
  const handleResize = (e, { size }) => {
    e.stopPropagation()
    setWidth(size.width);
  }

  return (
    <Resizable
      width={width}
      height={100}
      axis={'x'}
      onResize={handleResize}
      onResizeStart={handleResizeStart}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <div style={{ height: 100, width, backgroundColor: '#76BBE9' }}>
        <p>Here is resizable item</p>
      </div>
    </Resizable>
  );
}

const DragItemType = Symbol();
function DragItem({}) {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: DragItemType },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  useEffect(() => {
    // preview(getEmptyImage());
  }, [])

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={drag} style={{ height: 200, backgroundColor: '#FABF83', opacity }}>
      <p>Here is a drag item</p>
      <ResizableItem />
    </div>
  )
}

function DropArea({}) {
  const defaultHint = {
    msg: 'Here is the drop area and nothing is over',
  }
  const [hint, setHint] = useState(defaultHint);

  const [{isOver}, drop] = useDrop({
    accept: DragItemType,
    drop(item, monitor) {
      console.log('dropItem:', item);
      return undefined
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  })

  useEffect(() => {
    if (isOver) {
      setHint({
        msg: 'something is over the drop area',
      });
    } else {
      setHint(defaultHint);
    }
  }, [isOver])

  return (
    <div ref={drop} style={{height: 300, backgroundColor: '#AFDDB6'}}>
      <p>{hint.msg}</p>
      <DragItem />
    </div>
  )
}

function Root({}) {
  return (
    <DndProvider backend={HTML5Backend}>
      <DropArea />
    </DndProvider>
  );
}

export default Root ;