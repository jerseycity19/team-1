import { MetricsMongoDatastore } from "../../drivers/datastores/metricsMongoDatastore";

const dataStore = new MetricsMongoDatastore();

export async function fetchMetrics() {
  try {
    const metrics = await dataStore.fetchMetrics();
    console.log(metrics);
    return metrics[0];
  } catch (err) {}
}
