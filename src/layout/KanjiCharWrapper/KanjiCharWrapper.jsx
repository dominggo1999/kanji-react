import React, { useContext } from 'react';
import {
  Wrapper, Char, Indicator, Control,
} from './KanjiCharWrap.style';
import { ReviewContext } from '../../context/Review.context';

const KanjiCharWrapper = () => {
  const {
    currentChar, list, order, nextOrder, shuffleList,
  } = useContext(ReviewContext);

  const totalCurrentCharList = list.length;

  return (
    <Wrapper>
      <Char>
        {currentChar.kanji}
      </Char>
      <Indicator>{order}/{totalCurrentCharList}</Indicator>
      <Control>
        <button onClick={nextOrder}>Next</button>
        <button onClick={shuffleList}>random</button>
      </Control>
    </Wrapper>
  );
};

export default KanjiCharWrapper;
