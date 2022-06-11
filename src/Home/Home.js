import { consumirAPI } from "../Services/servicio.js"
import { useEffect, useState } from "react"


export function Home(){

    const[carga, setcarga]=useState(true)
    const[canciones, setcanciones]=useState(null)

    useEffect(function(){

    //llamando al servicio desde un componente
    consumirAPI()
    .then(function(respuesta){
        setcanciones(respuesta)
        setcarga(false)
    })
    },[])

    if(carga == true){
        return(
            <>
                <h1>Cargando</h1>
                <hr/>
            </>
        )    
    }else{
        return(
            <div>
                {
                   canciones.tracks.map(function(cancion,indice){
                    return(
                        <div key={indice}>
                        <h1>{cancion.name}</h1>
                        </div>
                    )
                   }) 
                }
            </div>
        )
    }


   
}