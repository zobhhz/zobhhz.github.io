type PageHeaderProps = {
    title: string;
    details: { title: string, value: string }[]
}

export default function PageHeader({ title, details }: Readonly<PageHeaderProps>) {
    return (
        <section className="w-full bg-coral/10">
            <div className="flex flex-col items-start justify-center p-10 sm:p-20 space-y-10 max-w-7xl mx-auto">
                <h1 className="font-bold text-2xl lg:text-4xl">{title}</h1>
                {/* DETAILS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {details.map((detail => (
                        <ul key={detail.title} className="flex flex-col">
                            <li className="font-bold">{detail.title}</li>
                            <li >{detail.value}</li>
                        </ul>
                    )))}
                </div>

                {title == "Ilang-Ilang Restaurant" && (
                    <a
                        href="https://ilangilangrestaurant.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="align-center px-4 py-2 bg-coral text-white rounded text-center hover:text-white inline-block"
                    >
                        🔗 View Project
                    </a>
                )}
            </div>
        </section>
    );
}