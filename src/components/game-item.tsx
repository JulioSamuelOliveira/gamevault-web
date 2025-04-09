import CrudDropdown from "./crud-dropdown";

interface GameItemProps {
    game: Games
}

export default function CategoryItem({ game }: GameItemProps) {
    return (
        <div className="flex justify-between mt-2">
            <div className="flex gap-2">
                <span>{game.game}</span>
            </div>

            <div>
                <CrudDropdown />
            </div>
        </div>
    )
}