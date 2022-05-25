import { NextFunction, Request, Response } from "express";
import * as kabupatenKotaApi from "./kabupaten_kota";
import * as dbdApi  from "./dbd";

const getTimeApi = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const time = new Date().getTime();
        res.status(200).send({ time });
    } catch (e) {
        next(e);
    }
};

export const controllers = {
    ...kabupatenKotaApi,
    ...dbdApi,
    getTimeApi,
};