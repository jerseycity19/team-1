import { MongoDriver } from "../mongo/mongoDriver";
require("dotenv").config();

export class QuestionMongoDatastore {
  questiondb: any;
  constructor() {
    MongoDriver.buildDriver(process.env.DB_URI as string, "questions").then(
      dataStore => {
        this.questiondb = dataStore;
      }
    );
  }
  async fetchQuestions() {
    try {
      console.log(this.questiondb);
      const response = await this.questiondb.find({}).toArray();
      console.log(response);
      return response;
    } catch (err) {
      console.log("mongo err: ", err);
    }
  }
}
