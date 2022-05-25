// import express, { Application, Request, Response } from "express";
// const app: Application = express();
// const dotenv = require('dotenv');

// dotenv.config();

// const port = process.env.PORT;
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get(
//     "/",
//     async (req: Request, res: Response): Promise<Response> => {
//         return res.status(200).send({
//             message: "jshdfjhdsf!",
//         });
//     }
// );

// app.listen(port, () => {
//   console.log(`[server]: Server is running at https://localhost:${port}`);
// });



import { createServer } from "./app";

/**
 * Error Handler. Provides full stack
 */

/**
 * Start Express server.
 */
createServer()
  .then((server) => {
    server.listen(process.env.PORT || 3000, () => {
      console.info(`Listening on http://localhost:` + process.env.PORT || 3000);
    });
  })
  .catch((err) => {
    console.error(`Error: ${err}`);
  });