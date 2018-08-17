import MySQL from "../mysql/mysql";

export default class Encuentro{

    constructor() {

    }

    static obtenerEncuentrosPorCampeonato(idCampeonato:number)
    {
        console.log("obtenerEncuentrosPorCampeonato");

        const query = `
            SELECT 
            e.id_encuentro,
            e.id_equipo_local,
            e.id_equipo_visita,
            el.nombre nombrelocal,
            el.escudo escudolocal,
            ev.nombre nombrevisita,
            ev.escudo escudovisita,
            es.nombre estadio
            FROM 
            tb_fecha f
            inner JOIN tb_encuentro e ON e.id_fecha = f.id_fecha
            INNER JOIN tb_estadio es on es.id_estadio = e.id_estadio
            inner JOIN tb_equipo el ON el.id_equipo = e.id_equipo_local
            inner JOIN tb_equipo ev ON ev.id_equipo = e.id_equipo_visita
            where f.id_campeonato = "`+idCampeonato+`" 
            and estado = 1 
            order by f.id_fecha desc
        `;

        MySQL.ejecutarQuery(query, (err:any, encuentros:Object[])=>{
            if(err)
            {
                return {
                    ok:false,
                    err
                };
                
            }
            else{

                

                return {
                    ok:true,
                    encuentros
                };
            }
        });

    }

}