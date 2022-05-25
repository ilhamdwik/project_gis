"use strict";

import { Response, Request, NextFunction } from "express";

export const getAllDbd = async (
    req: Request<{}, {}, {}>,
    res: Response,
    next: NextFunction
) => {
    try{
        const dbd = await req.db.dbd.findMany({
            orderBy: {
                createdAt: "asc",
            },
        });

        res.status(200).send(dbd);
    } catch (err) {
        next(err);
    }
};


export const postCreateDbd = async (
    req: Request<
        {}, 
        {}, 
        {
            kabupaten_kota_id: string;
            jml_kasus_laki: number;
            jml_kasus_perempuan: number;
            jml_meninggal_laki: number;
            jml_meninggal_perempuan: number;
            cfr_laki: number;
            cfr_perempuan: number;
        }
    >,
    res: Response,
    next: NextFunction
) => {
    try {
        // console.log(req.body.jml_puskesmas)
        // console.log(req.body.long_kordinat)
        // console.log(req.body.lat_kordinat)
        const dbd = await req.db.dbd.create({
            data: {
                kabupaten_kota_id: req.body.kabupaten_kota_id,
                jml_kasus_laki: req.body.jml_kasus_laki,
                jml_kasus_perempuan: req.body.jml_kasus_perempuan,
                jml_meninggal_laki: req.body.jml_meninggal_laki,
                jml_meninggal_perempuan: req.body.jml_meninggal_perempuan,
                cfr_laki: req.body.cfr_laki,
                cfr_perempuan: req.body.cfr_perempuan,
            },
        });

        res.status(201).send(dbd);
    } catch (err) {
        next(err);
    }
};

export const deleteDbd = async (
    req: Request<{ id: string }, {}, {}>,
    res: Response,
    next: NextFunction
) => {
    try {
        await req.db.dbd.delete({
            where: {
                id: req.params.id,
            },
        });

        res.status(200).send("Data deleted");
    } catch (err) {
        next(err);
    }
}