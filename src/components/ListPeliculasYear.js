import React, { useState, useEffect } from 'react'

const ListPeliculasYear = () => {
    const [peliculas, setPeliculas] = useState([])

    const numeroTotal = 6
    let tmpPeliculas = [];


    useEffect(() => {
        getPeliculas();
    }, [])

    const groupBy = key => array =>
        array.reduce(
            (objectsByKeyValue, obj) => ({
                ...objectsByKeyValue,
                [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj)
            }),
            {}
        );

    const getPeliculas = async () => {
        tmpPeliculas = []; //limpiar las peliculas

        for (let i = 1; i <= numeroTotal; i++) {

            const data = await fetch('https://jsonmock.hackerrank.com/api/movies?page=' + i + '')

            const peliculasApi = await data.json() // array de objetos por pagina

            for(let y = 0; y<peliculasApi.data.length; y++){
                tmpPeliculas.push(peliculasApi.data[y]);
            }

        }

        const groupByYear = groupBy('Year');
        const peliculasAgrupadas = groupByYear(tmpPeliculas);
        setPeliculas(peliculasAgrupadas);
     
        
        
    }
    console.log('peli:',peliculas);
 


    
    return (
        <>
        {
        }

      
        </>

    );
        
        
       

    
};




export default ListPeliculasYear
