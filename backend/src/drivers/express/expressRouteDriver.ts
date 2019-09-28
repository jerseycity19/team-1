import { Router, Request } from "express";
//import * as userHandlerFunctions from "../../user-module/Business-Logic";
import * as userHandlerFunctions from "../../business-logic/handlers/userHandler";
import * as reportHandlerFunctions from "../../business-logic/handlers/reportsHandler";
import * as adminHandlerFunctions from "../../business-logic/handlers/adminHandler";
import * as questionHandlerFunctions from "../../business-logic/handlers/questionHandler";
import * as answerHandlerFunctions from "../../business-logic/handlers/answersHandler";

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
    this.initAdminRoutes(router);
    this.initQuestionRoutes(router);
    this.initAnswersRoutes(router);
    return router;
  }
  private static initUserRoutes(router: Router) {
    //get all users
    router.get("/api/users", async (req, res) => {
      res.json("Return all users");
      //  const payload = await userHandlerFunctions.fetchUsers();
      // res.send(payload);
    });
    router.post("/api/users", async (req, res) => {
      try {
        const info: userHandlerFunctions.Information = req.body.info;
        const userId = await userHandlerFunctions.addAnonUserInfo({ info });
        if (userId) {
          res.status(200).send(userId);
        }
      } catch (err) {
        res.status(404);
      }
      //call a function
    });
  }
  private static initReportsRoutes(router: Router) {
    /**
     * fetch all access logs, sort by date...
     */
    router.get("/api/reports", async (req, res) => {
      res.send("Show all access logs");
    });
    router.post("/api/reports", async (req, res) => {
      try {
        const info = req.body.info;
        const isComplete = await reportHandlerFunctions.addReport({ info });

        if (isComplete) {
          res.status(200);
        }
      } catch (err) {
        console.log(err);
      }

      //call a function
    });
  }
  private static initAdminRoutes(router: Router) {
    router.post("/api/admin", async (req, res) => {
      try {
        const loginInfo = req.body;
        const isComplete = await adminHandlerFunctions.login({ loginInfo });
        if (isComplete) {
          res.status(200);
        }
      } catch (err) {
        res.status(404);
      }
    });
  }

  private static initQuestionRoutes(router: Router) {
    //get all users
    router.get("/api/questions", async (req, res) => {
      try {
        const questions = await questionHandlerFunctions.getAllQuestions();
        if (questions) {
          res.status(200).send(questions);
        } else {
          return [{ text: "No Questions Retrieved" }];
        }
      } catch (err) {
        console.log(err);
      }
      //  const payload = await userHandlerFunctions.fetchUsers();
      // res.send(payload);
    });
  }

  private static initAnswersRoutes(router: Router) {
    //get all users
    router.get("/api/answers", async (req, res) => {
      try {
        const answers = await answerHandlerFunctions.getAllAnswers();
        if (answers) {
          res.status(200).send(answers);
        } else {
          return [{ text: "No Answers Retrieved" }];
        }
      } catch (err) {
        console.log(err);
      }
      //  const payload = await userHandlerFunctions.fetchUsers();
      // res.send(payload);
    });
    router.post("/api/answers", async (req, res) => {
      try {
        const answer = req.body.answer;
        if (answer) {
          await answerHandlerFunctions.addAnswer(answer);
          res.send(200);
        }
      } catch (err) {
        res.send(404);
      }
    });
    router.get("api/answers/metrics", async (req, res) => {
      try {
        const fullMetrics = await answerHandlerFunctions.getAllResponseData();
      } catch (err) {
        res.send(404);
        console.log(err);
      }
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
