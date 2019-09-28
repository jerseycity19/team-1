import { ExpressDriver } from "./src/drivers/express/expressDriver";
import * as http from "http";
//import { MongoDriver } from "./src/drivers";
require("dotenv").config();

const app = ExpressDriver.build();
/**
 * build the express driver and start the application server.
 */
const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log("Scholars at risk API running on " + process.env.PORT);
});
