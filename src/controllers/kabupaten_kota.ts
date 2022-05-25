"use strict";

import { Response, Request, NextFunction } from "express";

export const getAllKabupatenKota = async (
    req: Request<{}, {}, {}>,
    res: Response,
    next: NextFunction
) => {
    try{
        const kabupaten_kota = await req.db.kabupaten_kota.findMany({
            orderBy: {
                createdAt: "asc",
            },
        });

        res.status(200).send(kabupaten_kota);
    } catch (err) {
        next(err);
    }
};


export const postCreateKabupatenKota = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // const { nama, jml_puskesmas, long_kordinat, lat_kordinat } = req.body;
        // const kabupaten_kota = await req.db.kabupaten_kota.create({
        //     data: {
        //         nama: nama,
        //         jml_puskesmas: jml_puskesmas,
        //         long_kordinat: long_kordinat,
        //         lat_kordinat: lat_kordinat,
        //     },
        // });

        // insert data
        // {
        //     "nama": "pacitan",
        //     "jml_puskesmas": 24,
        //     "long_kordinat": "874.8547485",
        //     "lat_kordinat": "-84.78345"
        // }

        const { kabupaten_kota_list } = req.body;
        const kabupaten_kota = await req.db.kabupaten_kota.createMany({
            data: kabupaten_kota_list,
        });

        res.status(201).send(kabupaten_kota);
    } catch (err) {
        next(err);
    }
};

export const deleteKabupatenKota = async (
    req: Request<{ id: string }, {}, {}>,
    res: Response,
    next: NextFunction
) => {
    try {
        await req.db.kabupaten_kota.delete({
            where: {
                id: req.params.id,
            },
        });

        res.status(200).send("Data deleted");
    } catch (err) {
        next(err);
    }
}