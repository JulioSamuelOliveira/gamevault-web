import NavBar from "@/components/nav-bar";

export default function WishListPage(){
    return(
        <>
        <NavBar active='wish-list' />

        <main className="flex justify-center">
            <div className="bg-violet-600 min-w-2/3 m-6 p-6 rounded">
                <h2 className="text-lg font-bold">Lista de Desejos</h2>
            </div>
        </main>
    </>
    )
}