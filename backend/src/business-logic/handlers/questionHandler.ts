import { QuestionMongoDatastore } from "../../drivers/datastores/questionMongoDatastore";

const dataStore = new QuestionMongoDatastore();
export async function getAllQuestions() {
  const questions = await dataStore.fetchQuestions();
  return questions;
}
