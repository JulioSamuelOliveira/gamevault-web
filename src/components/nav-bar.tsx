import Link from "next/link";

interface NavBarProps {
    active: "home" | "wish-list" | "games"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const activeClass = "border-b-4 border-violet-950 pb-2"

    const links = [
        { text: "home", href: "/home" },
        { text: "wish-list", href: "/wish-list" },
        { text: "games", href: "/games" },
    ]

    return (
        <nav className="flex justify-between items-center bg-violet-600 p-6">
            <h1 className="text-3xl font-bold">GameVault</h1>
            <ul className="flex gap-4">
                {links.map(link =>
                    <li className={active === link.text ? activeClass : ""}>
                        <Link href={link.href}>{link.text}</Link>
                    </li>
                )}
            </ul>
            <img className="size-12 rounded-full" src="http://github.com/JulioSamuelOliveira.png" alt="" />
        </nav>
    )
}