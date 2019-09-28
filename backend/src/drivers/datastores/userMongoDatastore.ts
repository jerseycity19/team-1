import { MongoDriver } from "../mongo/mongoDriver";

export class UserMongoDataStore {
  userdb: any;
  constructor() {
    MongoDriver.buildDriver(process.env.DB_URI as string, "users").then(
      dataStore => {
        this.userdb = dataStore;
      }
    );
  }
  /**
   *
   * @param params {userInfo} information about a user trying to access the system.
   */
  async addUser(params: { userInfo: any }) {
    const { userInfo } = params;
    let confirmation!: any;
    try {
      confirmation = await this.userdb.insertOne(userInfo);
      return confirmation.insertedId;
    } catch (err) {
      console.log(err);
    }
  }
  async findUser() {}
}
