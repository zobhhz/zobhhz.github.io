import PageHeader from "@/components/PageHeader";

export default function Page() {
    const details = [
        {
            title: "Role",
            value: "Full-Stack Developer, UI/UX Designer",
        },
        {
            title: "Duration",
            value: "March - October 2025",
        },
        {
            title: "Team",
            value: "Freelance Project",
        },
        {
            title: "Tech Stack",
            value: "TypeScript, Next.js, TailwindCSS, Contentful (REST API), Vercel",
        },
    ]
    return (
        <>
            <PageHeader title="Ilang-Ilang Restaurant" details={details} />
            {/* SUMMARY */}
            <div className="w-full max-w-7xl mx-auto p-10 sm:px-20 space-y-4">
                <h2 className="font-bold text-xl">Summary</h2>
                <p className="text-lg leading-snug lg:leading-normal whitespace-pre-line lg:whitespace-normal">
                    Developed and launched a fully responsive website for a family-owned restaurant in Binondo, helping
                    them showcase their menu and reach more customers online.{'\n\n'} The site features over 300 menu items
                    organized across multiple content types, all managed through a headless CMS for easy updates and
                    scalability.{'\n\n'} Since launch, the website has supported the restaurant&apos;s growth, attracting
                    over 1,000 monthly visitors and making it easier for the owners to update and manage content without
                    technical help.
                </p>
            </div>
        </>
    );
}