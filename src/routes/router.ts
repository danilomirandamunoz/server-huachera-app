import {Router, Request, Response} from "express";
import MySQL from "../mysql/mysql";

const router = Router();

router.get("/expulsados", (req: Request, res:Response)=>{

    const query = `
        SELECT  *
        FROM  tb_expulsados
    `;

    MySQL.ejecutarQuery(query, (err:any, expulsados:Object[])=>{
        if(err)
        {
            return res.status(400).json({
                ok:false,
                err
            });
            
        }
        else{
            return res.json({
                ok:true,
                expulsados
            });
        }
    });
});


export default router;