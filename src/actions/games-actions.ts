import { redirect } from "next/navigation"

const API_URL = "http://localhost:8080/games"

export async function getCategories() {
    const response = await fetch(API_URL)
    return await response.json()
}


export async function createCategory(initialState: any, formData: FormData){
    const data = {
        name: formData.get("game"),
        genero: formData.get("genero"),
        plataforma: formData.get("plataforma"),
        status: formData.get("status")
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
                name: formData.get("game"),
                genero: formData.get("genero"),
                plataforma: formData.get("plataforma"),
                status: formData.get("status")
            },
            errors:{
                name: errors.find( error => error.field === "name")?.message,
                genero: errors.find( error => error.field === "genero")?.message,
                plataforma: errors.find( error => error.field === "plataforma")?.message,
                status: errors.find( error => error.field === "status")?.message
            }
        }
    }

    redirect("/games")
}