import { createQuizExport } from "../../shared/quiz/quizExport.js?v=20260704e";

const { downloadWord, printSheet } = createQuizExport({
  titleEnQuestions: "F.3 Heat Final Exam — Questions",
  titleEnAnswers: "F.3 Heat Final Exam — Answers",
  titleZhQuestions: "F.3 熱學 Final Exam — 試題",
  titleZhAnswers: "F.3 熱學 Final Exam — 答案",
  filePrefix: "f3_heat_final_exam",
});

export { downloadWord, printSheet };
