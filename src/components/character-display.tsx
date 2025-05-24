"use client"
import Image from "next/image"

interface CharacterDisplayProps {
    hoveredSection: string | null
}

const characterImages = {
    default: "/character-default.png",
    projects: "/placeholder.svg?height=300&width=300&text=Projects+Character",
    workex: "/placeholder.svg?height=300&width=300&text=WorkEx+Character",
    pricing: "/placeholder.svg?height=300&width=300&text=Pricing+Character",
    contact: "/placeholder.svg?height=300&width=300&text=Contact+Character",
}

const characterDescriptions = {
    default: "Default character - problem solver",
    projects: "Projects character - showcasing work",
    workex: "Work experience character - professional mode",
    pricing: "Pricing character - business focused",
    contact: "Contact character - friendly and approachable",
}

export default function CharacterDisplay({ hoveredSection }: CharacterDisplayProps) {
    const currentImage =
        hoveredSection && characterImages[hoveredSection as keyof typeof characterImages]
            ? characterImages[hoveredSection as keyof typeof characterImages]
            : characterImages.default

    const currentDescription =
        hoveredSection && characterDescriptions[hoveredSection as keyof typeof characterDescriptions]
            ? characterDescriptions[hoveredSection as keyof typeof characterDescriptions]
            : characterDescriptions.default

    return (
        <div className="relative">
            {/* Golden circle background */}
            <div className="w-80 h-80 rounded-full border-4 border-yellow-400 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center overflow-hidden">
                <div className="relative w-72 h-72 transition-all duration-300 ease-in-out transform hover:scale-105">
                    <Image
                        src={currentImage || "/placeholder.svg"}
                        alt={currentDescription}
                        fill
                        className="object-cover rounded-full transition-opacity duration-300"
                        priority
                    />
                </div>
            </div>

            {/* Character change indicator */}
            {hoveredSection && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {hoveredSection.charAt(0).toUpperCase() + hoveredSection.slice(1)} Mode
                    </div>
                </div>
            )}
        </div>
    )
}
