import { Reducer } from "redux";
import { Answers } from "@crew/types";
import {
  ADD_ANSWER,
  DELETE_ANSWER,
  UPDATE_ANSWER,
  AddAnswerAction,
  DeleteAnswerAction,
  UpdateAnswerAction,
} from "../actions/answers";

type ActionTypes = AddAnswerAction | DeleteAnswerAction | UpdateAnswerAction;

const answersReducer: Reducer<Answers, ActionTypes> = (
  state = [],
  action: ActionTypes
): Answers => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ANSWER:
      if (state.some((item) => item.questionId === payload.questionId)) {
        return [...state];
      }

      return [...state, action.payload];

    case UPDATE_ANSWER:
      const answers = state.filter(
        ({ questionId }) => questionId !== payload.questionId
      );

      return [...answers, action.payload];

    case DELETE_ANSWER:
      return [];
    default:
      return state;
  }
};

export { answersReducer };
