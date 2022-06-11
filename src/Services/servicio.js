export async function consumirAPI(){

    const URI = "https://api.spotify.com/v1/artists/1WgXqy2Dd70QQOU7Ay074N/top-tracks?market=US"

    const TOKEN= "Bearer BQCUx4_enoTNu2XeH2aItKEoLb4vNqP78_4fQAULMg8KTm8e_alGBUpLsaPlKM9AvGChDRWgeDU4lqAKb_YlaijSsQAAIOdKVXopd3Z_LNWqemAP3I89c2kmiCh34q49qka2DXbkoy3jys_ciN4R6UFeT0nwTZlr3Fo3Kz203vjN6bTgeh1kfZyIm_5Lju4M"

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    //Consumiendo el servicio

    let respuesta= await fetch (URI,PETICION)
    let datoServicio= await respuesta.json()

    return datoServicio
}