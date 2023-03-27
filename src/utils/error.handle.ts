//Error Manager
import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    console.log(errorRaw);
    // res.status(500);
    // res.send({error});
    res.status(500).json({ error: error });
};

export {handleHttp};
