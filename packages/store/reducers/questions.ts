import { Reducer } from "redux";
import { Questions } from "@crew/types";
import { questions } from "../mockState/questions";

import {
  SET_QUESTIONS,
  SetQuestionsAction,
} from "@crew/store/actions/questions";

type ActionTypes = SetQuestionsAction;

const questionsReducer: Reducer<Questions, ActionTypes> = (
  state = [],
  action: ActionTypes
): Questions => {
  switch (action.type) {
    case SET_QUESTIONS:
      return [...questions];
    default:
      return state;
  }
};

export { questionsReducer };
