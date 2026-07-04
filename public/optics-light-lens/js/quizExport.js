import { createQuizExport } from "../../shared/quiz/quizExport.js?v=20260704f";

const { downloadWord, printSheet } = createQuizExport({
  titleEnQuestions: "S3 Optics Light & Lens — Questions",
  titleEnAnswers: "S3 Optics Light & Lens — Answers",
  titleZhQuestions: "S3 光學 光與透鏡 — 試題",
  titleZhAnswers: "S3 光學 光與透鏡 — 答案",
  filePrefix: "optics_light_lens",
});

export { downloadWord, printSheet };
