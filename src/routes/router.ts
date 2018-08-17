import {Router, Request, Response} from "express";
import MySQL from "../mysql/mysql";

const router = Router();

router.get("/expulsados/:id", (req: Request, res:Response)=>{

    let idCampeonato = req.params.id;

    const query = `
        SELECT  *
        FROM  tb_expulsados
        where id_campeonato = "`+idCampeonato+`"
        AND activo = 1
    `;

    MySQL.ejecutarQuery(query, (err:any, expulsados:Object[])=>{
        if(err)
        {
            return res.json({
                ok:false,
                obj:err
            });
            
        }
        else{
            return res.json({
                ok:true,
                obj:expulsados
            });
        }
    });
});

router.get("/encuentros/:idcampeonato", (req: Request, res:Response)=>{

    let idCampeonato = req.params.idcampeonato;

    const query = `
    SELECT
    e.id_encuentro, 
    es.nombre estadio,
    e.nro_fecha,
    e.fecha,
    e.puntos_local,
    e.puntos_visita,
    el.escudo escudo_equipo_local,
    el.nombre nombre_equipo_local,
    ev.escudo escudo_equipo_visita,
    ev.nombre nombre_equipo_visita

    FROM tb_encuentros e
    JOIN tb_equipo el on el.id_equipo = e.id_equipo_local
    JOIN tb_equipo ev on ev.id_equipo = e.id_equipo_visita
    JOIN tb_estadio es on es.id_estadio = e.id_estadio
    WHERE id_campeonato = "`+idCampeonato+`"
        
    `;

    MySQL.ejecutarQuery(query, (err:any, encuentros:Object[])=>{
        if(err)
        {
            return res.json({
                ok:false,
                obj:err
            });
            
        }
        else{
            return res.json({
                ok:true,
                obj:encuentros
            });
        }
    });
});

router.get("/encuentrodetalle/:id/:idserie", (req: Request, res:Response)=>{

    let idEncuentro = req.params.id;
    let idSerie = req.params.idserie;

    const query = `
        SELECT 
        e.nro_fecha,
        e.fecha,
        goles_local,
        amarillas_local,
        rojas_local,
        goles_visita,
        amarillas_visita,
        rojas_visita,
        el.escudo escudo_equipo_local,
        el.nombre nombre_equipo_local,
        ev.escudo escudo_equipo_visita,
        ev.nombre nombre_equipo_visita,
        numero_goles_local,
        numero_goles_visita

        FROM 
        tb_encuentro_detalle ed
        join tb_encuentros e on e.id_encuentro = ed.id_encuentro
        JOIN tb_equipo el on el.id_equipo = e.id_equipo_local
        JOIN tb_equipo ev on ev.id_equipo = e.id_equipo_visita
        where ed.id_encuentro = "`+idEncuentro+`"
        and id_serie = "`+idSerie+`"
        
    `;

    MySQL.ejecutarQuery(query, (err:any, encuentros:Object[])=>{
        if(err)
        {
            return res.json({
                ok:false,
                obj:err
            });
            
        }
        else{
            return res.json({
                ok:true,
                obj:encuentros
            });
        }
    });
});

router.get("/proximoencuentro/:idcampeonato/:equipo", (req: Request, res:Response)=>{

    let idCampeonato = req.params.idcampeonato;
    let equipo = req.params.equipo;

    const query = `
    SELECT es.nombre estadio,
    e.nro_fecha,
    e.fecha,
    el.escudo escudo_equipo_local,
    el.nombre nombre_equipo_local,
    ev.escudo escudo_equipo_visita,
    ev.nombre nombre_equipo_visita

    FROM tb_encuentros e
    JOIN tb_equipo el on el.id_equipo = e.id_equipo_local
    JOIN tb_equipo ev on ev.id_equipo = e.id_equipo_visita
    JOIN tb_estadio es on es.id_estadio = e.id_estadio
    WHERE id_campeonato = "`+idCampeonato+`"
    AND estado =0
    AND (
    id_equipo_local = "`+equipo+`"
    OR id_equipo_visita = "`+equipo+`"
    )
    ORDER BY nro_fecha asc
    LIMIT 0 , 1
    `;
    console.log(query);
    MySQL.ejecutarQuery(query, (err:any, encuentros:Object[])=>{
        if(err)
        {
            return res.json({
                ok:false,
                obj:err
            });
            
        }
        else{
            return res.json({
                ok:true,
                obj:encuentros
            });
        }
    });
});

router.get("/tablaposiciones/:tipo/:id", (req: Request, res:Response)=>{

    let idtipo = req.params.tipo;
    let idCampeonato = req.params.id;

    const query = `

    SELECT 
    @i:=@i+1 AS pos,
    el.escudo escudo_equipo_local,
    el.nombre nombre_equipo_local,
    p.puntos,
    p.partidos_jugados,
    p.partidos_ganados,
    p.partidos_perdidos,
    p.partidos_empatados
    FROM tb_tabla_posiciones p
    JOIN tb_equipo el on el.id_equipo = p.id_equipo,
    (SELECT @i:=0) AS foo
    WHERE id_campeonato = "`+idCampeonato+`"
    and  id_tabla_serie = "`+idtipo+`"
    ORDER BY puntos desc
    `;

    MySQL.ejecutarQuery(query, (err:any, tabla:Object[])=>{
        if(err)
        {
            return res.json({
                ok:false,
                obj:err
            });
            
        }
        else{
            return res.json({
                ok:true,
                obj:tabla
            });
        }
    });
});


export default router;