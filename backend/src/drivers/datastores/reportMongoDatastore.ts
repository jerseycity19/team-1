import { MongoDriver } from "../mongo/mongoDriver";

export class reportMongoDataStore {
  reportsdb: any;
  constructor() {
    MongoDriver.buildDriver(process.env.DB_URI as string, "reports").then(
      dataStore => {
        this.reportsdb = dataStore;
      }
    );
  }
  /**
   *
   * @param params {userInfo} information about a user trying to access the system.
   */
  async addReport(params: { reportsInfo: any }) {
    const { reportsInfo } = params;

    try {
      this.reportsdb.insert(reportsInfo);
    } catch (err) {
      console.log(err);
    }
  }
}
