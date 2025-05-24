const services = ["WEB DEVELOPMENT", "UI DESIGN", "CONSULTING"]

export default function ServiceTags() {
    return (
        <div className="flex flex-col space-y-4">
            {services.map((service, index) => (
                <div
                    key={service}
                    className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold text-sm lg:text-base w-fit hover:bg-gray-800 transition-colors duration-200 cursor-pointer transform hover:scale-105 transition-transform"
                    style={{
                        animationDelay: `${index * 0.1}s`,
                    }}
                >
                    {service}
                </div>
            ))}
        </div>
    )
}
