import { MongoDriver } from "../mongo/mongoDriver";
import { ObjectId } from "bson";
var ObjectID = require("mongodb").ObjectID;

require("dotenv").config();

export class AnswersMongoDatastore {
  answersdb: any;
  constructor() {
    MongoDriver.buildDriver(process.env.DB_URI as string, "responses").then(
      dataStore => {
        this.answersdb = dataStore;
      }
    );
  }
  async fetchAnswers() {
    try {
      console.log(this.answersdb);
      const response = await this.answersdb.find({}).toArray();
      console.log(response);
      return response;
    } catch (err) {
      console.log("mongo err: ", err);
    }
  }

  async fetchResponseMetrics() {
    try {
      /**
       * Unifinished aggregation for fetching user information on
       * answered questions, what country the user is from and how many people from a certain country are
       * giving certain answers.
       */
      await this.answersdb.aggregate([{}]);
    } catch (err) {
      console.log(err);
    }
  }

  async fetchResponseByUserId(userId: string) {
    try {
      console.log(`ObjectId("${userId}")`);
      const response = await this.answersdb.find({ userId }).toArray();
      console.log("document", response);
      if (response) {
        if (response.length) {
          return response;
        }
      }
    } catch (err) {
      console.log("Mongo Error: ", err);
    }
  }

  async updateResponseByUserId(document: any) {
    await this.answersdb.replaceOne({ id: document.userId }, document);
  }

  async addAnswer(params: { answerInfo: any }) {
    const { answerInfo } = params;
    let confirmation!: any;
    try {
      console.log(answerInfo);
      confirmation = await this.answersdb.insertOne(answerInfo, {
        upsert: true
      });
      return true;
    } catch (err) {
      console.log(err);
    }
  }
}
