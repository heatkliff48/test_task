import { SET_STUDY_PROGRAMM } from '../types';

export const programmsReducer = (programms = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_STUDY_PROGRAMM: {
      const programms = [];
      for (let i = 0; i < payload.length; i++) {
        let fModule = payload[i];
        for (let j = i + 1; j < payload.length; j++) {
          if (payload[j].title === fModule.title)
            programms.push([fModule, payload[j]]);
        }
      }
      return programms.slice(0, 10);
    }
    default:
      return programms;
  }
};
