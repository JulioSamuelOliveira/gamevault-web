import GameItem from "@/components/game-item";
import NavBar from "@/components/nav-bar"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function GamesPage() {
    const data: Game[] = await getGames()

    return (
        <>
            <NavBar active='games' />

            <main className="flex justify-center">
                <div className="bg-violet-600 min-w-2/3 m-6 p-6 rounded">
                    <div className="flex justify-between">
                        <ul className="flex justify-around">
                            <li className="font-bold">Games</li>
                            <li className="font-bold">Gênero</li>
                            <li className="font-bold">Plataforma</li>
                            <li className="font-bold">Status</li>
                        </ul>
                        <Button asChild>
                            <Link href="/games/form">
                                <Plus />
                                novo jogo
                            </Link>
                        </Button>

                    </div>
                    {data.length == 0 ?
                        <p>Nenhuma categoria cadastrada</p> :
                        data.map(game => <GameItem key={game.id} game={game} />)
                    }

                </div>
            </main>
        </>
    )
}