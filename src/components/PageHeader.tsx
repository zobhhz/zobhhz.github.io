type PageHeaderProps = {
    title: string;
    details: { title: string, value: string }[];
    subtitle?: string;
    links?: { label: string; href: string }[];
}

export default function PageHeader({ title, details, subtitle, links }: Readonly<PageHeaderProps>) {
    const colClass = details.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
    return (
        <section className="w-full bg-coral/10">
            <div className="flex flex-col items-start justify-center p-10 sm:p-20 space-y-10 max-w-7xl mx-auto">
                <div>
                    <h1 className="font-bold text-2xl lg:text-4xl">{title}</h1>
                    {subtitle && <p className="italic text-lg mt-2">{subtitle}</p>}
                </div>
                {/* DETAILS */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 ${colClass} gap-4`}>
                    {details.map((detail => (
                        <ul key={detail.title} className="flex flex-col">
                            <li className="font-bold">{detail.title}</li>
                            <li>{detail.value}</li>
                        </ul>
                    )))}
                </div>
                {/* LINKS */}
                {links && links.length > 0 && (
                    <div className="flex flex-row space-x-4">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-coral text-white rounded text-center inline-block hover:scale-105 transition-all duration-150"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}