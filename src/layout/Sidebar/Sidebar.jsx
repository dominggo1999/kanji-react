import React, { useContext, useRef } from 'react';
import { SidebarWrapper } from './Sidebar.style';

import { ReviewContext } from '../../context/Review.context';

const int = (val) => {
  const num = parseInt(val, 10);

  if(num) {
    return num;
  }

  return false;
};

const Sidebar = () => {
  const { changeRange } = useContext(ReviewContext);

  const startRef = useRef();
  const finishRef = useRef();

  const applyRange = (e) => {
    e.preventDefault();

    const s = int(startRef.current.value);
    const f = int(finishRef.current.value);

    if(s && f) {
      changeRange(s, f);
    }
  };

  return (
    <SidebarWrapper>
      <form onSubmit={applyRange}>
        <label htmlFor="start">Start</label>
        <input
          ref={startRef}
          name="start"
          type="number"
        />
        <label htmlFor="finish">Finish</label>
        <input
          ref={finishRef}
          name="finish"
          type="number"
        />
        <button type="submit">apply</button>
      </form>
    </SidebarWrapper>
  );
};

export default Sidebar;
