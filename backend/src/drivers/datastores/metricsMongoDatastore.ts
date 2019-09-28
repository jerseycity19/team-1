import { MongoDriver } from "../mongo/mongoDriver";

export class MetricsMongoDatastore {
  metricsdb: any;
  constructor() {
    MongoDriver.buildDriver(process.env.DB_URI as string, "metrics").then(
      dataStore => {
        this.metricsdb = dataStore;
      }
    );
  }
  async fetchMetrics() {
    return await this.metricsdb.find({}).toArray();
  }
}
