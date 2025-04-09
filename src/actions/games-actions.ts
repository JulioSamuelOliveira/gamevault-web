import { redirect } from "next/navigation"

const API_URL = "http://localhost:8080/games"

export async function getGames() {
    const response = await fetch(API_URL)
    return await response.json()
}


export async function createGame(initialState: any, formData: FormData){
    const data = {
        game: formData.get("game"),
        genero: formData.get("genero"),
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(API_URL, options)

    if(!response.ok){
        const errors = await response.json()

        return {
            values: {
                game: formData.get("game"),
                genero: formData.get("genero"),
            },
            errors:{
                game: errors.find( error => error.field === "game")?.message,
                genero: errors.find( error => error.field === "genero")?.message,
            }
        }
    }

    redirect("/games")
}