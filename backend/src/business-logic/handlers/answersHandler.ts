import { AnswersMongoDatastore } from "../../drivers/datastores/answersMongoDatastore";
import { ObjectId } from "bson";

interface userResponse {
  userId: string;
  response: string;
  questionId: string;
}
interface fullUserResponse {
  userId: string;
  reponses: [
    {
      questionId: string;
      responses: string;
    }
  ];
}

interface responseMetrics {}
const dataStore = new AnswersMongoDatastore();
export async function getAllAnswers() {
  const answers = await dataStore.fetchAnswers();
  return answers;
}

export async function addAnswer(answer: userResponse) {
  const info = answer;
  try {
    let dbResponse: any;
    console.log(answer);
    if (answer) {
      const document = await dataStore.fetchResponseByUserId(answer.userId);
      if (!document) {
        const response = mapAnswerDocToResponse(answer);
        const mappedResponse = {
          userId: answer.userId,
          response: [response]
        };
        dbResponse = await dataStore.addAnswer({ answerInfo: mappedResponse });
      } else {
        const response = mapAnswerDocToResponse(answer);
        console.log("response in else", response);
        document[0].response.push(response);
        dbResponse = await dataStore.updateResponseByUserId(document[0]);
      }
    }
    //   console.log(document);
    //   if (!document) {
    //     const response = mapAnswerDocToResponse(document);
    //     console.log(response);
    //     const mappedResponse = {
    //       userId: answer.userId,
    //       responses: [response]
    //     };
    //     dbResponse = await dataStore.addAnswer({
    //       answerInfo: mappedResponse
    //     });
    //   } else {
    //     console.log(mapAnswerDocToResponse(document));
    //     document.push(mapAnswerDocToResponse(document));
    //     const mappedResponse = {
    //       userId: answer.userId,
    //       responses: document
    //     };
    //     dbResponse = await dataStore.addAnswer({
    //       answerInfo: mappedResponse
    //     });
    //   }
    // }
    if (dbResponse) {
      return dbResponse;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getAllResponseData() {
  try {
    const dbResponse = await dataStore.fetchResponseMetrics();
  } catch (err) {
    console.log(err);
  }
}

function mapAnswerDocToResponse(document: any) {
  const responses = document.response;
  const questionId = document.questionId;
  return {
    responses,
    questionId
  };
}
