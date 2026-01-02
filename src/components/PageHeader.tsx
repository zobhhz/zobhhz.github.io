type PageHeaderProps = {
    title: string;
    details: { title: string, value: string }[]
}

export default function PageHeader({ title, details }: Readonly<PageHeaderProps>) {
    const colClass = details.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
    return (
        <section className="w-full bg-coral/10">
            <div className="flex flex-col items-start justify-center p-10 sm:p-20 space-y-10 max-w-7xl mx-auto">
                <h1 className="font-bold text-2xl lg:text-4xl">{title}</h1>
                {/* DETAILS */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 ${colClass} gap-4`}>
                    {details.map((detail => (
                        <ul key={detail.title} className="flex flex-col">
                            <li className="font-bold">{detail.title}</li>
                            <li>{detail.value}</li>
                        </ul>
                    )))}
                </div>

                {title == "Ilang-Ilang Restaurant" && (
                    <a
                        href="https://ilangilangrestaurant.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="align-center px-4 py-2 bg-coral text-white rounded text-center inline-block hover:scale-105 transition-all duration-150"
                    >
                        🔗 View Project
                    </a>
                )}

                {title == "Parking Lot Management System" && (
                    <div className="flex flex-row space-x-4">
                        <a
                            href="https://parking-system-theta-two.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="align-center px-4 py-2 bg-coral text-white rounded text-center inline-block hover:scale-105 transition-all duration-150"
                        >
                            🔗 Live Demo
                        </a>
                        <a
                            href="https://github.com/zobhhz/parking-system"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="align-center px-4 py-2 bg-coral text-white rounded text-center inline-block hover:scale-105 transition-all duration-150"
                        >
                            ⚙️ Github Repository
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}