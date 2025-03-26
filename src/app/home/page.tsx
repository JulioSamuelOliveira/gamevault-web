import NavBar from "@/components/nav-bar";

export default function HomePage(){
    return(
        <>
        <NavBar active='home' />

        <main className="flex justify-center">
            <div className="bg-violet-600 min-w-2/3 m-6 p-6 rounded">
                <h2 className="text-lg font-bold">Home</h2>
            </div>
        </main>
    </>
    )
}