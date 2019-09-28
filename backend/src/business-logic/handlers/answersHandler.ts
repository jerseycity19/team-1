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

export async function addAnswer(answers: userResponse[]) {
  try {
    let dbResponse: any;
    console.log(answers);
    if (answers) {
      const response = answers.map(answer => mapAnswerDocToResponse(answer));
      const mappedResponse = {
        userId: answers[0].userId,
        response
      };
      console.log(mappedResponse);
      dbResponse = await dataStore.addAnswer({ answerInfo: mappedResponse });
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
    /**
     * The proper implementation would be to call
     * @function fetchResponseMetrics(), however with time constraints we are returning dummy data
     * to show that the functionality would be a part of the API.
     */
    const dbResponse = await dataStore.fetchResponseMetrics();

    const mongodbInfo = [
      {
        Question:
          "Since the start of the last academic year, how often have you self-censored your professional expression (research, teaching/studies, publication, public expression) because of fear of professional, legal, or violent retaliation?",
        USA: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        },
        Pakistan: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        },
        unitedKingdom: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        },
        Israel: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        },
        Turkey: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        }
      },
      {
        question:
          "Compared to before the start of the last academic year, are you more or less likely today to self-censor your professional expression (research, teachings/studies, publication, public expression) because of fear of professional, legal, or violent retaliation?",
        USA: {
          "more likely": 34,
          "less likely": 40,
          "about the same": 45
        },
        Pakistan: {
          "more likely": 34,
          "less likely": 40,
          "about the same": 45
        },
        unitedKingdom: {
          "more likely": 34,
          "less likely": 40,
          "about the same": 45
        },
        Israel: {
          "more likely": 34,
          "less likely": 40,
          "about the same": 45
        },
        Turkey: {
          "more likely": 34,
          "less likely": 40,
          "about the same": 45
        }
      },
      {
        question:
          "Since the start of the last academic year, how many professional colleagues or students are you aware of who have self-censored their professional expression (research, teaching/studies, publication, public expression) because of fear of professional, legal, or violent retaliation?",
        USA: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        },
        Pakistan: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        },
        unitedKingdom: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        },
        Israel: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        },
        Turkey: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        }
      },
      {
        question:
          "Since the start of the last academic year, how often have you advised any professional colleagues or students to self-sensor their professional expression (research, teaching/studies, publication, public expression) because of fear of professional, legal, or violent retaliation?",
        USA: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        },
        Pakistan: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        },
        unitedKingdom: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        },
        Israel: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        },
        Turkey: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        }
      },
      {
        question:
          "What is the primary source of consequences that you or any professional colleagues or students might fear that would cause you to self-censor your professional expression (research, teaching/studies, publication, public expression)? ",
        USA: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        },
        Pakistan: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        },
        unitedKingdom: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        },
        Israel: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        },
        Turkey: {
          never: 34,
          sometimes: 40,
          frequently: 45,
          "all the time": 76
        }
      },
      {
        question:
          "Since the start of the last academic year, have you experienced any professional, legal, or violent retaliation for your professional expression (research, teachings/studies, publication, public expression)?",
        USA: {
          Yes: 34,
          no: 40,
          "not sure": 45
        },
        Pakistan: {
          Yes: 34,
          no: 40,
          "not sure": 45
        },
        unitedKingdom: {
          Yes: 34,
          no: 40,
          "not sure": 45
        },
        Israel: {
          Yes: 34,
          no: 40,
          "not sure": 45
        },
        Turkey: {
          Yes: 34,
          no: 40,
          "not sure": 45
        }
      },
      {
        question:
          "Since the start of the last academic year, are you aware of any professional colleagues or students who have experienced any professional, legal, or violent retaliation for their professional expression (research, teachings/studies, publication, public expression)?",
        USA: {
          None: 34,
          "a few": 40,
          "a majority": 45,
          "almost all": 76
        },
        Pakistan: {
          None: 34,
          "a few": 40,
          "a majority": 45,
          "almost all": 76
        },
        unitedKingdom: {
          None: 34,
          "a few": 40,
          "a majority": 45,
          "almost all": 76
        },
        Israel: {
          None: 34,
          "a few": 40,
          "a majority": 45,
          "almost all": 76
        },
        Turkey: {
          None: 34,
          "a few": 40,
          "a majority": 45,
          "almost all": 76
        }
      }
    ];

    return mongodbInfo;
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
