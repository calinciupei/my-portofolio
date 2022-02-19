import { createSelector } from "reselect";
import { InitialState, Question, QuestionOptions, Questions, Answer, Answers } from "@crew/types";

export const getQuestionTitle = (state: InitialState, id: number): string =>
  state.questions[id] ? state.questions[id].title : "";

export const getQuestionOptions = (state: InitialState, id: number): QuestionOptions[] =>
  state.questions[id] ? state.questions[id].questions : [];

export const getAllQuestions = (state: InitialState): Questions => (state.questions ? state.questions : []);

export const getQuestionsLength = (state: InitialState): number => state.questions.length;

export const getAnswerById = (state: InitialState, id: string): Answer[] => {
  return state.answers.filter(({ questionId }) => questionId === parseInt(id));
};

export const getAnswers = (state: InitialState): Answer[] => state.answers;

export const getIntrovertAnswers = (state: InitialState): Answer[] =>
  state.answers.length ? state.answers.filter((answer) => answer.type === "INTROVERT") : [];

export const getExtrovertAnswers = (state: InitialState): Answer[] =>
  state.answers.length ? state.answers.filter((answer) => answer.type === "EXTROVERT") : [];

export const createQuestionSelector = () =>
  createSelector([getQuestionTitle, getQuestionOptions], (title, questions): Question => ({ title, questions }));

export const createAllQuestionsSelector = () =>
  createSelector(
    [getAllQuestions, getQuestionsLength],
    (
      questions,
      all
    ): {
      questions: Questions;
      all: number;
    } => ({ questions, all })
  );

export const createAnswerSelector = () => createSelector([getAnswerById], (answer): Answer[] => answer);

export const createAllAnswerSelector = () => createSelector([getAnswers], (answers): Answers => answers);

export const createTestResults = () =>
  createSelector([getIntrovertAnswers, getExtrovertAnswers], (introvert, extrovert) => ({ introvert, extrovert }));
