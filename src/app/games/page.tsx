import CategoryItem from "@/components/category-item";
import NavBar from "@/components/nav-bar"

export default function GamesPage(){
    return(
        <>
        <NavBar active='games' />

        <main className="flex justify-center">
            <div className="bg-violet-600 min-w-2/3 m-6 p-6 rounded">
            <ul className="flex justify-around">
                <li className="font-bold">Games</li>
                <li className="font-bold">Gênero</li>
                <li className="font-bold">Plataforma</li>
                <li className="font-bold">Status</li>
            </ul>
                <CategoryItem />
            </div>
        </main>
    </>
    )
}