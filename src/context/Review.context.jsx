import React, { createContext, useReducer } from 'react';
import { data as kanji } from '../data/data';

const initialState = {
  start: 1,
  finish: kanji.length,
  list: kanji,
  currentChar: kanji[0],
  order: 1,
};

export const ReviewContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_RANGE':
      return {
        ...state,
        start: action.payload.start,
        finish: action.payload.finish,
        order: 1,
        list: action.payload.newList,
        currentChar: action.payload.nextChar,
      };
    case 'NEXT_ORDER':
      return {
        ...state,
        order: action.payload.newOrder,
        currentChar: action.payload.nextChar,
      };
    case 'SHUFFLE_LIST':
      return {
        ...state,
        list: action.payload.newList,
        currentChar: action.payload.nextChar,
        order: 1,
      };
    default:
      return state;
  }
};

const ReviewProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    start,
    finish,
    list,
    currentChar,
    order,
  } = state;

  const changeRange = (start, finish) => {
    let newList;
    if(start && finish && start < finish && start > 0 && finish <= 3031) {
      newList = (kanji.slice(start - 1, finish));
      const nextChar = newList[0];
      dispatch({
        type: 'CHANGE_RANGE',
        payload: {
          start, finish, newList, nextChar,
        },
      });
    }
  };

  const nextOrder = () => {
    let newOrder = order + 1;

    if(newOrder > list.length) {
      newOrder = 1;
    }

    const nextChar = list[newOrder - 1];

    dispatch({
      type: 'NEXT_ORDER',
      payload: {
        newOrder,
        nextChar,
      },
    });
  };

  const shuffleList = (id) => {
    const newList = [];

    while(list.length > 0) {
      const x = Math.floor(Math.random() * list.length);

      newList.push(list.splice(x, 1)[0]);
    }

    const nextChar = newList[0];

    dispatch({ type: 'SHUFFLE_LIST', payload: { newList, nextChar } });
  };

  return (
    <ReviewContext.Provider
      value={{
        changeRange,
        shuffleList,
        nextOrder,
        start,
        finish,
        list,
        currentChar,
        order,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
