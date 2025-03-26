import { Star } from "lucide-react";

export default function CategoryItem() {
    return (
        <div className="mt-4">
            <table className="w-full text-left border-collapse">
                <tbody>
                    {Array(4).fill(0).map((_, index) => (
                        <tr key={index} className="border-t">
                            <td className="px-4 py-2 flex items-center gap-2">
                                <Star /> God of War
                            </td>
                            <td className="px-4 py-2">Ação</td>
                            <td className="px-4 py-2">PC/Console</td>
                            <td className="px-4 py-2">Zerado</td>
                            <td className="px-4 py-2 text-center">...</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// import { Star } from "lucide-react";

// const games = [
//     { name: "God of War", genre: "Ação", platform: "PC/Console", status: "Zerado" },
//     { name: "The Witcher 3", genre: "RPG", platform: "PC/Console", status: "Jogando" },
//     { name: "Red Dead Redemption 2", genre: "Aventura", platform: "PC/Console", status: "Zerado" },
//     { name: "Dark Souls 3", genre: "RPG", platform: "PC/Console", status: "Finalizado" }
// ];

// export default function CategoryItem() {
//     return (
//         <div className="mt-4">
//             <table className="w-full text-left border-collapse">
//                 </thead>
//                 <tbody>
//                     {games.map((game, index) => (
//                         <tr key={index} className="border-t">
//                             <td className="px-4 py-2 flex items-center gap-2">
//                                 <Star /> {game.name}
//                             </td>
//                             <td className="px-4 py-2">{game.genre}</td>
//                             <td className="px-4 py-2">{game.platform}</td>
//                             <td className="px-4 py-2">{game.status}</td>
//                             <td className="px-4 py-2 text-center">...</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
