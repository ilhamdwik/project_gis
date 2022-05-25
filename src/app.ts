import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
// import errorhandler from "errorhandler";
import compression from "compression";
import { PrismaClient } from "@prisma/client";
import { Express } from "express-serve-static-core";
import { controllers } from "./controllers/";

// type userPayload = {
//   email: string;
//   id: string;
//   user_id: string;
// };

declare global {
  namespace Express {
    export interface Request {
      db: PrismaClient;
    //   user?: userPayload;
    }
  }
}

export const createServer = async (): Promise<Express> => {
    var app = express();
    const prisma: PrismaClient = new PrismaClient();

    app.use(cors());
    app.set("port", process.env.PORT || 3001);
    // app.use(
    //     fileUpload({
    //     createParentPath: true,
    //     })
    // );
    app.use(compression());
    app.use(express.json());
    app.use(express.text());
    app.use(express.urlencoded({ extended: true }));
    

    app.use(express.static("public"));

    app.use((req, _res, next) => {
        req.db = prisma;

        next();
    });

    app.get(
      "/api/v1/get-time", 
      controllers.getTimeApi
    );
    app.get(
      "/api/v1/list/kabupaten_kota", 
      controllers.getAllKabupatenKota
    );
    app.post(
      "/api/v1/create/kabupaten_kota", 
      controllers.postCreateKabupatenKota
    );
    app.delete(
      "/api/v1/delete/kabupaten_kota/:id", 
      controllers.deleteKabupatenKota
    );

    app.get(
      "/api/v1/list/dbd", 
      controllers.getAllDbd
    );
    app.post(
      "/api/v1/create/dbd", 
      controllers.postCreateDbd
    );
    app.delete(
      "/api/v1/delete/dbd/:id", 
      controllers.deleteDbd
    );

    // ERROR FALLBACK
    app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
        console.error(err);
        res.status(500).send("Internal Server Error!");
    });

    return app;
};
