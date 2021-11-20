import React from 'react';
import KanjiCharWrapper from './layout/KanjiCharWrapper/KanjiCharWrapper';
import Sidebar from './layout/Sidebar/Sidebar';
import ReviewProvider from './context/Review.context';

const App = () => {
  return (
    <>
      <ReviewProvider>
        <Sidebar />
        <KanjiCharWrapper />
      </ReviewProvider>
    </>
  );
};

export default App;
