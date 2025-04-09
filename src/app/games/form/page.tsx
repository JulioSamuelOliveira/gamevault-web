"use client"

import { createGame } from "@/actions/games-actions";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

const initialState = {
    values:{
        game: "",
        genero: ""
    },
    errors:{
        game: "",
        genero: ""
    }
}

export default function GameFormPage(){
    const [state, formAction, pending] = useActionState(createGame, initialState)
    
    return (
        <>
           <NavBar active="games" />

            <main className="flex justify-center">
                <div className="bg-violet-600 min-w-2/3 m-6 p-6 rounded">
                    <h2 className="text-lg font-bold">Cadastrar Jogo</h2>

                    <form action={formAction} className="space-y-4 mt-4">
                        
                        <div>
                            <Input 
                                name="game" 
                                placeholder="Nome do jogo" 
                                aria-invalid={!!state?.errors.game} 
                                defaultValue={state?.values.game}
                                className="border-black border-2"
                            />
                            <span className="text-sm text-destructive">{state?.errors.game}</span>
                        </div>

                        <div>
                            <Input 
                                name="genero" 
                                placeholder="Gênero do jogo" 
                                aria-invalid={!!state?.errors.genero}
                                defaultValue={state?.values.genero}
                                className="border-black border-2"
                             />
                            <span className="text-sm text-destructive">{state?.errors.genero}</span>
                        </div>

                        <div className="flex justify-between ">
                            <Button asChild variant={"outline"}>
                                <Link href="/games">
                                    <ArrowLeft />
                                    Cancelar
                                </Link>
                            </Button>

                            <Button className="bg-violet-950 hover:bg-violet-900">
                                <Check />
                                Salvar
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}