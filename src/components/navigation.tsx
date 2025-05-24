"use client"

interface NavigationProps {
    onHover: (section: string | null) => void
}

const navItems = [
    { name: "Projects", key: "projects" },
    { name: "WorkEx", key: "workex" },
    { name: "Pricing", key: "pricing" },
    { name: "Contact", key: "contact" },
]

export default function Navigation({ onHover }: NavigationProps) {
    return (
        <nav className="flex space-x-8 lg:space-x-12">
            {navItems.map((item) => (
                <a
                    key={item.key}
                    href={`#${item.key}`}
                    className="text-gray-800 font-semibold text-lg lg:text-xl hover:text-gray-600 transition-colors duration-200 relative group"
                    onMouseEnter={() => onHover(item.key)}
                    onMouseLeave={() => onHover(null)}
                >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
                </a>
            ))}
        </nav>
    )
}
