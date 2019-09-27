import { Router, Request } from "express";
//import * as userHandlerFunctions from "../../user-module/Business-Logic";
import { Response } from "express-serve-static-core";
//import { loginRequest } from "../../shared/entity";
const version = require("../../../package.json").version;

export class ExpressRouteDriver {
  public static buildRoutes() {
    const router: Router = Router();

    /**
     * initialize welcome route
     */
    router.get("/", async (req, res) => {
      res.json({ version, message: "Welcome to the Scholars API " + version });
    });
    console.log("building routes");

    /**
     * initialize public routes
     */
    this.initUserRoutes(router);
    this.initReportsRoutes(router);
    return router;
  }
  private static initUserRoutes(router: Router) {
    //get all users
    router.get("/api/users", async (req, res) => {
      //  const payload = await userHandlerFunctions.fetchUsers();
      // res.send(payload);
    });
  }
  private static initReportsRoutes(router: Router) {
    /**
     * fetch all access logs, sort by date...
     */
    router.get("/api/reports", async (req, res) => {
      res.send("Show all access logs");
    });
  }
}

// async function createUserAccount(req: Request, res: Response) {
//   try {
//     const user = req.body.user;
//     const accountType = req.body.accountType;
//     const accessRights = req.body.accessRights;
//   //  await userHandlerFunctions.createUserAccount({ user, accountType });
//     res.sendStatus(200).json();
//   } catch (err) {
//     res.sendStatus(404);
//   }
// }

// async function login(req: Request, res: Response) {
//   try {
//     const loginRequest: loginRequest = { ...req.body };
//     const user = await userHandlerFunctions.login({ loginRequest });
//     res.status(200).send(user);
//   } catch (err) {
//     res.status(404);
//   }
// }

// async function loadFullUser(req: Request, res: Response) {
//   try {
//     return await userHandlerFunctions.loadFullUser();
//     res.status(200).send();
//   } catch (err) {
//     res.status(404);
//   }
// }
